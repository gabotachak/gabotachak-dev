import type { Lang } from "./translations";

// Strings for the shared chrome (Layout, Nav, Footer). Kept apart from translations.ts so
// section authors can edit that file without touching this one.
export const chrome = {
  en: {
    nav: {
      label: "Main",
      skip: "Skip to content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
      work: "Work",
      experience: "Experience",
      stack: "Stack",
      uses: "Uses",
      cv: "CV",
      contact: "Contact",
      langText: "ES",
      langName: "Español",
      langCode: "es",
    },
    footer: {
      location: "Bogotá, Colombia · UTC−5",
      uses: "Uses",
      builtWith: "built with Astro",
      source: "source",
    },
    jsonLd: {
      jobTitle: "Senior Backend Engineer",
      description:
        "Senior backend engineer with 4+ years building APIs and microservices in Go and Python, including identity and access management at Mercado Libre. Open to remote roles.",
    },
    ogAlt: "Gabriel Anzola Tachak, Senior Backend Engineer",
    ogLocale: "en_US",
  },
  es: {
    nav: {
      label: "Principal",
      skip: "Saltar al contenido",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      toLight: "Cambiar a tema claro",
      toDark: "Cambiar a tema oscuro",
      work: "Trabajo",
      experience: "Experiencia",
      stack: "Stack",
      uses: "Setup",
      cv: "CV",
      contact: "Contacto",
      langText: "EN",
      langName: "English",
      langCode: "en",
    },
    footer: {
      location: "Bogotá, Colombia · UTC−5",
      uses: "Setup",
      builtWith: "construido con Astro",
      source: "código",
    },
    jsonLd: {
      jobTitle: "Ingeniero Backend Senior",
      description:
        "Ingeniero backend senior con más de 4 años construyendo APIs y microservicios en Go y Python, incluida la gestión de identidad y accesos en Mercado Libre. Abierto a roles remotos.",
    },
    ogAlt: "Gabriel Anzola Tachak, Ingeniero Backend Senior",
    ogLocale: "es_CO",
  },
} as const satisfies Record<Lang, unknown>;
