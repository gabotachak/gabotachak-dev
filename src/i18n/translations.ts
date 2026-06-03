export type Lang = 'en' | 'es';

export const translations = {
  en: {
    meta: {
      title: "gabotachak.dev",
      description: "Gabriel Anzola Tachak — Backend Engineer. Go, Python, IAM. Bogotá.",
    },
    nav: {
      exp: "exp",
      projects: "projects",
      stack: "stack",
      uses: "uses",
      contact: "contact",
      langSwitch: "es",
      langSwitchHref: "/es/",
    },
    hero: {
      badge: "identity_verified",
      bio: "Backend engineer with 4+ years at MercadoLibre in Identity & Access Management. Go and Python. Now building at Workstate for Compass, US real estate at scale. UNAL Systems Engineering.",
      location: "Coffee-flavored backend ☕ · Bogotá, Colombia 🇨🇴",
    },
    roles: ["Backend Engineer", "IAM Specialist", "Go Developer", "Python Dev", "Bogotá 🇨🇴"],
    sections: {
      experience: "experience",
      projects: "projects",
      stack: "stack",
      uses: "uses",
    },
    experience: {
      activeBadge: "active",
    },
    experienceDesc: [
      "Building high-performance Go APIs for one of the US's leading real estate platforms. Distributed international team, production-scale systems.",
      "Backend microservices in Go for the Home Depot retail ecosystem. Technical design, cloud integrations, and code reviews in English.",
      "Python APIs for enterprise communications. WhatsApp Business integration, Selenium scraping, GPT-powered workflows.",
      "4+ years in Identity & Access Management. Automated provisioning, deprovisioning, and access rotation for all MercadoLibre employees across AWS, GCP, and 100+ internal systems.",
    ],
    projectDesc: [
      "Colombian AI tax advisor. 100% local, no internet, no subscriptions. Runs entirely on Ollama.",
      "Multi-LLM AI agent framework using Claude + Gemini. No further context needed.",
      "Pure evdev gesture daemon for Logitech M720 on Hyprland. Zero Logitech Options dependency.",
      "Mastermind solver using Knuth's minimax algorithm. Guaranteed ≤5 guesses.",
      "Classical cipher implementations: Caesar, Hill, OTP, Playfair, Vigenère, Turning Grille.",
      "Full Go project from MercadoLibre bootcamp. Hexagonal architecture, multiple domains, unit tests.",
    ],
    uses: {
      macSub: "macOS Tahoe 26.5",
      desktopSub: "Omarchy · Arch Linux 7.0.1",
      archBtw: "(I use arch btw)",
      displaySub: "2560×1440 · 75Hz · shared between both machines",
      editorLabel: "editor",
      browserLabel: "browser",
      shellLabel: "shell",
      aiLabel: "ai",
    },
    footer: {
      source: "source",
      builtWith: "built with Astro",
    },
    lfm: {
      loading: "loading…",
      nowPlaying: "now playing",
    },
    clock: {
      label: "Bogotá, Colombia",
      locale: "en-US",
    },
    time: {
      d: "d ago",
      h: "h ago",
      m: "m ago",
      now: "just now",
    },
  },
  es: {
    meta: {
      title: "gabotachak.dev",
      description: "Gabriel Anzola Tachak — Ingeniero Backend. Go, Python, IAM. Bogotá.",
    },
    nav: {
      exp: "exp",
      projects: "proyectos",
      stack: "stack",
      uses: "setup",
      contact: "contacto",
      langSwitch: "en",
      langSwitchHref: "/",
    },
    hero: {
      badge: "identidad_verificada",
      bio: "Ingeniero backend con 4+ años en MercadoLibre en Identity & Access Management. Go y Python. Actualmente construyendo en Workstate para Compass, inmobiliaria a escala en EE.UU. Ing. Sistemas, UNAL.",
      location: "Backend con sabor a café ☕ · Bogotá, Colombia 🇨🇴",
    },
    roles: ["Ingeniero Backend", "Especialista IAM", "Desarrollador Go", "Dev Python", "Bogotá 🇨🇴"],
    sections: {
      experience: "experiencia",
      projects: "proyectos",
      stack: "stack",
      uses: "setup",
    },
    experience: {
      activeBadge: "activo",
    },
    experienceDesc: [
      "Construyendo APIs Go de alto rendimiento para una de las principales plataformas inmobiliarias de EE.UU. Equipo distribuido internacional, sistemas a escala de producción.",
      "Microservicios backend en Go para el ecosistema retail de The Home Depot. Diseño técnico, integraciones cloud y revisiones de código en inglés.",
      "APIs en Python para comunicaciones empresariales. Integración WhatsApp Business, scraping con Selenium, flujos automatizados con GPT.",
      "4+ años en Identity & Access Management. Automatización de aprovisionamiento, desaprovisionamiento y rotación de accesos para todos los empleados de MercadoLibre en AWS, GCP y 100+ sistemas internos.",
    ],
    projectDesc: [
      "Asesor tributario colombiano con IA. 100% local, sin internet, sin suscripciones. Corre completamente en Ollama.",
      "Framework de agentes IA multi-LLM con Claude + Gemini. No necesita más contexto.",
      "Daemon de gestos evdev puro para Logitech M720 en Hyprland. Sin dependencia de Logitech Options.",
      "Solucionador de Mastermind con el algoritmo minimax de Knuth. Garantía de ≤5 intentos.",
      "Implementaciones de cifrados clásicos: César, Hill, OTP, Playfair, Vigenère, Reja girante.",
      "Proyecto completo en Go del bootcamp de MercadoLibre. Arquitectura hexagonal, múltiples dominios, pruebas unitarias.",
    ],
    uses: {
      macSub: "macOS Tahoe 26.5",
      desktopSub: "Omarchy · Arch Linux 7.0.1",
      archBtw: "(I use arch btw)",
      displaySub: "2560×1440 · 75Hz · compartida entre ambas máquinas",
      editorLabel: "editor",
      browserLabel: "navegador",
      shellLabel: "shell",
      aiLabel: "ia",
    },
    footer: {
      source: "código",
      builtWith: "construido con Astro",
    },
    lfm: {
      loading: "cargando…",
      nowPlaying: "escuchando",
    },
    clock: {
      label: "Bogotá, Colombia",
      locale: "es-CO",
    },
    time: {
      d: "d",
      h: "h",
      m: "min",
      now: "ahora",
    },
  },
} as const;

export type Translations = typeof translations[Lang];
