<!DOCTYPE html>
<html class="scroll-smooth" lang="es">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>SMARTNET - Soluciones Especializadas Banca</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#6B21A8",
                        "secondary": "#0D9488",
                        "dark-bg": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    backgroundImage: {
                        'hero-pattern': "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80')",
                    }
                },
            },
        }
    </script>
    <style type="text/tailwindcss">
        @layer utilities {
            .glass-nav {
                @apply bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-purple-900/5;
            }
            .text-glow {
                text-shadow: 0 0 20px rgba(107, 33, 168, 0.5);
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
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>

<body class="bg-slate-50 text-slate-800 antialiased overflow-x-hidden selection:bg-purple-200 selection:text-purple-900">

    <!-- Floating Navigation -->
    <div class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav class="glass-nav rounded-full px-6 py-3 flex items-center justify-between gap-8 xs:gap-12 transition-all duration-300 hover:scale-[1.02]">
            <div class="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                    <span class="material-symbols-outlined text-white text-sm font-bold">shield_person</span>
                </div>
                <span class="font-bold text-slate-900 tracking-tight hidden sm:block">SMART<span class="text-primary">NET</span></span>
            </div>
            <div class="hidden md:flex items-center gap-6">
                <a class="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#hero">Inicio</a>
                <a class="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#banca">Banca</a>
                <a class="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#productos">Soluciones</a>
            </div>
            <button class="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contactar
            </button>
        </nav>
    </div>

    <main>
        <!-- Hero Section with Merged Image -->
        <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-bg" id="hero">
            <!-- Background Image with Gradient Fade -->
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
                <!-- Gradient Overlay to merge image with text area -->
                <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/30"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            <div class="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
                <!-- Text Content -->
                <div class="text-center lg:text-left">
                    <div class="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                        <span class="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
                        Alianza Estratégica Tenable
                    </div>
                    <h1 class="animate-on-scroll delay-100 text-5xl md:text-7xl font-black leading-tight tracking-tight text-white mb-6">
                        Seguridad <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 text-glow">Proactiva</span><br>
                        Sin Límites.
                    </h1>
                    <p class="animate-on-scroll delay-200 text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Transformamos la ciberseguridad bancaria con inteligencia predictiva. Anticípese a las amenazas antes de que ocurran.
                    </p>
                    <div class="animate-on-scroll delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button class="group bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all flex items-center justify-center gap-2">
                            Auditoría Gratuita
                            <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button class="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
                            Ver Demo
                        </button>
                    </div>
                </div>

                <!-- Floating visual element (Glass Card) -->
                <div class="hidden lg:block relative animate-on-scroll delay-300">
                    <div class="absolute -inset-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-[2rem] opacity-30 blur-2xl animate-pulse"></div>
                    <div class="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                        <div class="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                            <div>
                                <p class="text-xs text-slate-400 uppercase tracking-widest font-semibold">Estado del Sistema</p>
                                <h3 class="text-white font-bold text-xl">Monitoreo en Tiempo Real</h3>
                            </div>
                            <div class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                        </div>
                        <!-- Fake Chart/Visualization -->
                        <div class="space-y-6">
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs text-slate-300">
                                    <span>Amenazas Bloqueadas</span>
                                    <span class="font-mono text-purple-300">9,241</span>
                                </div>
                                <div class="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-purple-500 to-purple-400 w-[75%] rounded-full shadow-[0_0_10px_#a855f7]"></div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs text-slate-300">
                                    <span>Integridad de Datos</span>
                                    <span class="font-mono text-teal-300">100%</span>
                                </div>
                                <div class="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-teal-500 to-teal-400 w-full rounded-full shadow-[0_0_10px_#14b8a6]"></div>
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

        <!-- Sectores Section (White) -->
        <section class="py-32 bg-white relative z-20 rounded-t-[3rem] -mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]" id="banca">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto mb-20">
                    <h2 class="animate-on-scroll text-sm font-bold text-primary uppercase tracking-widest mb-3">Ecosistema Seguro</h2>
                    <h3 class="animate-on-scroll delay-100 text-4xl md:text-5xl font-black text-slate-900 mb-6">Protección para Infraestructuras Críticas</h3>
                    <p class="animate-on-scroll delay-200 text-lg text-slate-500 leading-relaxed">Más allá de la banca tradicional. Aseguramos cada punto de contacto digital en los sectores más exigentes.</p>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Card 1 -->
                    <div class="animate-on-scroll group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                        <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 relative z-10 group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-3xl">account_balance</span>
                        </div>
                        <h4 class="font-bold text-lg text-slate-900 mb-2">Banca</h4>
                        <p class="text-sm text-slate-500">PCI DSS & Compliance</p>
                    </div>
                    <!-- Card 2 -->
                    <div class="animate-on-scroll delay-100 group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                        <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-6 relative z-10 group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-3xl">medical_services</span>
                        </div>
                        <h4 class="font-bold text-lg text-slate-900 mb-2">Salud</h4>
                        <p class="text-sm text-slate-500">Protección HIPAA</p>
                    </div>
                    <!-- Card 3 -->
                    <div class="animate-on-scroll delay-200 group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                        <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6 relative z-10 group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-3xl">bolt</span>
                        </div>
                        <h4 class="font-bold text-lg text-slate-900 mb-2">Energía</h4>
                        <p class="text-sm text-slate-500">Seguridad OT/IoT</p>
                    </div>
                    <!-- Card 4 -->
                    <div class="animate-on-scroll delay-300 group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                        <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-6 relative z-10 group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-3xl">school</span>
                        </div>
                        <h4 class="font-bold text-lg text-slate-900 mb-2">Educación</h4>
                        <p class="text-sm text-slate-500">Datos Académicos</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section with sticky feel -->
        <section class="py-32 bg-slate-900 text-white relative overflow-hidden" id="productos">
            <div class="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div class="max-w-7xl mx-auto px-6 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="animate-on-scroll text-4xl md:text-6xl font-black mb-8 leading-tight">Control Total.<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Visibilidad Extrema.</span></h2>
                        <p class="animate-on-scroll delay-100 text-xl text-slate-400 mb-12 leading-relaxed">
                            La suite Tenable One le permite ver, predecir y actuar. Una plataforma unificada para gestionar su superficie de ataque moderna.
                        </p>
                        <ul class="space-y-6">
                            <li class="animate-on-scroll delay-200 flex items-start gap-4">
                                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1"><span class="material-symbols-outlined text-sm">check</span></span>
                                <div>
                                    <h4 class="font-bold text-white text-lg">Exposure Management</h4>
                                    <p class="text-sm text-slate-400 mt-1">Identifique exposiciones en toda su superficie de ataque.</p>
                                </div>
                            </li>
                            <li class="animate-on-scroll delay-300 flex items-start gap-4">
                                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mt-1"><span class="material-symbols-outlined text-sm">cloud</span></span>
                                <div>
                                    <h4 class="font-bold text-white text-lg">Cloud Security</h4>
                                    <p class="text-sm text-slate-400 mt-1">Seguridad CNAPP integral para multicloud.</p>
                                </div>
                            </li>
                            <li class="animate-on-scroll delay-300 flex items-start gap-4">
                                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1"><span class="material-symbols-outlined text-sm">fingerprint</span></span>
                                <div>
                                    <h4 class="font-bold text-white text-lg">Identity Security</h4>
                                    <p class="text-sm text-slate-400 mt-1">Detenga las amenazas basadas en identidad y Active Directory.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Interactive Feature Card -->
                    <div class="animate-on-scroll delay-200 relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-600 rounded-[2.5rem] blur-xl opacity-30 animate-pulse"></div>
                        <div class="bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                            <!-- Shining effect -->
                            <div class="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[100%]"></div>

                            <div class="flex items-center gap-4 mb-8">
                                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
                                    <span class="material-symbols-outlined text-white">security</span>
                                </div>
                                <div>
                                    <h4 class="font-bold text-white">Evaluación de Riesgo</h4>
                                    <p class="text-xs text-slate-400">Score de Ciber-Exposición</p>
                                </div>
                            </div>

                            <div class="flex items-end justify-between mb-2">
                                <span class="text-5xl font-black text-white">850</span>
                                <span class="text-sm font-bold text-green-400 mb-2 flex items-center gap-1"><span class="material-symbols-outlined text-sm">trending_up</span> Seguro</span>
                            </div>
                            <div class="w-full bg-slate-700/50 h-3 rounded-full overflow-hidden mb-8">
                                <div class="h-full bg-gradient-to-r from-purple-500 to-green-400 w-[85%] rounded-full shadow-[0_0_15px_#4ade80]"></div>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-slate-900/50 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                    <p class="text-xs text-slate-500 mb-1">Vulnerabilidades</p>
                                    <p class="text-lg font-bold text-white">0 Críticas</p>
                                </div>
                                <div class="bg-slate-900/50 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                    <p class="text-xs text-slate-500 mb-1">Cumplimiento</p>
                                    <p class="text-lg font-bold text-white">99.9%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-white pt-20 pb-10 border-t border-slate-100">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 animate-on-scroll">
                <div class="col-span-1 lg:col-span-1">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <span class="material-symbols-outlined text-white text-lg">shield_person</span>
                        </div>
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 uppercase">SMART<span class="text-primary">NET</span></h2>
                    </div>
                    <p class="text-slate-500 text-sm leading-relaxed mb-8">Especialistas en gestión de exposición y ciberseguridad avanzada para el sector bancario.</p>
                </div>
                <div>
                    <h5 class="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Soluciones</h5>
                    <ul class="space-y-4 text-sm text-slate-500">
                        <li><a class="hover:text-primary transition-colors" href="#">Exposure Management</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Cloud Security</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Identity Exposure</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Empresa</h5>
                    <ul class="space-y-4 text-sm text-slate-500">
                        <li><a class="hover:text-primary transition-colors" href="#">Sobre Nosotros</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Casos de Éxito</a></li>
                        <li><a class="hover:text-primary transition-colors" href="#">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-bold mb-6 text-slate-900 uppercase text-xs tracking-widest">Contacto</h5>
                    <p class="text-sm text-slate-500 mb-4 font-medium">ventas@smartnet.com</p>
                    <button class="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-3 rounded-xl text-xs font-bold transition-all">
                        Soporte al Cliente
                    </button>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
                <p>© 2024 SMARTNET Global Services.</p>
                <div class="flex gap-8">
                    <a class="hover:text-slate-900 transition-colors" href="#">Privacidad</a>
                    <a class="hover:text-slate-900 transition-colors" href="#">Términos</a>
                </div>
            </div>
        </footer>
    </main>

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
