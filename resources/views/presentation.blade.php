<!-- ========================================================================= -->
<!-- ARCHIVO CENTRAL: presentation.blade.php                                   -->
<!-- Este es el motor principal de la presentación: orquesta Slides, CSS y JS. -->
<!-- ========================================================================= -->

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIT - Presentación Corporativa</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2563EB",
                        "secondary": "#16A34A",
                        "dark-bg": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "sans": ["Inter", "sans-serif"]
                    },
                    backgroundImage: {
                        'hero-pattern': "url('img/shield_bg.webp')",
                        'network-pattern': "url('img/network_bg.webp')",
                    }
                },
            },
        }
    </script>

    <style>
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }

        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        body {
            background-color: #0f172a;
            overflow: hidden;
            /* Force snap container to handle scrolling */
        }

        .slide-content {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s ease-out;
        }

        .snap-center.active .slide-content {
            opacity: 1;
            transform: translateY(0);
        }

        /* Stitch Design Utilities */
        .compliance-badge {
            @apply flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow;
        }

        .step-connector {
            @apply absolute top-10 -right-6 w-12 h-0.5 bg-slate-200 hidden lg:block;
        }

        .sector-card {
            @apply p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center group;
        }

        /* Particle Canvas */
        #particle-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 5;
        }

        /* Hexagon Utils - Premium Glassmorphism */
        .clip-hex {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .hex-card {
            width: 140px;
            height: 160px;
            background: rgba(15, 23, 42, 0.6);
            /* Darker, more transparent */
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(56, 189, 248, 0.3);
            /* Cyan border */
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 1rem;
            position: relative;
            transition: all 0.4s ease;
        }

        .hex-card:hover {
            transform: scale(1.05) translateY(-5px);
            background: rgba(15, 23, 42, 0.8);
            border-color: rgba(56, 189, 248, 0.8);
            box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);
            z-index: 10;
        }

        .hex-border {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(56, 189, 248, 0.5), transparent);
            z-index: -1;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            margin: -1px;
            opacity: 0.5;
        }
    </style>
</head>

<body class="antialiased font-sans">

    <canvas id="particle-canvas"></canvas>

    <!-- Navigation Overlay -->


    <!-- Scroll Controls (Crystal Effect) -->
    <div class="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        <button onclick="prevSlide()" class="group p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.6)] active:scale-95">
            <span class="material-symbols-outlined text-white opacity-70 group-hover:opacity-100 transition-opacity">keyboard_arrow_up</span>
        </button>
        <button onclick="nextSlide()" class="group p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.6)] active:scale-95">
            <span class="material-symbols-outlined text-white opacity-70 group-hover:opacity-100 transition-opacity">keyboard_arrow_down</span>
        </button>
    </div>

    <!-- Main Scroll Container -->
    <main id="scroller" class="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">

        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 1 - HERO / PANTALLA PRINCIPAL                  -->
        <!-- ############################################################ -->
        <!-- Slide 1: Hero (Hexagon Network Design) -->
        <section id="slide-hero" class="min-h-screen lg:h-screen w-full snap-center relative flex items-center justify-center overflow-hidden bg-dark-bg text-white py-20 lg:py-0">
            <!-- Dynamic Background (Restored Shield BG + Particles) -->
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-40"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-blue-900/30"></div>
            </div>

            <div class="slide-content relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 items-center h-full pt-20 lg:pt-0">

                <!-- Left Column: Branding & Text -->
                <div class="lg:col-span-5 flex flex-col justify-center text-left pl-4">
                    <!-- Unified Partner Logos Pill (LOCKED) -->
                    @include('partials.brand_pill')

                    <div class="relative">
                        <div class="absolute -left-4 -top-4 w-20 h-20 bg-blue-500/20 blur-3xl rounded-full"></div>
                        <h1 class="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 lg:mb-6 tracking-tight leading-[1.1] drop-shadow-2xl text-center lg:text-left">
                            Ciberseguridad <br />
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 animate-pulse drop-shadow-lg" style="text-shadow: 0 0 30px rgba(6,182,212,0.5);">Proactiva</span>
                        </h1>
                    </div>

                    <h2 class="text-lg md:text-2xl font-light text-slate-300 mb-4 lg:mb-8 flex items-center justify-center lg:justify-start gap-3">
                        con <strong class="text-white font-bold text-xl md:text-3xl">Tenable One</strong>
                    </h2>

                    <p class="text-xs md:text-lg text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 border-l-2 lg:border-l-4 border-cyan-500 pl-4 lg:pl-6 py-1 lg:py-2 bg-gradient-to-r from-cyan-900/10 to-transparent text-center lg:text-left">
                        Unificamos la visibilidad de activos, vulnerabilidades y amenazas en una sola plataforma.
                    </p>
                </div>

                <!-- Right Column: Hexagon Network (Exploded & Modern) -->
                <div class="lg:col-span-7 h-[250px] md:h-[600px] lg:h-[700px] relative flex items-center justify-center perspective-[2000px] scale-[0.45] md:scale-[0.8] lg:scale-100 mt-4 lg:mt-0">
                    <!-- 3D Inclined Plane Container -->
                    <div class="relative w-[650px] h-[650px] flex items-center justify-center transform transition-transform duration-700 hover:rotate-x-12 hover:rotate-y-12" style="transform-style: preserve-3d;">

                        <!-- Laser Connection Lines (Glowing) -->
                        <svg class="absolute inset-0 w-full h-full z-0 pointer-events-none drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" style="transform: translateZ(-50px);">
                            <defs>
                                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.4" />
                                    <stop offset="100%" style="stop-color:#0f172a;stop-opacity:0" />
                                </radialGradient>
                                <linearGradient id="laserBeam" gradientUnits="userSpaceOnUse" x1="50%" y1="50%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0" />
                                    <stop offset="50%" style="stop-color:#06b6d4;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0" />
                                </linearGradient>
                            </defs>

                            <!-- Central Glow -->
                            <circle cx="50%" cy="50%" r="40%" fill="url(#hubGlow)" />

                            <!-- Beams -->
                            <g stroke="cyan" stroke-width="1.5" stroke-opacity="0.6">
                                <!-- Top -->
                                <line x1="50%" y1="42%" x2="50%" y2="15%" />
                                <!-- Top Right -->
                                <line x1="56%" y1="46%" x2="82%" y2="30%" />
                                <!-- Bot Right -->
                                <line x1="56%" y1="54%" x2="82%" y2="70%" />
                                <!-- Bot -->
                                <line x1="50%" y1="58%" x2="50%" y2="85%" />
                                <!-- Bot Left -->
                                <line x1="44%" y1="54%" x2="18%" y2="70%" />
                                <!-- Top Left -->
                                <line x1="44%" y1="46%" x2="18%" y2="30%" />
                            </g>
                        </svg>

                        <!-- Center Node (Hub) -->
                        <div class="absolute z-30 flex flex-col items-center justify-center" style="transform: translateZ(20px);">
                            <div class="w-44 h-48 clip-hex bg-slate-900/90 flex items-center justify-center relative shadow-[0_0_80px_rgba(37,99,235,0.8)] border-0 ring-4 ring-cyan-500/20 backdrop-blur-xl">
                                <div class="absolute inset-0 bg-gradient-to-tr from-blue-700/50 to-cyan-400/30"></div>

                                <!-- Rotating Ring Effect -->
                                <div class="absolute inset-2 clip-hex border-2 border-cyan-400/40 animate-pulse"></div>

                                <div class="relative z-10 flex flex-col items-center">
                                    <span class="material-symbols-outlined text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] mb-2">hub</span>
                                    <span class="text-[0.55rem] font-black uppercase tracking-[0.15em] text-cyan-200 leading-tight">Plataforma<br>Unificada</span>
                                </div>
                            </div>
                        </div>

                        <!-- Satellites (Orbiting with distinct spacing) -->
                        <!-- Using a visual radius of ~250px to ensure NO overlap -->

                        <!-- 1. Top -->
                        <div class="absolute top-[0%] left-1/2 -translate-x-1/2 z-40 hover:z-50 hover:scale-110 transition-all duration-300" style="transform: translateZ(50px);">
                            <div class="w-32 h-36 clip-hex bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 flex flex-col items-center justify-center text-center shadow-lg hover:bg-cyan-900/40">
                                <span class="material-symbols-outlined text-3xl mb-1 text-cyan-400 drop-shadow-md">cloud_done</span>
                                <span class="text-xs font-bold text-white leading-tight">Seguridad<br>Cloud</span>
                            </div>
                        </div>

                        <!-- 2. Top Right -->
                        <div class="absolute top-[18%] right-[5%] z-40 hover:z-50 hover:scale-110 transition-all duration-300" style="transform: translateZ(50px);">
                            <div class="w-32 h-36 clip-hex bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 flex flex-col items-center justify-center text-center shadow-lg hover:bg-cyan-900/40">
                                <span class="material-symbols-outlined text-3xl mb-1 text-blue-400 drop-shadow-md">travel_explore</span>
                                <span class="text-xs font-bold text-white leading-tight">Superficie<br>de Ataque</span>
                            </div>
                        </div>

                        <!-- 3. Bottom Right -->
                        <div class="absolute bottom-[18%] right-[5%] z-40 hover:z-50 hover:scale-110 transition-all duration-300" style="transform: translateZ(50px);">
                            <div class="w-32 h-36 clip-hex bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 flex flex-col items-center justify-center text-center shadow-lg hover:bg-cyan-900/40">
                                <span class="material-symbols-outlined text-3xl mb-1 text-indigo-400 drop-shadow-md">bug_report</span>
                                <span class="text-xs font-bold text-white leading-tight">Gestión<br>Vulnerabilidad</span>
                            </div>
                        </div>

                        <!-- 4. Bottom -->
                        <div class="absolute bottom-[0%] left-1/2 -translate-x-1/2 z-40 hover:z-50 hover:scale-110 transition-all duration-300" style="transform: translateZ(50px);">
                            <div class="w-32 h-36 clip-hex bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 flex flex-col items-center justify-center text-center shadow-lg hover:bg-cyan-900/40">
                                <span class="material-symbols-outlined text-3xl mb-1 text-sky-400 drop-shadow-md">inventory_2</span>
                                <span class="text-xs font-bold text-white leading-tight">Gestión<br>de Activos</span>
                            </div>
                        </div>

                        <!-- 5. Bottom Left -->
                        <div class="absolute bottom-[18%] left-[5%] z-40 hover:z-50 hover:scale-110 transition-all duration-300" style="transform: translateZ(50px);">
                            <div class="w-32 h-36 clip-hex bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 flex flex-col items-center justify-center text-center shadow-lg hover:bg-cyan-900/40">
                                <span class="material-symbols-outlined text-3xl mb-1 text-teal-400 drop-shadow-md">fingerprint</span>
                                <span class="text-xs font-bold text-white leading-tight">Identidad</span>
                            </div>
                        </div>

                        <!-- 6. Top Left -->
                        <div class="absolute top-[18%] left-[5%] z-40 hover:z-50 hover:scale-110 transition-all duration-300" style="transform: translateZ(50px);">
                            <div class="w-32 h-36 clip-hex bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 flex flex-col items-center justify-center text-center shadow-lg hover:bg-cyan-900/40">
                                <span class="material-symbols-outlined text-3xl mb-1 text-purple-400 drop-shadow-md">code</span>
                                <span class="text-xs font-bold text-white leading-tight">Seguridad<br>App</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 2 - SECTOR BANCA (FONDO CLARO)                 -->
        <!-- ############################################################ -->
        <!-- Slide 2: Banca (Light) -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center bg-white text-slate-800 overflow-hidden py-16 lg:py-0">
            <!-- Full Height Layout -->
            <div class="w-full h-full flex flex-col lg:grid lg:grid-cols-2">
                <!-- Left Content -->
                <div class="flex flex-col justify-center px-12 lg:pl-24 lg:pr-12 relative z-20">
                    <div class="slide-content">
                        <div class="flex items-center gap-4 mb-4">
                            <h2 class="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 text-center lg:text-left">Seguridad Bancaria</h2>

                        </div>

                        <p class="text-sm md:text-xl text-slate-600 leading-relaxed mb-4 lg:mb-8 border-l-2 lg:border-l-4 border-primary pl-4 lg:pl-6 text-center lg:text-left mx-auto lg:mx-0 max-w-md lg:max-w-2xl">
                            Protegemos activos críticos mediante cumplimiento normativo y resiliencia operativa.
                        </p>

                        <div class="grid grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-4 mb-4 lg:mb-8 scale-[0.8] lg:scale-100">
                            <div class="compliance-badge group hover:border-blue-200">
                                <span class="material-symbols-outlined text-primary mb-2">gavel</span>
                                <span class="text-[10px] font-black uppercase text-slate-400 group-hover:text-primary">FFIEC</span>
                            </div>
                            <div class="compliance-badge group hover:border-green-200">
                                <span class="material-symbols-outlined text-secondary mb-2">security</span>
                                <span class="text-[10px] font-black uppercase text-slate-400 group-hover:text-secondary">NIST</span>
                            </div>
                            <div class="compliance-badge group hover:border-blue-200">
                                <span class="material-symbols-outlined text-primary mb-2">policy</span>
                                <span class="text-[10px] font-black uppercase text-slate-400 group-hover:text-primary">DORA</span>
                            </div>
                            <div class="compliance-badge group hover:border-green-200">
                                <span class="material-symbols-outlined text-secondary mb-2">verified</span>
                                <span class="text-[10px] font-black uppercase text-slate-400 group-hover:text-secondary">ISO 27001</span>
                            </div>
                        </div>

                        <!-- Moved Cards (Integrated) -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
                                    <span class="material-symbols-outlined text-xl">verified_user</span>
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-slate-900 leading-tight">Cumplimiento</h3>
                                    <p class="text-[10px] text-slate-500">Reportes PCI DSS.</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                                <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-500/30">
                                    <span class="material-symbols-outlined text-xl">account_balance</span>
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-slate-900 leading-tight">Activos Críticos</h3>
                                    <p class="text-[10px] text-slate-500">Monitoreo 24/7.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Content (Image Fade) -->
                <div class="relative h-full w-full">
                    <div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>
                    <!-- Mask Image: Fade left edge to transparent so it blends with white background -->
                    <img src="img/banca.webp" alt="Banca" class="h-40 md:h-[400px] lg:h-full w-full object-cover mt-4 lg:mt-0" style="mask-image: linear-gradient(to bottom, transparent, black), linear-gradient(to right, transparent 5% , black 40%); -webkit-mask-image: linear-gradient(to bottom, transparent, black), linear-gradient(to right, transparent 5% , black 40%);">
                </div>
            </div>
        </section>

        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 2.5 - TECNOLOGÍA Y ENTREGABLES (DISEÑO LIMPIO) -->
        <!-- ############################################################ -->
        <!-- Slide 2.5: Tecnología de Punta y Entregables Estratégicos -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center bg-white text-slate-800 overflow-hidden py-16 lg:py-0">
            <div class="w-full h-full flex flex-col lg:grid lg:grid-cols-2">
                <!-- Left: Visual Content (crm.webp) y Entregables Clave -->
                <div class="relative h-full w-full order-last lg:order-first bg-slate-50 flex flex-col items-center justify-center p-8 lg:p-20">
                    <div class="relative perspective-[1000px] w-full max-w-2xl mb-12">
                        <img src="img/crm.webp" alt="CRM System" class="rounded-xl shadow-lg border border-slate-200 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-700 w-48 md:w-full h-auto object-contain">
                    </div>

                    <!-- Entregables Clave (Compacto) -->
                    <div class="w-full max-w-xl pt-4 lg:pt-8 border-t border-slate-200 scale-75 lg:scale-100">
                        <h3 class="text-xs font-black uppercase text-slate-400 tracking-widest mb-6">Entregables Clave</h3>
                        <div class="grid grid-cols-3 gap-6">
                            <div class="flex flex-col items-center text-center gap-2">
                                <div class="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
                                    <span class="material-symbols-outlined text-2xl">dashboard</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-800 uppercase tracking-tighter leading-tight text-center">Dashboards<br>Ejecutivos</span>
                            </div>
                            <div class="flex flex-col items-center text-center gap-2">
                                <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                                    <span class="material-symbols-outlined text-2xl">table_view</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-800 uppercase tracking-tighter leading-tight text-center">Reportes<br>Excel</span>
                            </div>
                            <div class="flex flex-col items-center text-center gap-2">
                                <div class="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-rose-500/30">
                                    <span class="material-symbols-outlined text-2xl">verified</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-800 uppercase tracking-tighter leading-tight text-center">Dictamen<br>Técnico</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Text Content -->
                <div class="flex flex-col justify-center px-12 lg:pr-24 lg:pl-16 relative z-20 order-first lg:order-last">
                    <div class="slide-content">


                        <h2 class="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 lg:mb-6 leading-tight tracking-tight text-center lg:text-left">
                            Tecnología de Punta
                        </h2>

                        <p class="text-sm md:text-xl text-slate-600 mb-4 lg:mb-10 leading-relaxed border-l-2 lg:border-l-4 border-indigo-600 pl-4 lg:pl-6 text-center lg:text-left mx-auto lg:mx-0">
                            Implementamos <strong class="text-indigo-600">Tenable One</strong> para cobertura total e inteligencia accionable.
                        </p>

                        <div class="space-y-4 mb-10">
                            <h3 class="text-xs font-black uppercase text-slate-400 tracking-widest mb-4 text-center lg:text-left">Stack Tecnológico Aplicado</h3>
                            <div class="flex flex-col sm:flex-row gap-4">
                                <div class="flex-1 flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                                        <span class="material-symbols-outlined">hub</span>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-900 leading-tight">Tenable.io & SC</h4>
                                    </div>
                                </div>
                                <div class="flex-1 flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div class="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
                                        <span class="material-symbols-outlined">fingerprint</span>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-bold text-slate-900 leading-tight">Identity Exposure</h4>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 2.6 - GESTIÓN DE EXPOSICIÓN (RADAR)            -->
        <!-- ############################################################ -->
        <!-- Slide 2.6: Exposure Management (Premium Radar) -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center bg-[#050B14] text-white overflow-hidden py-16 lg:py-0">

            <!-- Animated Infinite Grid Background -->
            <div class="absolute inset-0 bg-slate-900 z-0"></div>
            <div class="absolute inset-0 z-0 opacity-30"
                style="background-image: linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px); 
                        background-size: 60px 60px; 
                        transform-origin: 50% 100%;
                        animation: cyberGrid 15s linear infinite;">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#050B14] z-0"></div>

            <style>
                @keyframes cyberGrid {
                    0% {
                        transform: perspective(1000px) rotateX(60deg) translateY(0);
                    }

                    100% {
                        transform: perspective(1000px) rotateX(60deg) translateY(60px);
                    }
                }

                @keyframes radarSweep {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes threatBlip {
                    0% {
                        opacity: 0;
                        transform: scale(0);
                    }

                    50% {
                        opacity: 1;
                        transform: scale(1.5);
                        box-shadow: 0 0 10px red;
                    }

                    100% {
                        opacity: 0;
                        transform: scale(3);
                    }
                }
            </style>

            <div class="slide-content max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                <!-- Text Content -->
                <div class="lg:w-1/2 relative z-20">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        Gestión de Exposición
                    </div>

                    <h2 class="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-8 leading-tight tracking-tight text-white drop-shadow-xl text-center lg:text-left">
                        Mitigue Riesgos del Negocio
                    </h2>

                    <p class="text-xs md:text-xl text-slate-400 mb-6 lg:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-2 lg:border-l-4 border-cyan-500 pl-4 lg:pl-6 text-center lg:text-left">
                        Obtenga <strong class="text-white">visibilidad unificada</strong> para priorizar lo que importa.
                    </p>

                    <!-- Feature List (Compact) -->
                    <div class="space-y-2 lg:space-y-4 scale-[0.8] lg:scale-100">
                        <div class="flex items-center gap-5 p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300 group cursor-default">
                            <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-2xl">visibility</span>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">Visibilidad Total</h3>
                                <p class="text-sm text-slate-400">Descubra activos ocultos en IT, Cloud y OT.</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-5 p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-300 group cursor-default">
                            <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-2xl">data_usage</span>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg group-hover:text-purple-400 transition-colors">Contexto Real</h3>
                                <p class="text-sm text-slate-400">Alinee la ciberseguridad con objetivos de negocio.</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-5 p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 group cursor-default">
                            <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-2xl">bolt</span>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">Acción Rápida</h3>
                                <p class="text-sm text-slate-400">Corrija brechas críticas antes de que sean explotadas.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Visual (Radar HUD) -->
                <div class="lg:w-1/2 flex items-center justify-center relative perspective-[1000px] scale-[0.4] md:scale-[0.8] lg:scale-100 -mt-10 lg:mt-0">
                    <!-- Radar Container -->
                    <div class="relative w-[500px] h-[500px] flex items-center justify-center transform rotateX(10deg)">

                        <!-- Radar Concentric Rings -->
                        <div class="absolute inset-0 rounded-full border border-slate-700/30"></div>
                        <div class="absolute inset-[15%] rounded-full border border-slate-700/30"></div>
                        <div class="absolute inset-[30%] rounded-full border border-slate-700/30"></div>
                        <div class="absolute inset-[45%] rounded-full border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]"></div>

                        <!-- Scanner Beam -->
                        <div class="absolute inset-0 rounded-full overflow-hidden z-10 opacity-60">
                            <div class="w-full h-full rounded-full animate-[radarSweep_4s_linear_infinite]"
                                style="background: conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(6,182,212,0.1) 300deg, rgba(6,182,212,0.6) 360deg);">
                            </div>
                        </div>

                        <!-- Crosshair Axis -->
                        <div class="absolute inset-0 flex items-center justify-center text-slate-700/50 font-mono text-[10px]">
                            <div class="w-full h-px bg-slate-700/50"></div>
                            <div class="h-full w-px bg-slate-700/50 absolute"></div>
                            <span class="absolute top-2 left-1/2 -translate-x-1/2">N</span>
                            <span class="absolute bottom-2 left-1/2 -translate-x-1/2">S</span>
                            <span class="absolute left-2 top-1/2 -translate-y-1/2">W</span>
                            <span class="absolute right-2 top-1/2 -translate-y-1/2">E</span>
                        </div>

                        <!-- Central Status -->
                        <div class="absolute w-28 h-28 bg-slate-900/90 backdrop-blur-md rounded-full border border-cyan-500/40 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)] z-30">
                            <span class="material-symbols-outlined text-3xl text-cyan-400 mb-1 animate-pulse">radar</span>
                            <span class="text-[9px] uppercase font-black tracking-widest text-slate-300">Scanning</span>
                        </div>

                        <!-- Threat Blips -->
                        <div class="absolute top-[25%] right-[25%] w-2 h-2 bg-red-500 rounded-full animate-[threatBlip_3s_infinite] shadow-[0_0_10px_red]"></div>
                        <div class="absolute bottom-[30%] left-[20%] w-2 h-2 bg-orange-500 rounded-full animate-[threatBlip_4s_infinite_1s] shadow-[0_0_10px_orange]"></div>
                        <div class="absolute top-[20%] left-[40%] text-[8px] text-cyan-500 font-mono opacity-60">ID:992</div>
                    </div>
                </div>
            </div>
        </section>



        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 2.7 - CAPACIDADES (TABS INTERACTIVOS)          -->
        <!-- ############################################################ -->
        <!-- Slide 2.7: Capabilities Tabs -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center justify-center bg-slate-950 text-white overflow-hidden py-16 lg:py-0">
            <div class="slide-content max-w-7xl mx-auto px-6 w-full min-h-[85vh] lg:h-[85vh] flex flex-col pt-12">

                <!-- Tabs Header (Compact Scrollable) -->
                <div class="flex border-b border-slate-800 mb-4 overflow-x-auto no-scrollbar gap-1 shrink-0 pb-2">
                    <button class="tab-btn px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-cyan-400 border-b-2 border-cyan-400 transition-colors shrink-0" onclick="openTab(event, 'tab-ai')">IA</button>
                    <button class="tab-btn px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b-2 border-transparent transition-colors shrink-0" onclick="openTab(event, 'tab-vuln')">Vuln</button>
                    <button class="tab-btn px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b-2 border-transparent transition-colors shrink-0" onclick="openTab(event, 'tab-cloud')">Nube</button>
                    <button class="tab-btn px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b-2 border-transparent transition-colors shrink-0" onclick="openTab(event, 'tab-ot')">OT</button>
                    <button class="tab-btn px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b-2 border-transparent transition-colors shrink-0" onclick="openTab(event, 'tab-identity')">Identidad</button>
                </div>

                <!-- Tab Content: AI -->
                <div id="tab-ai" class="tab-content w-full flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
                    <div class="text-center lg:text-left">
                        <h2 class="text-xl lg:text-4xl font-extrabold mb-1 text-cyan-400">Seguridad de IA</h2>
                        <h3 class="text-xs lg:text-xl text-slate-400 mb-4">Plataforma liderada por IA.</h3>
                        <div class="space-y-2 text-left">
                            <div class="border-l-2 border-cyan-500 pl-4">
                                <h4 class="text-xs lg:text-lg font-bold text-white">Detección Continua</h4>
                                <p class="text-[10px] lg:text-slate-400 text-slate-400">Visibilidad completa de riesgos de IA.</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex items-center justify-center scale-50 lg:scale-100">
                        <img src="img/Prompt.webp" alt="AI Security" class="rounded-lg shadow-xl border border-cyan-500/30 w-full max-w-xs">
                    </div>
                </div>

                <!-- Tab Content: Vuln -->
                <div id="tab-vuln" class="tab-content w-full flex-1 hidden flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
                    <div class="text-center lg:text-left">
                        <h2 class="text-xl lg:text-4xl font-extrabold mb-1 text-indigo-400">Vulnerabilidades</h2>
                        <h3 class="text-xs lg:text-xl text-slate-400 mb-4">Priorización Inteligente (VPR).</h3>
                        <p class="text-[10px] text-slate-300 leading-tight mb-4">Enfóquese en el 3% de vulnerabilidades explotadas.</p>
                    </div>
                    <div class="relative flex items-center justify-center scale-50 lg:scale-100">
                        <img src="img/Prompt2.webp" alt="Vulnerability Management" class="rounded-lg shadow-xl border border-indigo-500/30 w-full max-w-xs">
                    </div>
                </div>
                <!-- Tab Content: Cloud -->
                <div id="tab-cloud" class="tab-content w-full flex-1 hidden grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-extrabold mb-2 text-sky-400">Seguridad en la Nube</h2>
                        <h3 class="text-xl text-slate-400 mb-8">CNAPP unificada.</h3>
                        <div class="space-y-6">
                            <p class="text-slate-300 text-lg">Seguridad completa desde el código hasta la nube. Visibilidad unificada en AWS, Azure y Google Cloud para detectar configuraciones erróneas y brechas.</p>
                            <ul class="list-disc pl-5 text-slate-400 space-y-2">
                                <li>Escaneo de IaC (Infrastructure as Code).</li>
                                <li>Gestión de postura de seguridad (CSPM).</li>
                                <li>Protección de cargas de trabajo (CWPP).</li>
                            </ul>
                        </div>
                    </div>
                    <div class="relative flex items-center justify-center">
                        <img src="img/tab3.webp" alt="Cloud Security" class="rounded-xl shadow-2xl border border-sky-500/30 w-full max-w-lg transition-transform hover:scale-105 duration-500">
                        <div class="absolute -right-4 -bottom-4 text-9xl font-black text-slate-800 opacity-50 z-[-1] select-none">CLOUD</div>
                    </div>
                </div>
                <!-- Tab Content: OT -->
                <div id="tab-ot" class="tab-content w-full flex-1 hidden grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-extrabold mb-2 text-orange-400">Seguridad de OT</h2>
                        <h3 class="text-xl text-slate-400 mb-8">Proteja la infraestructura crítica.</h3>
                        <div class="space-y-6">
                            <p class="text-slate-300 text-lg">Visibilidad profunda de activos industriales sin interrumpir operaciones. Detección de amenazas y control de configuración para entornos ICS/SCADA.</p>
                            <ul class="list-disc pl-5 text-slate-400 space-y-2">
                                <li>Inventario pasivo de activos.</li>
                                <li>Detección de anomalías en redes industriales.</li>
                                <li>Integración IT/OT unificada.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="relative flex items-center justify-center">
                        <img src="img/tab4.webp" alt="OT Security" class="rounded-xl shadow-2xl border border-orange-500/30 w-full max-w-lg transition-transform hover:scale-105 duration-500">
                        <div class="absolute -right-4 -bottom-4 text-9xl font-black text-slate-800 opacity-50 z-[-1] select-none">OT</div>
                    </div>
                </div>
                <!-- Tab Content: Identity -->
                <div id="tab-identity" class="tab-content w-full flex-1 hidden grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-extrabold mb-2 text-teal-400">Seguridad de Identidades</h2>
                        <h3 class="text-xl text-slate-400 mb-8">Cierre las rutas de ataque.</h3>
                        <div class="space-y-6">
                            <p class="text-slate-300 text-lg">Descubra y corrija debilidades en Active Directory y Azure AD antes de que sean explotadas. Detenga la escalada de privilegios y el movimiento lateral.</p>
                            <ul class="list-disc pl-5 text-slate-400 space-y-2">
                                <li>Evaluación continua de postura de identidad.</li>
                                <li>Visualización de rutas de ataque.</li>
                                <li>Detección de cambios riesgosos en AD.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="relative flex items-center justify-center">
                        <img src="img/tab5.avif" alt="Identity Security" class="rounded-xl shadow-2xl border border-teal-500/30 w-full max-w-lg transition-transform hover:scale-105 duration-500">
                        <div class="absolute -right-4 -bottom-4 text-9xl font-black text-slate-800 opacity-50 z-[-1] select-none">ID</div>
                    </div>
                </div>

            </div>
        </section>



        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 2.8 - SEGURIDAD NUBE HÍBRIDA                   -->
        <!-- ############################################################ -->
        <!-- Slide 2.8: Hybrid Cloud Security -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center justify-center bg-white text-slate-800 py-16 lg:py-0">
            <!-- Subtle background mesh -->
            <div class="absolute inset-0 z-0 opacity-30" style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 30px 30px;"></div>

            <div class="slide-content max-w-7xl mx-auto px-6 w-full relative z-10">
                <div class="text-center mb-6 lg:mb-16">
                    <h2 class="text-xl md:text-5xl font-extrabold text-slate-900 mb-2 lg:mb-6 max-w-4xl mx-auto leading-tight">
                        Seguridad Híbrida Escalable
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Feature (Compact for mobile) -->
                    <div class="flex flex-row lg:flex-col items-center text-left lg:text-center group gap-4">
                        <div class="w-12 h-12 lg:w-24 lg:h-24 bg-slate-50 relative flex items-center justify-center lg:mb-6 shrink-0">
                            <div class="absolute inset-0 bg-white border border-slate-100 shadow-md" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);"></div>
                            <span class="material-symbols-outlined text-xl lg:text-4xl text-cyan-600 relative z-20">paid</span>
                        </div>
                        <div>
                            <h3 class="text-xs lg:text-lg font-bold text-slate-900">Escalabilidad Rentable</h3>
                            <p class="text-[10px] lg:text-sm text-slate-500 hidden md:block">Consolide herramientas e impulse rentabilidades.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        <!-- Feature 2 -->
                        <div class="flex flex-col items-center text-center group">
                            <div class="w-12 h-12 lg:w-24 lg:h-24 bg-slate-50 relative flex items-center justify-center mb-2 lg:mb-6">
                                <div class="absolute inset-0 bg-white border border-slate-100 shadow-md" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);"></div>
                                <span class="material-symbols-outlined text-xl lg:text-4xl text-cyan-600 relative z-20">visibility</span>
                            </div>
                            <h3 class="text-[10px] lg:text-lg font-bold text-slate-900 leading-tight">Visibilidad Híbrida</h3>
                        </div>

                        <!-- Feature 3 -->
                        <div class="flex flex-col items-center text-center group">
                            <div class="w-12 h-12 lg:w-24 lg:h-24 bg-slate-50 relative flex items-center justify-center mb-2 lg:mb-6">
                                <div class="absolute inset-0 bg-white border border-slate-100 shadow-md" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);"></div>
                                <span class="material-symbols-outlined text-xl lg:text-4xl text-cyan-600 relative z-20">cloud_sync</span>
                                <h3 class="text-[10px] lg:text-lg font-bold text-slate-900 leading-tight">Migración Segura</h3>
                            </div>
                        </div>

                        <!-- Feature 4 -->
                        <div class="flex flex-col items-center text-center group">
                            <div class="w-12 h-12 lg:w-24 lg:h-24 bg-slate-50 relative flex items-center justify-center mb-2 lg:mb-6">
                                <div class="absolute inset-0 bg-white border border-slate-100 shadow-md" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);"></div>
                                <span class="material-symbols-outlined text-xl lg:text-4xl text-cyan-600 relative z-20">shield_lock</span>
                            </div>
                            <h3 class="text-[10px] lg:text-lg font-bold text-slate-900 leading-tight">Mitigación Proactiva</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 3 - VALOR COMO PARTNER (PROCESO)               -->
        <!-- ############################################################ -->
        <!-- Slide 3: Partner -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center justify-center bg-slate-50 text-slate-800 py-16 lg:py-0">
            <div class="absolute inset-0 z-0 opacity-10" style="background-image: url('img/network_bg.webp'); background-size: cover;"></div>
            <div class="slide-content max-w-7xl mx-auto px-6 w-full relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-4 lg:mb-16 relative">
                    <h2 class="text-2xl md:text-4xl font-extrabold text-slate-900 mb-2 lg:mb-6">Partner Estratégico</h2>
                    <p class="text-xs md:text-lg text-slate-600 px-4">Consolidamos tecnología líder con un equipo experto.</p>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-4 lg:mb-10 scale-[0.8] lg:scale-100">
                    <div class="relative text-center px-2 group">
                        <div class="w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-4 lg:mb-6 border border-slate-100">
                            <span class="material-symbols-outlined text-xl lg:text-3xl text-primary">fact_check</span>
                        </div>
                        <h4 class="text-xs lg:text-lg font-bold text-slate-900">1. Evaluación</h4>
                    </div>
                    <div class="relative text-center px-2 group">
                        <div class="w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-4 lg:mb-6 border border-slate-100">
                            <span class="material-symbols-outlined text-xl lg:text-3xl text-secondary">architecture</span>
                        </div>
                        <h4 class="text-xs lg:text-lg font-bold text-slate-900">2. Implementación</h4>
                    </div>
                    <div class="relative text-center px-2 group">
                        <div class="w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-4 lg:mb-6 border border-slate-100">
                            <span class="material-symbols-outlined text-xl lg:text-3xl text-primary">speed</span>
                        </div>
                        <h4 class="text-xs lg:text-lg font-bold text-slate-900">3. Optimización</h4>
                    </div>
                    <div class="relative text-center px-2 group">
                        <div class="w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-4 lg:mb-6 border border-slate-100">
                            <span class="material-symbols-outlined text-xl lg:text-3xl text-secondary">support_agent</span>
                        </div>
                        <h4 class="text-xs lg:text-lg font-bold text-slate-900">4. Soporte</h4>
                    </div>
                </div>
            </div>
        </section>

        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 4 - NOC 24/7 (SOPORTE ESPECIALIZADO)           -->
        <!-- ############################################################ -->
        <!-- Slide 4: NOC 24/7 (Premium Isometric) -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center bg-[#0B1120] text-white overflow-hidden py-16 lg:py-0">
            <!-- Background Matrix Effect -->
            <div class="absolute inset-0 z-0 opacity-20" style="background-image: radial-gradient(#1e293b 1px, transparent 1px); background-size: 30px 30px;"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-transparent to-[#0B1120]/80 z-0"></div>

            <style>
                @keyframes floatIso {

                    0%,
                    100% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes pulseServer {

                    0%,
                    100% {
                        opacity: 0.5;
                        box-shadow: 0 0 5px #06b6d4;
                    }

                    50% {
                        opacity: 1;
                        box-shadow: 0 0 20px #06b6d4;
                    }
                }

                @keyframes dataFlow {
                    0% {
                        stroke-dashoffset: 1000;
                    }

                    100% {
                        stroke-dashoffset: 0;
                    }
                }
            </style>

            <div class="slide-content max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">

                <!-- Left: Benefits & Content -->
                <div class="lg:w-1/2">
                    <div class="inline-flex items-center gap-3 mb-6">
                        <span class="px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">Soporte Premium</span>
                    </div>

                    <h2 class="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                        NOC 24/7 &<br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Soporte Especializado</span>
                    </h2>

                    <p class="text-slate-400 text-lg mb-8 leading-relaxed">
                        Nuestro Centro de Operaciones de Red (NOC) actúa como el <strong class="text-white">sistema nervioso central</strong> de su seguridad. Monitoreamos y respondemos a incidentes en tiempo real para garantizar su continuidad operativa.
                    </p>

                    <div class="grid grid-cols-1 gap-2 scale-90 lg:scale-100">
                        <div class="flex gap-4 items-center">
                            <span class="material-symbols-outlined text-cyan-400">ecg_heart</span>
                            <span class="text-xs text-white font-bold">Monitoreo Proactivo 24/7</span>
                        </div>
                        <div class="flex gap-4 items-center">
                            <span class="material-symbols-outlined text-blue-400">group_add</span>
                            <span class="text-xs text-white font-bold">Expertise Certificado</span>
                        </div>
                    </div>
                </div>

                <!-- Right: Isometric CSS Animation -->
                <div class="lg:w-1/2 flex items-center justify-center h-[300px] md:h-[500px] perspective-[2000px] scale-[0.5] md:scale-[0.8] lg:scale-100">

                    <!-- Isometric Scene Container -->
                    <div class="relative w-full h-full flex items-center justify-center" style="transform: rotateX(60deg) rotateZ(-45deg) scale(0.8);">

                        <!-- Floor Plan -->
                        <div class="absolute w-[400px] h-[400px] bg-slate-800/50 border-4 border-slate-700/50 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <!-- Grid Lines on Floor -->
                            <div class="absolute inset-0 opacity-30" style="background-image: linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px); background-size: 40px 40px;"></div>
                        </div>

                        <!-- Server Rack 1 -->
                        <div class="absolute top-10 left-10 w-24 h-24 transform-style-3d animate-[floatIso_4s_ease-in-out_infinite]">
                            <!-- Top -->
                            <div class="absolute w-24 h-24 bg-slate-700 transform translate-z-32"></div>
                            <!-- Front -->
                            <div class="absolute w-24 h-32 bg-slate-600 origin-bottom transform rotateX(-90deg) translate-y-32 flex flex-col justify-around p-2 border border-slate-900">
                                <div class="h-1 w-full bg-cyan-500 animate-[pulseServer_2s_infinite]"></div>
                                <div class="h-1 w-3/4 bg-cyan-500 animate-[pulseServer_2s_infinite_0.5s]"></div>
                                <div class="h-1 w-full bg-cyan-500 animate-[pulseServer_2s_infinite_1s]"></div>
                            </div>
                            <!-- Right -->
                            <div class="absolute h-24 w-32 bg-slate-800 origin-right transform rotateY(-90deg) translate-x-24 border border-slate-900"></div>
                        </div>

                        <!-- Server Rack 2 -->
                        <div class="absolute top-10 right-10 w-24 h-24 transform-style-3d animate-[floatIso_4s_ease-in-out_infinite_1s]">
                            <!-- Top -->
                            <div class="absolute w-24 h-24 bg-slate-700 transform translate-z-32"></div>
                            <!-- Front -->
                            <div class="absolute w-24 h-32 bg-slate-600 origin-bottom transform rotateX(-90deg) translate-y-32 flex flex-col justify-around p-2 border border-slate-900">
                                <div class="h-1 w-full bg-purple-500 animate-[pulseServer_3s_infinite]"></div>
                                <div class="h-1 w-1/2 bg-purple-500 animate-[pulseServer_3s_infinite_0.7s]"></div>
                                <div class="h-1 w-full bg-purple-500 animate-[pulseServer_3s_infinite_1.5s]"></div>
                            </div>
                            <!-- Right -->
                            <div class="absolute h-24 w-32 bg-slate-800 origin-right transform rotateY(-90deg) translate-x-24 border border-slate-900"></div>
                        </div>

                        <!-- Control Center (NOC Hub) -->
                        <div class="absolute bottom-10 right-10 left-10 h-32 bg-slate-900/80 border border-slate-500/50 flex items-center justify-center transform translate-z-10 shadow-xl backdrop-blur-md">
                            <div class="text-center transform rotateZ(45deg) -rotateX(60deg) translate-y-[-20px]">
                                <span class="material-symbols-outlined text-4xl text-cyan-400 animate-pulse">support_agent</span>
                                <div class="text-[10px] font-bold text-white uppercase mt-1 tracking-widest">NOC Active</div>
                            </div>
                        </div>

                        <!-- Data Connection Lines (Simulated SVG) -->
                        <svg class="absolute inset-0 w-full h-full pointer-events-none" style="transform: translateZ(1px);">
                            <path d="M 100 100 L 200 300" stroke="#06b6d4" stroke-width="2" stroke-dasharray="10" class="animate-[dataFlow_20s_linear_infinite]" opacity="0.5" />
                            <path d="M 300 100 L 200 300" stroke="#a855f7" stroke-width="2" stroke-dasharray="10" class="animate-[dataFlow_20s_linear_infinite]" opacity="0.5" />
                        </svg>

                    </div>
                </div>
            </div>
        </section>

        <!-- ############################################################ -->
        <!-- INICIO: SLIDE 5 - SECTORES QUE PROTEGEMOS                    -->
        <!-- ############################################################ -->
        <!-- Slide 5: Sectores (Impactful Dark Mode) -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center justify-center bg-slate-900 text-white overflow-hidden py-16 lg:py-0">
            <!-- Background Image & Overlay -->
            <div class="absolute inset-0 z-0">
                <img src="img/sectores.webp" class="w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Futuristic Connection">
                <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
                <!-- Animated Grid Overlay -->
                <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
            </div>

            <div class="slide-content max-w-7xl mx-auto px-6 w-full relative z-10">
                <div class="text-center mb-6 lg:mb-12">
                    <h2 class="text-2xl lg:text-5xl font-black mb-2 text-white">Sectores</h2>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-8 scale-90 lg:scale-100 px-4">
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col items-center">
                        <span class="material-symbols-outlined text-3xl text-blue-400 mb-2">account_balance</span>
                        <h3 class="font-bold text-[10px] tracking-widest uppercase">BANCA</h3>
                    </div>
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col items-center">
                        <span class="material-symbols-outlined text-3xl text-blue-400 mb-2">medical_services</span>
                        <h3 class="font-bold text-[10px] tracking-widest uppercase">SALUD</h3>
                    </div>
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col items-center">
                        <span class="material-symbols-outlined text-3xl text-teal-400 mb-2">bolt</span>
                        <h3 class="font-bold text-[10px] tracking-widest uppercase">ENERGÍA</h3>
                    </div>
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col items-center">
                        <span class="material-symbols-outlined text-3xl text-blue-400 mb-2">school</span>
                        <h3 class="font-bold text-[10px] tracking-widest uppercase">EDUCACIÓN</h3>
                    </div>
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col items-center">
                        <span class="material-symbols-outlined text-3xl text-teal-400 mb-2">restaurant</span>
                        <h3 class="font-bold text-[10px] tracking-widest uppercase">ALIMENTOS</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Slide 6: Soluciones -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center justify-center bg-white text-slate-800 py-4 lg:py-0">
            <div class="slide-content max-w-7xl mx-auto px-6 w-full">
                <div class="text-center mb-6 lg:mb-12">
                    <h2 class="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-1">Soluciones Pro</h2>
                </div>
                <div class="grid grid-cols-2 gap-4 scale-90 lg:scale-100">
                    <div class="bg-slate-50 p-4 lg:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
                        <span class="material-symbols-outlined text-xl text-primary mb-1">radar</span>
                        <h4 class="text-xs lg:text-lg font-black">Exposure</h4>
                    </div>
                    <div class="bg-slate-50 p-4 lg:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
                        <span class="material-symbols-outlined text-xl text-secondary mb-1">cloud_done</span>
                        <h4 class="text-xs lg:text-lg font-black">Cloud</h4>
                    </div>
                    <div class="bg-slate-50 p-4 lg:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
                        <span class="material-symbols-outlined text-xl text-primary mb-1">fingerprint</span>
                        <h4 class="text-xs lg:text-lg font-black">Identity</h4>
                    </div>
                    <div class="bg-slate-50 p-4 lg:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
                        <span class="material-symbols-outlined text-xl text-secondary mb-1">atm</span>
                        <h4 class="text-xs lg:text-lg font-black">OT Sec</h4>
                    </div>
                </div>
            </div>
        </section>

        <!-- Slide Final: CTA -->
        <section class="min-h-screen lg:h-screen w-full snap-center relative flex items-center justify-center bg-slate-900 text-white overflow-hidden py-4 lg:py-0">
            <div class="absolute inset-0 bg-[#020617] z-0"></div>
            <div class="slide-content z-10 text-center flex flex-col items-center gap-6 lg:gap-12 scale-90 lg:scale-100">
                <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
                    <div class="h-24 w-24 lg:h-56 lg:w-56 bg-white rounded-3xl flex items-center justify-center border-2 lg:border-4 border-primary shadow-2xl">
                        <span class="font-black text-3xl lg:text-8xl text-primary tracking-tighter">SIT</span>
                    </div>
                    <div class="bg-white/10 backdrop-blur-xl p-4 lg:p-10 rounded-2xl border border-white/20">
                        <img src="img/Tenable_One_Logo.webp" class="h-12 lg:h-32 w-auto filter brightness-110" alt="Tenable">
                    </div>
                </div>
                <h2 class="text-xl lg:text-6xl font-black px-4">¿Listo para proteger su organización?</h2>
                <a href="#contacto" class="px-8 py-3 lg:px-12 lg:py-5 rounded-full bg-cyan-500 text-white font-bold text-sm lg:text-xl shadow-lg transition-all hover:scale-105">
                    Contáctanos
                </a>
            </div>
        </section>

    </main>

    <!-- Fullscreen Toggle (Subtle with Shine) -->
    <style>
        @keyframes subtleShine {
            0% {
                transform: translateX(-150%) skewX(-20deg);
            }

            20% {
                transform: translateX(300%) skewX(-20deg);
            }

            100% {
                transform: translateX(300%) skewX(-20deg);
            }
        }

        .animate-shine-custom {
            animation: subtleShine 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
    </style>

    <button id="fullscreen-toggle" class="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/40 text-white backdrop-blur-sm hover:bg-cyan-500 hover:text-white transition-all duration-300 opacity-80 hover:opacity-100 group shadow-lg pointer-events-auto mix-blend-difference overflow-hidden border border-white/10" title="Pantalla Completa">
        <span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform relative z-10">fullscreen</span>
        <!-- Shine Effect -->
        <div id="fs-shine" class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine-custom pointer-events-none"></div>
    </button>

    <script>
        // Fullscreen Logic
        const fsBtn = document.getElementById('fullscreen-toggle');
        const fsIcon = fsBtn.querySelector('span');
        const fsShine = document.getElementById('fs-shine');

        fsBtn.addEventListener('click', () => {
            // Remove shine effect permanently on first click
            if (fsShine) fsShine.remove();

            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(e => console.log(e));
                fsIcon.innerText = 'fullscreen_exit';
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    fsIcon.innerText = 'fullscreen';
                }
            }
        });

        // Update icon on external change (Esc key)
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                fsIcon.innerText = 'fullscreen';
            } else {
                fsIcon.innerText = 'fullscreen_exit';
                // Also remove shine if they entered FS via other means (F11)
                if (fsShine) fsShine.remove();
            }
        });
        const scroller = document.getElementById('scroller');
        const sections = document.querySelectorAll('section');
        const fixedLogo = document.getElementById('fixed-nav-logo');
        const heroSection = document.getElementById('slide-hero');

        // Setup Canvas Particles
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // Resize
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 3 + 1; // Slightly larger
                // Brighter colors: White (with opacity) or Bright Blue
                this.color = Math.random() > 0.5 ?
                    `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})` :
                    `rgba(96, 165, 250, ${Math.random() * 0.5 + 0.2})`; // Blue-400
            }
            update(mouseX, mouseY) {
                this.x += this.vx;
                this.y += this.vy;

                // Mouse interaction
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    this.x -= dx * 0.02;
                    this.y -= dy * 0.02;
                }

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        for (let i = 0; i < 50; i++) particles.push(new Particle());

        let mouseX = 0,
            mouseY = 0;
        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update(mouseX, mouseY);
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();

        // Observers
        const activeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.5
        });

        sections.forEach(section => activeObserver.observe(section));

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fixedLogo.classList.add('opacity-0');
                    fixedLogo.classList.remove('opacity-100');
                } else {
                    fixedLogo.classList.remove('opacity-0');
                    fixedLogo.classList.add('opacity-100');
                }
            });
        }, {
            threshold: 0.1
        });

        if (heroSection) {
            heroObserver.observe(heroSection);
        }

        function openTab(evt, tabName) {
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('grid'); // Ensure grid is gone
            });

            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(btn => {
                btn.classList.remove('border-cyan-400', 'text-cyan-400');
                btn.classList.add('border-transparent', 'text-slate-500');
            });

            const activeTab = document.getElementById(tabName);
            activeTab.classList.remove('hidden');
            activeTab.classList.add('grid'); // Re-add grid layout

            evt.currentTarget.classList.remove('border-transparent', 'text-slate-500');
            evt.currentTarget.classList.add('border-cyan-400', 'text-cyan-400');
        }

        function nextSlide() {
            scroller.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }

        function prevSlide() {
            scroller.scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth'
            });
        }
        document.addEventListener('keydown', (e) => {
            if (['ArrowDown', 'ArrowRight', ' '].includes(e.key)) nextSlide();
            else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) prevSlide();
        });
    </script>
</body>

</html>
