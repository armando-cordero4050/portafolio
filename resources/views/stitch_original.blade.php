<!DOCTYPE html>
<html class="light" lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>SMARTNET - Soluciones Especializadas Banca</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#6B21A8", // Morado SMARTNET
                        "secondary": "#0D9488", // Azul Cerceta SMARTNET
                        "background-light": "#fcfcfd",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "1rem",
                        "2xl": "1.5rem",
                        "3xl": "2rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        :root {
            --brand-purple: #6B21A8;
            --brand-teal: #0D9488;
        }
        body { font-family: 'Inter', sans-serif; }
        .glass-effect { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); }
        .gradient-brand { background: linear-gradient(135deg, var(--brand-purple), var(--brand-teal)); }
        .text-gradient { background: linear-gradient(135deg, var(--brand-purple), var(--brand-teal)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .step-connector { @apply absolute top-10 -right-6 w-12 h-0.5 bg-slate-200 hidden lg:block; }
        .sector-card:hover { transform: translateY(-5px); }
        .compliance-badge { @apply flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow; }
    </style>
</head>
<body class="bg-background-light text-slate-800 antialiased">
<header class="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full gradient-brand flex items-center justify-center">
<span class="material-symbols-outlined text-white text-2xl">shield_person</span>
</div>
<h2 class="text-2xl font-black tracking-tighter text-slate-900 uppercase">SMART<span class="text-primary">NET</span></h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#hero">Inicio</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#banca">Banca</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#partner">Valor Partner</a>
<a class="text-sm font-semibold hover:text-primary transition-colors" href="#productos">Soluciones</a>
</nav>
<div>
<button class="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
                Contactar Experto
            </button>
</div>
</div>
</header>
<main>
<section class="relative overflow-hidden pt-16 pb-24 md:pt-28 md:pb-36 bg-gradient-to-b from-white to-slate-50" id="hero">
<div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div class="z-10 text-center lg:text-left">
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
<span class="flex h-2 w-2 rounded-full bg-primary"></span>
                    Alianza Estratégica SMARTNET &amp; Tenable
                </div>
<h1 class="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 mb-6">
                    Ciberseguridad Proactiva con <span class="text-gradient">Tenable One</span>
</h1>
<p class="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                    Como socio estratégico de Tenable, SMARTNET ofrece la plataforma de exposición cibernética líder para consolidar su seguridad y reducir riesgos antes de que ocurran.
                </p>
</div>
<div class="relative">
<div class="aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative bg-white">
<div class="absolute inset-0 bg-cover bg-center opacity-10" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmvduxphc8VrqE5EATZ1e8KC6OJXlqLtClPlzWmQSPPrnpRP6Nhu5fLixGLdE1zTZrNQ072M3Ti46hOzAnSqMEyYacOsk4HctapCRpnwUbFoS4m5kLqxJNF-dOVMYIcy5UOt2vlC4YH8mZe5po153Lz2HI_eYxpCEJlLSCJ70ZiNKKzoV4ooTUrMwou17zNov_fEEhV55xpgNprTZkvEYrzmu1JK2ED8D92b53SsaKj4wWap5oXXaGYpAVSD3TobyGVzmhGK2EboE");'></div>
<div class="p-8 h-full flex items-center justify-center relative">
<div class="w-full glass-effect rounded-2xl border border-slate-100 p-8 flex flex-col justify-between shadow-sm">
<div class="flex justify-between items-start mb-8">
<div>
<p class="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">Exposure Management</p>
<h3 class="text-3xl font-black text-slate-900">Vista Unificada</h3>
</div>
<span class="material-symbols-outlined text-4xl text-primary">hub</span>
</div>
<div class="space-y-4">
<div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
<div class="flex justify-between mb-2">
<span class="text-xs font-bold text-slate-500">Activos en la Nube</span>
<span class="text-xs font-bold text-primary">88% Protegido</span>
</div>
<div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[88%] rounded-full"></div>
</div>
</div>
<div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
<div class="flex justify-between mb-2">
<span class="text-xs font-bold text-slate-500">Superficie de Ataque Externa</span>
<span class="text-xs font-bold text-secondary">Optimizada</span>
</div>
<div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[95%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="py-24 bg-white" id="banca">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
<div class="max-w-2xl">
<h2 class="text-4xl font-extrabold text-slate-900 mb-6">Seguridad para Instituciones Financieras</h2>
<p class="text-lg text-slate-600 leading-relaxed mb-8">Protegemos los activos más críticos del sector bancario mediante soluciones diseñadas para el estricto cumplimiento normativo y la resiliencia operativa.</p>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div class="compliance-badge">
<span class="material-symbols-outlined text-primary mb-2">gavel</span>
<span class="text-[10px] font-black uppercase text-slate-400">FFIEC</span>
</div>
<div class="compliance-badge">
<span class="material-symbols-outlined text-secondary mb-2">security</span>
<span class="text-[10px] font-black uppercase text-slate-400">NIST</span>
</div>
<div class="compliance-badge">
<span class="material-symbols-outlined text-primary mb-2">policy</span>
<span class="text-[10px] font-black uppercase text-slate-400">DORA</span>
</div>
<div class="compliance-badge">
<span class="material-symbols-outlined text-secondary mb-2">verified</span>
<span class="text-[10px] font-black uppercase text-slate-400">ISO 27001</span>
</div>
</div>
</div>
<div class="grid grid-cols-1 gap-6">
<div class="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined">verified_user</span>
</div>
<div>
<h3 class="text-lg font-bold text-slate-900 mb-1">Cumplimiento Normativo</h3>
<p class="text-sm text-slate-600">Automatizamos reportes para auditorías de PCI DSS, ISO 27001 y regulaciones locales bancarias.</p>
</div>
</div>
<div class="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
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
<section class="py-24 bg-slate-50" id="partner">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center max-w-3xl mx-auto mb-20">
<h2 class="text-4xl font-extrabold text-slate-900 mb-6">Nuestro Valor como Partner Estratégico</h2>
<p class="text-lg text-slate-600">En SMARTNET, consolidamos la tecnología líder con un equipo experto para garantizar una implementación sin fisuras.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
<div class="relative text-center px-4">
<div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100">
<span class="material-symbols-outlined text-3xl text-primary">fact_check</span>
<div class="step-connector"></div>
</div>
<h4 class="text-lg font-bold mb-2">1. Evaluación</h4>
<p class="text-sm text-slate-500">Diagnóstico profundo de su estado actual de ciberseguridad y activos.</p>
</div>
<div class="relative text-center px-4">
<div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100">
<span class="material-symbols-outlined text-3xl text-secondary">architecture</span>
<div class="step-connector"></div>
</div>
<h4 class="text-lg font-bold mb-2">2. Implementación</h4>
<p class="text-sm text-slate-500">Configuración experta adaptada a su entorno bancario.</p>
</div>
<div class="relative text-center px-4">
<div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100">
<span class="material-symbols-outlined text-3xl text-primary">speed</span>
<div class="step-connector"></div>
</div>
<h4 class="text-lg font-bold mb-2">3. Optimización</h4>
<p class="text-sm text-slate-500">Ajuste continuo de políticas y priorización para máxima eficiencia.</p>
</div>
<div class="relative text-center px-4">
<div class="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-6 relative z-10 border border-slate-100">
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
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-xs font-bold uppercase mb-6">
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
<section class="py-24 bg-white" id="sectores">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-4xl font-extrabold text-slate-900 mb-4">Sectores que Protegemos</h2>
<p class="text-slate-600 text-lg">Nuestra experiencia se extiende a las industrias más críticas.</p>
</div>
<div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div class="sector-card p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
<span class="material-symbols-outlined text-4xl">medical_services</span>
</div>
<h3 class="font-bold text-lg mb-2">SALUD</h3>
<p class="text-xs text-slate-500">Protección de datos de pacientes.</p>
</div>
<div class="sector-card p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-6">
<span class="material-symbols-outlined text-4xl">bolt</span>
</div>
<h3 class="font-bold text-lg mb-2">ENERGÍA</h3>
<p class="text-xs text-slate-500">Seguridad para infraestructuras operativas.</p>
</div>
<div class="sector-card p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
<span class="material-symbols-outlined text-4xl">school</span>
</div>
<h3 class="font-bold text-lg mb-2">EDUCACIÓN</h3>
<p class="text-xs text-slate-500">Resguardo de portales académicos.</p>
</div>
<div class="sector-card p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-6">
<span class="material-symbols-outlined text-4xl">restaurant</span>
</div>
<h3 class="font-bold text-lg mb-2">ALIMENTOS</h3>
<p class="text-xs text-slate-500">Continuidad en cadenas de suministro.</p>
</div>
</div>
</div>
</section>
<section class="py-24 bg-slate-50" id="productos">
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
<section class="py-20 bg-slate-900 text-white relative overflow-hidden">
<div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
<div class="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 class="text-4xl font-extrabold mb-6">¿Listo para asegurar su organización?</h2>
<p class="text-xl text-slate-400 mb-10">Transforme su estrategia reactiva en un modelo proactivo con el respaldo de SMARTNET.</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<button class="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">Programar Consulta Técnica</button>
<button class="bg-transparent border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">Ver Más Soluciones</button>
</div>
</div>
</section>
</main>
<footer class="bg-white pt-20 pb-10 border-t border-slate-200">
<div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div class="col-span-1 lg:col-span-1">
<div class="flex items-center gap-3 mb-6">
<div class="w-8 h-8 rounded-full gradient-brand flex items-center justify-center">
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
<p class="text-sm text-slate-500 mb-4">ventas@smartnet.com</p>
<p class="text-sm text-slate-500">Soporte 24/7 disponible para clientes bancarios.</p>
</div>
</div>
<div class="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
<p>© 2024 SMARTNET Global Services. Todos los derechos reservados.</p>
<div class="flex gap-8">
<a class="hover:text-slate-900 transition-colors" href="#">Privacidad</a>
<a class="hover:text-slate-900 transition-colors" href="#">Términos</a>
</div>
</div>
</footer>

</body></html>