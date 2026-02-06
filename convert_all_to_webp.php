<?php

$dir = 'd:/porta/public/img';
$files = scandir($dir);

foreach ($files as $file) {
    if ($file === '.' || $file === '..') continue;

    $path = $dir . '/' . $file;
    $info = pathinfo($path);
    $ext = strtolower($info['extension'] ?? '');

    if (in_array($ext, ['jpg', 'jpeg', 'png'])) {
        $outputFile = $dir . '/' . $info['filename'] . '.webp';

        echo "Processing $file...\n";

        // Load image
        $img = null;
        if ($ext === 'png') {
            $img = imagecreatefrompng($path);
            imagepalettetotruecolor($img);
            imagealphablending($img, true);
            imagesavealpha($img, true);
        } else {
            $img = imagecreatefromjpeg($path);
        }

        if (!$img) {
            echo "Failed to load $file\n";
            continue;
        }

        // Get dimensions
        $width = imagesx($img);
        $height = imagesy($img);

        // Resize if too big (max 1920)
        $maxWidth = 1920;
        if ($width > $maxWidth) {
            $newWidth = $maxWidth;
            $newHeight = floor($height * ($maxWidth / $width));

            $tmpImg = imagecreatetruecolor($newWidth, $newHeight);

            // Handle transparency for PNG
            if ($ext === 'png') {
                imagealphablending($tmpImg, false);
                imagesavealpha($tmpImg, true);
                $transparent = imagecolorallocatealpha($tmpImg, 255, 255, 255, 127);
                imagefilledrectangle($tmpImg, 0, 0, $newWidth, $newHeight, $transparent);
            }

            imagecopyresampled($tmpImg, $img, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
            imagedestroy($img);
            $img = $tmpImg;
            echo "  Resized to $newWidth x $newHeight\n";
        }

        // Save as webp
        if (imagewebp($img, $outputFile, 80)) {
            echo "  Saved as " . basename($outputFile) . " (" . round(filesize($outputFile) / 1024, 2) . " KB)\n";
        } else {
            echo "  Failed to save webp\n";
        }

        imagedestroy($img);
    }
}
echo "Done!\n";
