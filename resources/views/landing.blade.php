<!DOCTYPE html>
<html class="scroll-smooth" lang="es">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>SIT - Sistemas Integrados de Tecnología</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2563EB",
                        /* Royal Blue from Logo */
                        "secondary": "#16A34A",
                        /* Green from Logo Dot */
                        "dark-bg": "#0B1121",
                        /* Darker Navy/Black */
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    backgroundImage: {
                        'hero-pattern': "url('img/shield_bg.jpg')",
                        /* User provided shield image */
                        'network-pattern': "url('img/network_bg.jpg')",
                        /* User provided map image */
                    }
                },
            },
        }
    </script>
    <style type="text/tailwindcss">
        @layer utilities {
            .glass-nav {
                @apply bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-blue-900/5;
            }
            .text-glow {
                text-shadow: 0 0 25px rgba(37, 99, 235, 0.6);
            }
            .animate-on-scroll {
                @apply opacity-0 translate-y-8 transition-all duration-700 ease-out;
            }
            .is-visible {
                @apply opacity-100 translate-y-0;
            }
            .delay-100 { transition-delay: 100ms; }
            .delay-200 { transition-delay: 200ms; }
            .delay-300 { transition-delay: 300ms; }
            /* Original Styles Overrides */
            .glass-effect { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); }
            .gradient-brand { background: linear-gradient(135deg, #2563EB, #16A34A); }
            .text-gradient-classic { background: linear-gradient(135deg, #2563EB, #16A34A); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .step-connector { @apply absolute top-10 -right-6 w-12 h-0.5 bg-slate-200 hidden lg:block; }
            .sector-card:hover { transform: translateY(-5px); }
            .compliance-badge { @apply flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow; }
        }
        :root {
            --brand-blue: #2563EB;
            --brand-green: #16A34A;
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>

<body class="bg-slate-50 text-slate-800 antialiased overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">

    <!-- Floating Navigation (New Design) -->
    <div class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav class="glass-nav rounded-full px-8 py-4 flex items-center justify-between gap-8 xs:gap-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div class="flex items-center gap-3 cursor-pointer" onclick="window.scrollTo(0,0)">
                <!-- SIT Premium Logo (Sincronizado) -->
                <div class="h-10 w-10 bg-white rounded-lg flex items-center justify-center shadow-md border-2 border-primary relative">
                    <span class="font-black text-xs text-primary tracking-tighter" style="font-family: 'Inter', sans-serif;">SIT</span>
                    <div class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-white"></div>
                </div>
                <span class="text-sm font-black text-slate-800 tracking-tighter">SIT</span>
            </div>
            <div class="hidden md:flex items-center gap-8">
                <a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors hover:scale-105 transform duration-200" href="#hero">Inicio</a>
                <a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors hover:scale-105 transform duration-200" href="#banca">Banca</a>
                <a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors hover:scale-105 transform duration-200" href="#partner">Valor Partner</a>
                <a class="text-sm font-semibold text-slate-600 hover:text-primary transition-colors hover:scale-105 transform duration-200" href="#productos">Soluciones</a>
                <a class="text-sm font-semibold text-primary/80 hover:text-primary transition-colors hover:scale-105 transform duration-200 flex items-center gap-1" href="/presentacion">
                    <span class="material-symbols-outlined text-lg">present_to_all</span>
                    Presentación
                </a>
            </div>
            <button class="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 border border-blue-400/20">
                Contactar
            </button>
        </nav>
    </div>

    <main>
        <!-- Hero Section with Merged Image (New Design) -->
        <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-bg" id="hero">
            <!-- Background Image with Gradient Fade -->
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-90"></div>
                <!-- Gradient Overlay to merge image with text area -->
                <div class="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-blue-900/40"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
            </div>

            <div class="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
                <!-- Text Content -->
                <div class="text-center lg:text-left">
                    <div class="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md hover:bg-blue-500/20 transition-colors cursor-default">
                        <span class="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                        Alianza Estratégica Tenable
                    </div>
                    <h1 class="animate-on-scroll delay-100 text-5xl md:text-7xl font-black leading-tight tracking-tight text-white mb-6">
                        Ciberseguridad Proactiva con <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-glow">Tenable One</span>
                    </h1>
                    <p class="animate-on-scroll delay-200 text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Como socio estratégico de Tenable, <strong>SIT</strong> ofrece la plataforma de exposición cibernética líder para consolidar su seguridad y reducir riesgos antes de que ocurran.
                    </p>
                    <!-- Buttons Removed as requested -->
                </div>

                <!-- Floating visual element (Glass Card) from New Design -->
                <div class="hidden lg:block relative animate-on-scroll delay-300">
                    <div class="absolute -inset-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-[2rem] opacity-20 blur-3xl animate-pulse"></div>
                    <div class="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                        <div class="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                            <div>
                                <p class="text-xs text-slate-400 uppercase tracking-widest font-semibold">Estado del Sistema</p>
                                <h3 class="text-white font-bold text-xl">Monitoreo SIT</h3>
                            </div>
                            <div class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                        </div>
                        <!-- Fake Chart/Visualization -->
                        <div class="space-y-6">
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs text-slate-300">
                                    <span>Amenazas Bloqueadas</span>
                                    <span class="font-mono text-blue-300">9,241</span>
                                </div>
                                <div class="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-blue-500 to-green-400 w-[75%] rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs text-slate-300">
                                    <span>Integridad de Datos</span>
                                    <span class="font-mono text-green-300">100%</span>
                                </div>
                                <div class="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-green-600 to-green-400 w-full rounded-full shadow-[0_0_10px_#14b8a6]"></div>
                                </div>
                            </div>
                            <div class="pt-4 flex gap-4">
                                <div class="flex-1 bg-white/5 rounded-xl p-4 text-center border border-white/5">
                                    <p class="text-[10px] text-slate-400 uppercase">Tiempo de Respuesta</p>
                                    <p class="text-2xl font-black text-white">0.3ms</p>
                                </div>
                                <div class="flex-1 bg-white/5 rounded-xl p-4 text-center border border-white/5">
                                    <p class="text-[10px] text-slate-400 uppercase">Activos Seguros</p>
                                    <p class="text-2xl font-black text-white">14k+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll indicator -->
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                <span class="text-[10px] text-slate-400 uppercase tracking-widest">Descubre Más</span>
                <span class="material-symbols-outlined text-slate-400">keyboard_arrow_down</span>
            </div>
        </section>

        <!-- !!! ORIGINAL CONTENT WITH SIT BRANDING !!! -->

        <section class="animate-on-scroll py-24 bg-white" id="banca">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <div class="max-w-2xl">
                        <h2 class="text-4xl font-extrabold text-slate-900 mb-6">Seguridad para Instituciones Financieras</h2>
                        <p class="text-lg text-slate-600 leading-relaxed mb-8">En <strong>SIT</strong>, protegemos los activos más críticos del sector bancario mediante soluciones diseñadas para el estricto cumplimiento normativo y la resiliencia operativa.</p>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div class="compliance-badge group hover:border-blue-200">
                                <span class="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">gavel</span>
                                <span class="text-[10px] font-black uppercase text-slate-400 group-hover:text-primary transition-colors">FFIEC</span>
                            </div>
                            <div class="compliance-badge group hover:border-green-200">
                                <span class="material-symbols-outlined text-secondary mb-2 group-hover:scale-110 transition-transform">security</span>
                                <span class="text-[10px] font-black uppercase text-slate-400 group-hover:text-secondary transition-colors">NIST</span>
                            </div>
                            <div class="compliance-badge group hover:border-blue-200">
                                <span class="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform">policy</span>
                                <span class="text-[10px] font-black uppercase text-slate-400 group-hover:text-primary transition-colors">DORA</span>
                            </div>
                            <div class="compliance-badge group hover:border-green-200">
                                <span class="material-symbols-outlined text-secondary mb-2 group-hover:scale-110 transition-transform">verified</span>
                                <span class="text-[10px] font-black uppercase text-slate-400 group-hover:text-secondary transition-colors">ISO 27001</span>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-6">
                        <div class="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary shrink-0">
                                <span class="material-symbols-outlined">verified_user</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-900 mb-1">Cumplimiento Normativo</h3>
                                <p class="text-sm text-slate-600">Automatizamos reportes para auditorías de PCI DSS, ISO 27001 y regulaciones locales bancarias.</p>
                            </div>
                        </div>
                        <div class="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-secondary shrink-0">
                                <span class="material-symbols-outlined">account_balance</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-900 mb-1">Protección de Activos Críticos</h3>
                                <p class="text-sm text-slate-600">Visibilidad completa sobre infraestructuras transaccionales y servidores centrales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="animate-on-scroll py-24 bg-slate-50 relative overflow-hidden" id="partner">
            <!-- Use the user's map/network image as faint background here if appropriate, or just keep it clean -->
            <div class="absolute inset-0 z-0 opacity-5 pointer-events-none" style="background-image: url('img/network_bg.jpg'); background-size: cover;"></div>

            <div class="max-w-7xl mx-auto px-6 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-20">
                    <h2 class="text-4xl font-extrabold text-slate-900 mb-6">Nuestro Valor como Partner Estratégico</h2>
                    <p class="text-lg text-slate-600">En <strong>SIT</strong>, consolidamos la tecnología líder con un equipo experto para garantizar una implementación sin fisuras.</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
                    <div class="relative text-center px-4 group">
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-primary transition-colors">
                            <span class="material-symbols-outlined text-3xl text-primary">fact_check</span>
                            <div class="step-connector"></div>
                        </div>
                        <h4 class="text-lg font-bold mb-2">1. Evaluación</h4>
                        <p class="text-sm text-slate-500">Diagnóstico profundo de su estado actual de ciberseguridad y activos.</p>
                    </div>
                    <div class="relative text-center px-4 group">
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-secondary transition-colors">
                            <span class="material-symbols-outlined text-3xl text-secondary">architecture</span>
                            <div class="step-connector"></div>
                        </div>
                        <h4 class="text-lg font-bold mb-2">2. Implementación</h4>
                        <p class="text-sm text-slate-500">Configuración experta adaptada a su entorno bancario.</p>
                    </div>
                    <div class="relative text-center px-4 group">
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-primary transition-colors">
                            <span class="material-symbols-outlined text-3xl text-primary">speed</span>
                            <div class="step-connector"></div>
                        </div>
                        <h4 class="text-lg font-bold mb-2">3. Optimización</h4>
                        <p class="text-sm text-slate-500">Ajuste continuo de políticas y priorización para máxima eficiencia.</p>
                    </div>
                    <div class="relative text-center px-4 group">
                        <div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-secondary transition-colors">
                            <span class="material-symbols-outlined text-3xl text-secondary">support_agent</span>
                        </div>
                        <h4 class="text-lg font-bold mb-2">4. Soporte</h4>
                        <p class="text-sm text-slate-500">Acompañamiento técnico experto y respuesta ágil 24/7.</p>
                    </div>
                </div>
                <div class="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl overflow-hidden relative">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-50 text-secondary text-xs font-bold uppercase mb-6 border border-green-100">
                                Capital Humano Certificado
                            </div>
                            <h3 class="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">Equipo de 4 ingenieros expertos y certificados</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <span class="material-symbols-outlined text-primary">workspace_premium</span>
                                    <span class="text-sm font-bold text-slate-700">Cisco Certified CyberOps Associate</span>
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
                                    <span class="text-sm font-bold text-slate-700">Meta 2027: Certificación ISO 27001</span>
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

        <section class="animate-on-scroll py-24 bg-white" id="sectores">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Sectores que Protegemos</h2>
                    <p class="text-slate-600 text-lg">La experiencia de <strong>SIT</strong> se extiende a las industrias más críticas.</p>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="sector-card p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center group hover:border-primary/50">
                        <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl">medical_services</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">SALUD</h3>
                        <p class="text-xs text-slate-500">Protección de datos de pacientes.</p>
                    </div>
                    <div class="sector-card p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center group hover:border-secondary/50">
                        <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl">bolt</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">ENERGÍA</h3>
                        <p class="text-xs text-slate-500">Seguridad para infraestructuras operativas.</p>
                    </div>
                    <div class="sector-card p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center group hover:border-primary/50">
                        <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl">school</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">EDUCACIÓN</h3>
                        <p class="text-xs text-slate-500">Resguardo de portales académicos.</p>
                    </div>
                    <div class="sector-card p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center group hover:border-secondary/50">
                        <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-4xl">restaurant</span>
                        </div>
                        <h3 class="font-bold text-lg mb-2">ALIMENTOS</h3>
                        <p class="text-xs text-slate-500">Continuidad en cadenas de suministro.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="animate-on-scroll py-24 bg-slate-50" id="productos">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Soluciones de Próxima Generación</h2>
                    <p class="text-slate-600">Portafolio integral de Tenable One adaptado a la vertical financiera.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:border-primary/50 transition-colors">
                        <div class="mb-8">
                            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-3xl font-bold">radar</span>
                            </div>
                            <h3 class="text-2xl font-black text-slate-900 mb-4">Tenable Exposure Management</h3>
                            <p class="text-slate-600 leading-relaxed">
                                Priorización de riesgos basada en activos críticos transaccionales. (Vulnerability Management).
                            </p>
                        </div>
                        <div class="mt-auto pt-6 border-t border-slate-100">
                            <span class="text-[10px] font-black uppercase text-primary tracking-widest">Activos Críticos</span>
                        </div>
                    </div>
                    <div class="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:border-secondary/50 transition-colors">
                        <div class="mb-8">
                            <div class="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-3xl font-bold">cloud_done</span>
                            </div>
                            <h3 class="text-2xl font-black text-slate-900 mb-4">Tenable Cloud Security</h3>
                            <p class="text-slate-600 leading-relaxed">
                                Seguridad para infraestructuras de banca digital y APIs en la nube, garantizando entornos híbridos seguros.
                            </p>
                        </div>
                        <div class="mt-auto pt-6 border-t border-slate-100">
                            <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Banca Digital</span>
                        </div>
                    </div>
                    <div class="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:border-primary/50 transition-colors">
                        <div class="mb-8">
                            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-3xl font-bold">fingerprint</span>
                            </div>
                            <h3 class="text-2xl font-black text-slate-900 mb-4">Tenable Identity Exposure</h3>
                            <p class="text-slate-600 leading-relaxed">
                                Protección contra ataques de Active Directory para prevenir movimientos laterales en la red bancaria.
                            </p>
                        </div>
                        <div class="mt-auto pt-6 border-t border-slate-100">
                            <span class="text-[10px] font-black uppercase text-primary tracking-widest">Protección de Directorio</span>
                        </div>
                    </div>
                    <div class="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col group hover:border-secondary/50 transition-colors">
                        <div class="mb-8">
                            <div class="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-3xl font-bold">atm</span>
                            </div>
                            <h3 class="text-2xl font-black text-slate-900 mb-4">Tenable OT Security</h3>
                            <p class="text-slate-600 leading-relaxed">
                                Protección de infraestructuras físicas críticas (cajeros automáticos y centros de datos).
                            </p>
                        </div>
                        <div class="mt-auto pt-6 border-t border-slate-100">
                            <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Sistemas OT / ATMs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="animate-on-scroll py-20 bg-slate-900 text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
            <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 class="text-4xl font-extrabold mb-6">¿Listo para asegurar su organización?</h2>
                <p class="text-xl text-slate-400 mb-10">Transforme su estrategia reactiva en un modelo proactivo con el respaldo de <strong>SIT</strong>.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">Programar Consulta Técnica</button>
                    <button class="bg-transparent border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">Ver Más Soluciones</button>
                </div>
            </div>
        </section>
    </main>

    <footer class="animate-on-scroll bg-white pt-20 pb-10 border-t border-slate-200">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div class="col-span-1 lg:col-span-1">
                <div class="flex items-center gap-3 mb-6">
                    <!-- Footer Logo -->
                    <img src="img/sit_logo.png" alt="SIT Logo" class="h-8 w-auto">
                    <h2 class="text-xl font-black tracking-tighter text-slate-900 uppercase">SIT</h2>
                </div>
                <p class="text-slate-500 text-sm leading-relaxed mb-8">Especialistas en sistemas integrados de tecnología y ciberseguridad avanzada para el sector bancario.</p>
            </div>
            <div>
                <h5 class="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Soluciones</h5>
                <ul class="space-y-4 text-sm text-slate-500">
                    <li><a class="hover:text-primary transition-colors" href="#">Exposure Management</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Cloud Security</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Identity Exposure</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">OT Security</a></li>
                </ul>
            </div>
            <div>
                <h5 class="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Servicios</h5>
                <ul class="space-y-4 text-sm text-slate-500">
                    <li><a class="hover:text-primary transition-colors" href="#">Consultoría Estratégica</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Soporte Certificado</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Cumplimiento FFIEC/DORA</a></li>
                    <li><a class="hover:text-primary transition-colors" href="#">Formación Técnica</a></li>
                </ul>
            </div>
            <div>
                <h5 class="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Contacto</h5>
                <p class="text-sm text-slate-500 mb-4">ventas@sit-latam.com</p>
                <p class="text-sm text-slate-500">Soporte 24/7 disponible para clientes bancarios.</p>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
            <p>© 2024 SIT - Sistemas Integrados de Tecnología. Todos los derechos reservados.</p>
            <div class="flex gap-8">
                <a class="hover:text-slate-900 transition-colors" href="#">Privacidad</a>
                <a class="hover:text-slate-900 transition-colors" href="#">Términos</a>
            </div>
        </div>
    </footer>

    <script>
        // Intersection Observer for Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    </script>
</body>

</html>
