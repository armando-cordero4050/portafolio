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
                        'hero-pattern': "url('img/shield_bg.png')",
                        'network-pattern': "url('img/network_bg.png')",
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
    <div id="fixed-nav-logo" class="fixed top-6 left-6 z-50 transition-opacity duration-500 opacity-0">
        <div class="flex items-center gap-3">
            <!-- SIT Logo (Consistent with Hero) -->
            <div class="h-14 w-14 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-primary relative">
                <span class="font-black text-xl text-primary tracking-tighter" style="font-family: 'Inter', sans-serif;">SIT</span>
                <div class="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
            </div>
        </div>
    </div>

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

        <!-- Slide 1: Hero (Hexagon Network Design) -->
        <section id="slide-hero" class="h-screen w-full snap-center relative flex items-center justify-center overflow-hidden bg-dark-bg text-white">
            <!-- Dynamic Background (Restored Shield BG + Particles) -->
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-40"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-blue-900/30"></div>
            </div>

            <div class="slide-content relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

                <!-- Left Column: Branding & Text -->
                <div class="lg:col-span-5 flex flex-col justify-center text-left pl-4">
                    <!-- Unified Partner Logos Pill (LOCKED) -->
                    @include('partials.brand_pill')

                    <div class="relative">
                        <div class="absolute -left-4 -top-4 w-20 h-20 bg-blue-500/20 blur-3xl rounded-full"></div>
                        <h1 class="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
                            Ciberseguridad <br />
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 animate-pulse drop-shadow-lg" style="text-shadow: 0 0 30px rgba(6,182,212,0.5);">Proactiva</span>
                        </h1>
                    </div>

                    <h2 class="text-2xl font-light text-slate-300 mb-8 flex items-center gap-3">
                        con <strong class="text-white font-bold text-3xl">Tenable One</strong>
                    </h2>

                    <p class="text-lg text-slate-400 leading-relaxed max-w-md border-l-4 border-cyan-500 pl-6 py-2 bg-gradient-to-r from-cyan-900/10 to-transparent">
                        Unificamos la visibilidad de activos, vulnerabilidades y amenazas en una sola plataforma de exposición.
                    </p>
                </div>

                <!-- Right Column: Hexagon Network (Exploded & Modern) -->
                <div class="lg:col-span-7 h-[700px] relative flex items-center justify-center perspective-[2000px]">
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

        <!-- Slide 2: Banca (Light) -->
        <section class="h-screen w-full snap-center relative flex items-center bg-white text-slate-800 overflow-hidden">
            <!-- Full Height Layout -->
            <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2">
                <!-- Left Content -->
                <div class="flex flex-col justify-center px-12 lg:pl-24 lg:pr-12 relative z-20">
                    <div class="slide-content">
                        <div class="flex items-center gap-4 mb-4">
                            <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900">Seguridad para Instituciones Financieras</h2>
                            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_V9t630.json" background="transparent" speed="1" style="width: 80px; height: 80px;" loop autoplay></lottie-player>
                        </div>

                        <p class="text-xl text-slate-600 leading-relaxed mb-8 border-l-4 border-primary pl-6">
                            Protegemos los activos más críticos del sector bancario mediante soluciones diseñadas para el estricto cumplimiento normativo y la resiliencia operativa.
                        </p>

                        <div class="grid grid-cols-4 gap-4 mb-8">
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
                    <img src="img/banca.png" alt="Banca" class="h-full w-full object-cover" style="mask-image: linear-gradient(to right, transparent 5%, black 40%); -webkit-mask-image: linear-gradient(to right, transparent 5%, black 40%);">
                </div>
            </div>
        </section>

        <!-- Slide 2.5: Banca Deep Dive (Products & Reports) -->
        <section class="h-screen w-full snap-center relative flex items-center justify-center bg-slate-50 text-slate-800 overflow-hidden">
            <!-- Background Texture -->
            <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#2563EB 0.5px, transparent 0.5px); background-size: 20px 20px;"></div>

            <div class="slide-content max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                <!-- Left: Tenable Stack -->
                <div>
                    <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">Tecnología de Punta y Entregables Estratégicos</h2>
                    <p class="text-lg text-slate-600 mb-8 leading-relaxed">
                        Implementamos la suite <strong class="text-primary">Tenable One</strong> para una cobertura total, garantizando que cada hallazgo se traduzca en inteligencia accionable.
                    </p>

                    <h3 class="text-sm font-black uppercase text-slate-400 tracking-widest mb-4">Stack Tecnológico Aplicado</h3>
                    <div class="space-y-4 mb-8">
                        <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div class="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-600">
                                <span class="material-symbols-outlined">hub</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900">Tenable.io & SC</h4>
                                <p class="text-xs text-slate-500">Gestión de vulnerabilidades basada en riesgo.</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div class="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-600">
                                <span class="material-symbols-outlined">fingerprint</span>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900">Identity Exposure</h4>
                                <p class="text-xs text-slate-500">Seguridad para Active Directory.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Reports Showcase -->
                <div class="relative">
                    <!-- Main Image (Placeholder for Prompt) -->
                    <div class="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Executive Reports" class="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <h3 class="font-bold text-xl">Inteligencia Visual y Documentada</h3>
                            <p class="text-sm text-slate-300">Auditoría con evidencia tangible.</p>
                        </div>
                    </div>

                    <!-- Floating Report Types -->
                    <div class="absolute -right-6 top-10 flex flex-col gap-4">
                        <div class="bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 w-48 hover:-translate-x-2 transition-transform">
                            <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white">
                                <span class="material-symbols-outlined text-sm">dashboard</span>
                            </div>
                            <span class="text-xs font-bold text-slate-700">Dashboards Ejecutivos</span>
                        </div>
                        <div class="bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 w-48 hover:-translate-x-2 transition-transform delay-75">
                            <div class="w-8 h-8 bg-green-600 rounded-md flex items-center justify-center text-white">
                                <span class="material-symbols-outlined text-sm">table_view</span>
                            </div>
                            <span class="text-xs font-bold text-slate-700">Reportes Excel (TI)</span>
                        </div>
                        <div class="bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 w-48 hover:-translate-x-2 transition-transform delay-150">
                            <div class="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center text-white">
                                <span class="material-symbols-outlined text-sm">picture_as_pdf</span>
                            </div>
                            <span class="text-xs font-bold text-slate-700">Dictamen Técnico PDF</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Slide 3: Partner -->
        <section class="h-screen w-full snap-center relative flex items-center justify-center bg-slate-50 text-slate-800">
            <div class="absolute inset-0 z-0 opacity-10" style="background-image: url('img/network_bg.png'); background-size: cover;"></div>
            <div class="slide-content max-w-7xl mx-auto px-6 w-full relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-16 relative">
                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json" background="transparent" speed="1" style="width: 200px; height: 100px; margin: 0 auto;" loop autoplay></lottie-player>
                    <h2 class="text-4xl font-extrabold text-slate-900 mb-6">Nuestro Valor como Partner Estratégico</h2>
                    <p class="text-lg text-slate-600">En SIT, consolidamos la tecnología líder con un equipo experto para garantizar una implementación sin fisuras.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
                    <div class="relative text-center px-4 group">
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-primary transition-colors">
                            <span class="material-symbols-outlined text-3xl text-primary">fact_check</span>
                            <div class="step-connector"></div>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-slate-900">1. Evaluación</h4>
                        <p class="text-sm text-slate-500">Diagnóstico profundo de su estado actual de ciberseguridad y activos.</p>
                    </div>
                    <div class="relative text-center px-4 group">
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-secondary transition-colors">
                            <span class="material-symbols-outlined text-3xl text-secondary">architecture</span>
                            <div class="step-connector"></div>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-slate-900">2. Implementación</h4>
                        <p class="text-sm text-slate-500">Configuración experta adaptada a su entorno bancario.</p>
                    </div>
                    <div class="relative text-center px-4 group">
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-primary transition-colors">
                            <span class="material-symbols-outlined text-3xl text-primary">speed</span>
                            <div class="step-connector"></div>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-slate-900">3. Optimización</h4>
                        <p class="text-sm text-slate-500">Ajuste continuo de políticas y priorización para máxima eficiencia.</p>
                    </div>
                    <div class="relative text-center px-4 group">
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-secondary transition-colors">
                            <span class="material-symbols-outlined text-3xl text-secondary">support_agent</span>
                        </div>
                        <h4 class="text-lg font-bold mb-2 text-slate-900">4. Soporte</h4>
                        <p class="text-sm text-slate-500">Acompañamiento técnico experto y respuesta ágil 24/7.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Slide 4: Team (Light) -->
        <section class="h-screen w-full snap-center relative flex items-center justify-center bg-white text-slate-800">
            <!-- Content Preserved from previous iteration -->
            <div class="slide-content max-w-7xl mx-auto px-6 w-full">
                <div class="bg-white rounded-3xl p-12 border border-slate-200 shadow-xl overflow-hidden relative">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-xs font-bold uppercase mb-6">
                                Capital Humano Certificado
                            </div>
                            <h3 class="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">Equipo de 4 ingenieros expertos y certificados</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <span class="material-symbols-outlined text-primary">workspace_premium</span>
                                    <span class="text-sm font-bold text-slate-700">Cisco Certified CyberOps</span>
                                </div>
                                <div class="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <span class="material-symbols-outlined text-primary">workspace_premium</span>
                                    <span class="text-sm font-bold text-slate-700">CompTIA CySA+</span>
                                </div>
                                <div class="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <span class="material-symbols-outlined text-primary">workspace_premium</span>
                                    <span class="text-sm font-bold text-slate-700">Microsoft SC-200</span>
                                </div>
                                <div class="flex items-center gap-3 bg-slate-100 p-4 rounded-xl border border-dashed border-slate-300">
                                    <span class="material-symbols-outlined text-secondary">event_available</span>
                                    <span class="text-sm font-bold text-slate-700">Meta 2027: ISO 27001</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
                            <div class="flex items-center gap-4 mb-6">
                                <span class="material-symbols-outlined text-4xl text-primary">verified</span>
                                <h4 class="text-xl font-bold">Respaldo Técnico Garantizado</h4>
                            </div>
                            <p class="text-slate-300 mb-8 leading-relaxed">Nuestro equipo no solo provee licencias; construye arquitecturas de defensa resilientes basadas en estándares internacionales de banca.</p>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-2 text-sm">
                                    <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                                    Consultoría Técnica Especializada
                                </li>
                                <li class="flex items-center gap-2 text-sm">
                                    <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                                    Gestión de Brechas de Seguridad
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Slide 5: Sectores (Impactful Dark Mode) -->
        <section class="h-screen w-full snap-center relative flex items-center justify-center bg-slate-900 text-white overflow-hidden">
            <!-- Background Image & Overlay -->
            <div class="absolute inset-0 z-0">
                <img src="img/industrias.png" class="w-full h-full object-cover opacity-30" alt="Futuristic Connection">
                <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
                <!-- Animated Grid Overlay -->
                <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
            </div>

            <div class="slide-content max-w-7xl mx-auto px-6 w-full relative z-10">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">Sectores que Protegemos</h2>
                    <p class="text-slate-300 text-xl max-w-2xl mx-auto">Nuestra experiencia blinda las industrias más críticas contra amenazas avanzadas.</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <!-- Banca (Added) -->
                    <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                        <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="w-16 h-16 rounded-2xl bg-yellow-600/20 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-yellow-500/30">
                            <span class="material-symbols-outlined text-4xl">account_balance</span>
                        </div>
                        <h3 class="font-bold text-xl mb-3 text-white">BANCA</h3>
                        <p class="text-sm text-slate-400 leading-snug">Seguridad transaccional y cumplimiento normativo.</p>
                    </div>

                    <!-- Salud -->
                    <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-blue-500/30">
                            <span class="material-symbols-outlined text-4xl">medical_services</span>
                        </div>
                        <h3 class="font-bold text-xl mb-3 text-white">SALUD</h3>
                        <p class="text-sm text-slate-400 leading-snug">Protección integral de datos sensibles de pacientes (HIPAA).</p>
                    </div>

                    <!-- Energía -->
                    <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(13,148,136,0.3)]">
                        <div class="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="w-16 h-16 rounded-2xl bg-teal-600/20 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-teal-500/30">
                            <span class="material-symbols-outlined text-4xl">bolt</span>
                        </div>
                        <h3 class="font-bold text-xl mb-3 text-white">ENERGÍA</h3>
                        <p class="text-sm text-slate-400 leading-snug">Seguridad resiliente para infraestructuras operativas (OT).</p>
                    </div>

                    <!-- Educación -->
                    <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-blue-500/30">
                            <span class="material-symbols-outlined text-4xl">school</span>
                        </div>
                        <h3 class="font-bold text-xl mb-3 text-white">EDUCACIÓN</h3>
                        <p class="text-sm text-slate-400 leading-snug">Resguardo de portales académicos y datos estudiantiles.</p>
                    </div>

                    <!-- Alimentos -->
                    <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(13,148,136,0.3)]">
                        <div class="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="w-16 h-16 rounded-2xl bg-teal-600/20 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-teal-500/30">
                            <span class="material-symbols-outlined text-4xl">restaurant</span>
                        </div>
                        <h3 class="font-bold text-xl mb-3 text-white">ALIMENTOS</h3>
                        <p class="text-sm text-slate-400 leading-snug">Continuidad garantizada en cadenas de suministro críticas.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Slide 6: Soluciones (Grid) -->
        <section class="h-screen w-full snap-center relative flex items-center justify-center bg-white text-slate-800">
            <div class="slide-content max-w-7xl mx-auto px-6 w-full">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Soluciones de Próxima Generación</h2>
                    <p class="text-slate-600">Portafolio integral de Tenable One adaptado a la vertical financiera.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:border-primary/50 transition-colors">
                        <div class="mb-4 flex items-center gap-4">
                            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-2xl font-bold">radar</span>
                            </div>
                            <h3 class="text-xl font-black text-slate-900">Exposure Management</h3>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed mb-4">
                            Priorización de riesgos basada en activos críticos transaccionales. (Vulnerability Management).
                        </p>
                        <div class="mt-auto pt-4 border-t border-slate-100">
                            <span class="text-[10px] font-black uppercase text-primary tracking-widest">Activos Críticos</span>
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:border-secondary/50 transition-colors">
                        <div class="mb-4 flex items-center gap-4">
                            <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-2xl font-bold">cloud_done</span>
                            </div>
                            <h3 class="text-xl font-black text-slate-900">Cloud Security</h3>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed mb-4">
                            Seguridad para infraestructuras de banca digital y APIs en la nube.
                        </p>
                        <div class="mt-auto pt-4 border-t border-slate-100">
                            <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Banca Digital</span>
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:border-primary/50 transition-colors">
                        <div class="mb-4 flex items-center gap-4">
                            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-2xl font-bold">fingerprint</span>
                            </div>
                            <h3 class="text-xl font-black text-slate-900">Identity Exposure</h3>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed mb-4">
                            Protección contra ataques de Active Directory para prevenir movimientos laterales.
                        </p>
                        <div class="mt-auto pt-4 border-t border-slate-100">
                            <span class="text-[10px] font-black uppercase text-primary tracking-widest">Protección de Directorio</span>
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:border-secondary/50 transition-colors">
                        <div class="mb-4 flex items-center gap-4">
                            <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-2xl font-bold">atm</span>
                            </div>
                            <h3 class="text-xl font-black text-slate-900">OT Security</h3>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed mb-4">
                            Protección de infraestructuras físicas críticas (ATM y Datacenters).
                        </p>
                        <div class="mt-auto pt-4 border-t border-slate-100">
                            <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Sistemas OT / ATMs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Slide 7: CTA -->
        <section class="h-screen w-full snap-center relative flex items-center justify-center bg-slate-900 text-white overflow-hidden">
            <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
            <div class="slide-content max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 class="text-4xl font-extrabold mb-6">¿Listo para asegurar su organización?</h2>
                <p class="text-xl text-slate-400 mb-10">Transforme su estrategia reactiva en un modelo proactivo con el respaldo de SIT.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">Programar Consulta Técnica</button>
                    <button class="bg-transparent border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">Ver Más Soluciones</button>
                </div>
            </div>
        </section>

    </main>

    <script>
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
