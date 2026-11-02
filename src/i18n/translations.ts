export type Lang = 'en' | 'es';

export const translations = {
  en: {
    meta: {
      title: "Gabriel Anzola Tachak · Senior Backend Engineer",
      description: "Gabriel Anzola Tachak, Senior Backend Engineer. Go and Python APIs, microservices and IAM. Bogotá, Colombia.",
    },
    hero: {
      eyebrow: "Senior Backend Engineer · Go & Python",
      tagline: "Coffee-flavored backend",
      lede: "I build the APIs that decide who can reach what, and I make them fast. Four years on Mercado Libre's identity platform, then backend contracts for The Home Depot US and Compass.",
      availability: "Open to senior backend roles. Remote, full-time or contract.",
      location: "Bogotá, Colombia · UTC−5",
      email: "Email me",
      cv: "View CV",
    },
    contact: {
      title: "Let's talk",
      copy: "Copy email",
      copied: "Email copied",
      copyFailed: "Could not copy. Select the address above.",
      whatsapp: "WhatsApp",
      save: "Save contact",
    },
    metrics: [
      { value: "140 000+",      label: "employees and external partners served by the IAM platform I built on at Mercado Libre" },
      { value: "100+",          label: "internal systems under automated provisioning and access rotation" },
      { value: "−90%",          label: "P95 latency after I rebuilt a core Go service for Compass" },
      { value: "~2 s → ~1 ms",  sr: "about 2 seconds to about 1 millisecond", label: "course queries on SIA Bridge against the university's own system" },
    ],
    sections: {
      experience: "Experience",
      stack: "Stack",
      stackNote: "Go and Python are my main languages; I pick whichever fits the problem and the team.",
      alsoLabel: "Also used",
      approach: "How I work",
      education: "Education and languages",
    },
    stackTable: {
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        protocols: "Protocols and architecture",
        databases: "Databases",
        cloud: "Cloud and DevOps",
        security: "Security",
        ai: "AI / LLM",
        tools: "Tools",
      },
    },
    experience: {
      to: "to",
      jobs: [
        {
          role: "Backend Engineer",
          mode: "Remote · Contract",
          bullets: [
            "I rebuilt a core Go microservice and cut P95 response times by 90%, which removed a bottleneck that kept coming back in the platform's request pipeline.",
            "I built Go services and REST APIs for Compass, one of the leading real estate platforms in the US, working with distributed international teams.",
          ],
        },
        {
          role: "Backend Developer",
          mode: "Remote · Contract",
          bullets: [
            "I led the technical planning and development of Go gRPC microservices for inventory management in The Home Depot's US retail ecosystem.",
            "I designed event-driven workflows on GCP with Pub/Sub and Cloud Workflows, so multi-step operations run asynchronously.",
            "I automated deployments and infrastructure with GitHub Actions, Spinnaker and Terraform.",
            "I moved secrets into Vault and tuned caching on Redis (Memorystore). Grafana told me whether it worked.",
          ],
        },
        {
          role: "Backend Developer Consultant",
          mode: "Remote · Contract",
          bullets: [
            "I built a RAG chatbot on WhatsApp for a presidential campaign. It ran a local model through Ollama, with Twilio handling the messaging.",
            "I wrote a hostility filter that caught abusive messages and prompt-injection attempts before they reached the model.",
            "I kept the knowledge base current with Selenium scrapers on a 24-hour refresh. The bot served 1 000+ active users.",
          ],
        },
        {
          role: "Cybersecurity Developer, IAM",
          mode: "Hybrid · Full-time",
          bullets: [
            "I built and scaled Go and Python microservices for the identity and access platform. Its APIs handle 1 000 000+ requests a day from 40 000+ employees and 100 000+ external partners.",
            "I automated provisioning, deprovisioning and access rotation for Mercado Libre employees across AWS, GCP and 100+ internal systems.",
            "I cut API response times by 35% by reworking query plans and indexes on the busiest endpoints.",
            "I built an internal engine that automates periodic access reviews.",
            "I implemented regional data segmentation so identity data meets LATAM regulatory requirements.",
          ],
        },
      ],
    },
    work: {
      title: "Selected work",
      otherTitle: "Other projects",
      privateRepo: "Private repo",
      sourceLink: "SIA Bridge source on GitHub",
      cases: [
        {
          id: "meli",
          title: "Identity and access at Mercado Libre",
          context: "Cybersecurity Developer, IAM · Jun 2021 to Sep 2025 · Hybrid, full-time",
          rows: [
            { label: "Scale", items: ["The platform's APIs handle 1 000 000+ requests a day from 40 000+ employees and 100 000+ external partners."] },
            { label: "What I did", items: [
              "Built and scaled the Go and Python microservices behind the identity and access platform.",
              "Automated provisioning, deprovisioning and access rotation for employees across AWS, GCP and 100+ internal systems.",
              "Built an internal engine that automates periodic access reviews.",
              "Implemented regional data segmentation so identity data meets LATAM regulatory requirements.",
            ] },
            { label: "Result", items: ["Cut API response times by 35% by reworking query plans and indexes on the busiest endpoints."] },
          ],
        },
        {
          id: "compass",
          title: "Rebuilding a core Go service for Compass",
          context: "Backend Engineer at Workstate, for Compass · Apr 2026 to Jul 2026 · Remote, contract",
          rows: [
            { label: "Problem", items: ["A bottleneck kept coming back in the platform's request pipeline."] },
            { label: "What I did", items: [
              "Rebuilt a core Go microservice.",
              "Built Go services and REST APIs for Compass, one of the leading real estate platforms in the US, working with distributed international teams.",
            ] },
            { label: "Result", items: ["Cut P95 response times by 90% and removed the bottleneck."] },
          ],
        },
        {
          id: "sia",
          title: "SIA Bridge",
          context: "Independent project, not affiliated with the Universidad Nacional de Colombia",
          rows: [
            { label: "Problem", items: ["The university's student information system (the SIA) is an Oracle ADF web app with no API. Seeing the sections of one course takes four chained dropdowns, and every step is a POST against a server session that expires after about four minutes of inactivity."] },
            { label: "What I did", items: [
              "Reverse-engineered the ADF protocol in Go. The API replays the partial-page POSTs a browser would send and returns clean JSON.",
              "Kept a pool of live ADF sessions instead of a plain HTTP client, and load-tested it against production to find the concurrency ceiling.",
              "Cached in Postgres according to how each kind of data changes: catalogs are served stale-while-revalidate, and every seat count says how old it is.",
              "Built a React and TypeScript web app on the same public API to plan a semester, with schedule-clash detection and calendar export.",
            ] },
            { label: "Result", items: ["Queries that take about 2 s on the official system come back in about 1 ms. Only a cache miss waits for the SIA."] },
          ],
          latency: {
            caption: "The same course query, approximate values, linear scale. At true scale the second bar is about 1/2 000 of the first, so it is drawn at a minimum width to stay visible.",
            slow: "Official system",
            fast: "SIA Bridge, cached",
            slowValue: "~2 s",
            fastValue: "~1 ms",
            text: "About 2 seconds on the official system against about 1 millisecond on SIA Bridge when the answer is cached, roughly 2 000 times faster.",
          },
        },
        {
          id: "rag",
          title: "WhatsApp RAG chatbot for a presidential campaign",
          context: "Backend Developer Consultant at Personally AI · Oct 2025 to Nov 2025 · Remote, contract",
          rows: [
            { label: "What I did", items: [
              "Built a RAG chatbot on WhatsApp that runs a local model through Ollama, with Twilio handling the messaging.",
              "Wrote a hostility filter that catches abusive messages and prompt-injection attempts before they reach the model.",
              "Kept the knowledge base current with Selenium scrapers on a 24-hour refresh.",
            ] },
            { label: "Result", items: ["The bot served 1 000+ active users."] },
          ],
        },
      ],
      other: [
        { id: "tax-time", desc: "Colombian AI tax advisor that runs 100% locally on Ollama. No internet, no subscriptions." },
        { id: "pokemon-agent", desc: "Q-Learning agent that learns to win Pokémon Showdown battles, with K-Means and XGBoost over 484 130 real human battles. University course project." },
        { id: "logi-hyprland", desc: "Gesture daemon for the Logitech M720 on Hyprland. Pure evdev, no Logitech software. Runs as a systemd user service." },
        { id: "picas-fijas", desc: "Bulls and Cows agent that picks each guess with Knuth-style minimax over the 5 040 possible codes." },
      ],
    },
    approach: [
      {
        title: "Measure, then fix",
        desc: "I look at P95 latency and query plans before touching code. That's how a core Go service lost 90% of its P95, and how a registration query went from about 2 s to about 1 ms.",
      },
      {
        title: "Access rules first",
        desc: "Four years in IAM changed how I start a design. Before endpoints, I want to know who can reach what and how we prove it later. RBAC, OAuth2 and JWT, secrets in Vault.",
      },
      {
        title: "UX doesn't stop at the API",
        desc: "An API is a product for the developers who call it, so I care about clear contracts and predictable errors. On the front end I build for keyboard users, reduced motion and high contrast. This site is an example.",
      },
      {
        title: "Local AI when possible",
        desc: "I'd rather run models on hardware the user controls. tax-time runs fully on Ollama, and the campaign chatbot answered 1 000+ users with a local model.",
      },
    ],
    education: {
      degree: "B.Sc. Systems and Computing Engineering",
      school: "Universidad Nacional de Colombia",
      period: "Expected 2027",
      note: "Former Teaching Assistant, Numerical Methods (Python)",
      languagesLabel: "Languages",
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B2" },
      ],
    },
    uses: {
      meta: {
        title: "Uses · Gabriel Anzola Tachak",
        description: "The machines, display, tools and interests behind Gabriel Anzola Tachak's work.",
      },
      title: "Uses",
      lede: "The machines and tools I work with, and what I read and play when I am not working.",
      machinesTitle: "Machines",
      toolsTitle: "Tools",
      interestsTitle: "Interests",
      archBtw: "(I use arch btw)",
      keys: { chip: "Chip", cpu: "CPU", gpu: "GPU", memory: "Memory", storage: "Storage", screen: "Screen" },
      mac: { kind: "Laptop", sub: "macOS Tahoe" },
      desktop: { kind: "Desktop", sub: "CachyOS · Arch Linux" },
      display: { title: "Display", sub: "2 560×1 440 · 75 Hz · shared between both machines" },
      tools: [
        { label: "Editor", name: "Antigravity IDE", note: "and VSCode" },
        { label: "Browser", name: "Zen Browser", note: "(Firefox rules)" },
        { label: "Shell", name: "fish", note: "" },
        { label: "AI", name: "Claude Code", note: "and Antigravity CLI" },
      ],
    },
    interests: [
      {
        title: "Open and local AI",
        desc: "I run local models with Ollama and follow the open source AI ecosystem. I prefer tools that keep data on hardware I control, and I care about AI that is built ethically and sustainably.",
        tags: ["Ollama", "open source", "privacy", "local LLMs"],
      },
      {
        title: "The ARM era",
        desc: "I like how RISC designs are changing personal computing. Apple Silicon showed it works; now Nvidia DGX Spark and ARM laptops are bringing it to more people.",
        tags: ["RISC", "ARM", "Apple Silicon", "DGX Spark"],
      },
      {
        title: "Music and vinyl",
        desc: "Rock, pop, indie and electronic. I collect vinyl.",
        tags: ["Rock", "Indie", "Electro", "vinyl"],
      },
      {
        title: "Gaming",
        desc: "Nintendo Switch for Mario and Zelda. Steam for AAA single-player games and indie platformers.",
        tags: ["Nintendo Switch", "Steam", "Zelda", "indie"],
      },
    ],
    lfm: {
      title: "Last listened",
      nowPlaying: "Now playing",
      lastPlayed: "Last played",
      profile: "Last.fm profile",
    },
  },
  es: {
    meta: {
      title: "Gabriel Anzola Tachak · Ingeniero Backend Senior",
      description: "Gabriel Anzola Tachak, Ingeniero Backend Senior. APIs en Go y Python, microservicios e IAM. Bogotá, Colombia.",
    },
    hero: {
      eyebrow: "Ingeniero Backend Senior · Go y Python",
      tagline: "Backend con sabor a café",
      lede: "Construyo las APIs que deciden quién puede entrar a qué, y las hago rápidas. Cuatro años en la plataforma de identidad de Mercado Libre y después contratos backend para The Home Depot US y Compass.",
      availability: "Abierto a roles backend senior. Remoto, tiempo completo o contrato.",
      location: "Bogotá, Colombia · UTC−5",
      email: "Escríbeme",
      cv: "Ver CV",
    },
    contact: {
      title: "Hablemos",
      copy: "Copiar correo",
      copied: "Correo copiado",
      copyFailed: "No se pudo copiar. Selecciona la dirección de arriba.",
      whatsapp: "WhatsApp",
      save: "Guardar contacto",
    },
    metrics: [
      { value: "140 000+",      label: "empleados y socios externos atendidos por la plataforma IAM en la que trabajé en Mercado Libre" },
      { value: "100+",          label: "sistemas internos con aprovisionamiento y rotación de accesos automatizados" },
      { value: "−90%",          label: "de latencia P95 tras reconstruir un servicio central en Go para Compass" },
      { value: "~2 s → ~1 ms",  sr: "unos 2 segundos a cerca de 1 milisegundo", label: "consultas de cursos en SIA Bridge, frente al sistema de la propia universidad" },
    ],
    sections: {
      experience: "Experiencia",
      stack: "Stack",
      stackNote: "Go y Python son mis lenguajes principales; uso el que mejor encaje con el problema y el equipo.",
      alsoLabel: "También he usado",
      approach: "Cómo trabajo",
      education: "Educación e idiomas",
    },
    stackTable: {
      categories: {
        languages: "Lenguajes",
        frameworks: "Frameworks",
        protocols: "Protocolos y arquitectura",
        databases: "Bases de datos",
        cloud: "Cloud y DevOps",
        security: "Seguridad",
        ai: "IA / LLM",
        tools: "Herramientas",
      },
    },
    experience: {
      to: "a",
      jobs: [
        {
          role: "Ingeniero Backend",
          mode: "Remoto · Contrato",
          bullets: [
            "Reconstruí un microservicio central en Go y bajé el P95 de respuesta en un 90%, lo que eliminó un cuello de botella que volvía una y otra vez en el pipeline de solicitudes.",
            "Construí servicios y APIs REST en Go para Compass, una de las principales plataformas inmobiliarias de EE.UU., trabajando con equipos internacionales distribuidos.",
          ],
        },
        {
          role: "Desarrollador Backend",
          mode: "Remoto · Contrato",
          bullets: [
            "Lideré la planeación técnica y el desarrollo de microservicios gRPC en Go para la gestión de inventario del ecosistema retail de The Home Depot en EE.UU.",
            "Diseñé flujos orientados a eventos en GCP con Pub/Sub y Cloud Workflows, para que las operaciones de varios pasos corran de forma asíncrona.",
            "Automaticé despliegues e infraestructura con GitHub Actions, Spinnaker y Terraform.",
            "Moví los secretos a Vault y ajusté la caché en Redis (Memorystore). Grafana me decía si había funcionado.",
          ],
        },
        {
          role: "Consultor Backend",
          mode: "Remoto · Contrato",
          bullets: [
            "Construí un chatbot RAG en WhatsApp para una campaña presidencial. Corría un modelo local con Ollama, y Twilio se encargaba de la mensajería.",
            "Escribí un filtro de hostilidad que detenía mensajes abusivos e intentos de prompt injection antes de que llegaran al modelo.",
            "Mantuve la base de conocimiento al día con scrapers de Selenium que se actualizaban cada 24 horas. El bot atendió a 1 000+ usuarios activos.",
          ],
        },
        {
          role: "Desarrollador de Ciberseguridad, IAM",
          mode: "Híbrido · Tiempo completo",
          bullets: [
            "Construí y escalé microservicios en Go y Python para la plataforma de identidad y accesos. Sus APIs reciben 1 000 000+ solicitudes al día de 40 000+ empleados y 100 000+ socios externos.",
            "Automaticé el aprovisionamiento, el desaprovisionamiento y la rotación de accesos de los empleados de Mercado Libre en AWS, GCP y 100+ sistemas internos.",
            "Reduje en un 35% los tiempos de respuesta de la API ajustando planes de consulta e índices en los endpoints con más tráfico.",
            "Construí un motor interno que automatiza las revisiones periódicas de acceso.",
            "Implementé segmentación regional de datos para que la información de identidad cumpla las regulaciones de LATAM.",
          ],
        },
      ],
    },
    work: {
      title: "Trabajo destacado",
      otherTitle: "Otros proyectos",
      privateRepo: "Repo privado",
      sourceLink: "Código de SIA Bridge en GitHub",
      cases: [
        {
          id: "meli",
          title: "Identidad y accesos en Mercado Libre",
          context: "Desarrollador de Ciberseguridad, IAM · jun 2021 a sep 2025 · Híbrido, tiempo completo",
          rows: [
            { label: "Escala", items: ["Las APIs de la plataforma reciben 1 000 000+ solicitudes al día de 40 000+ empleados y 100 000+ socios externos."] },
            { label: "Qué hice", items: [
              "Construí y escalé los microservicios en Go y Python de la plataforma de identidad y accesos.",
              "Automaticé el aprovisionamiento, el desaprovisionamiento y la rotación de accesos de los empleados en AWS, GCP y 100+ sistemas internos.",
              "Construí un motor interno que automatiza las revisiones periódicas de acceso.",
              "Implementé segmentación regional de datos para que la información de identidad cumpla las regulaciones de LATAM.",
            ] },
            { label: "Resultado", items: ["Reduje en un 35% los tiempos de respuesta de la API ajustando planes de consulta e índices en los endpoints con más tráfico."] },
          ],
        },
        {
          id: "compass",
          title: "Reconstruir un servicio central en Go para Compass",
          context: "Ingeniero Backend en Workstate, para Compass · abr 2026 a jul 2026 · Remoto, contrato",
          rows: [
            { label: "Problema", items: ["Un cuello de botella reaparecía una y otra vez en el pipeline de solicitudes de la plataforma."] },
            { label: "Qué hice", items: [
              "Reconstruí un microservicio central en Go.",
              "Construí servicios en Go y APIs REST para Compass, una de las principales plataformas inmobiliarias de EE. UU., trabajando con equipos internacionales distribuidos.",
            ] },
            { label: "Resultado", items: ["Reduje un 90% los tiempos de respuesta P95 y eliminé el cuello de botella."] },
          ],
        },
        {
          id: "sia",
          title: "SIA Bridge",
          context: "Proyecto independiente, sin afiliación con la Universidad Nacional de Colombia",
          rows: [
            { label: "Problema", items: ["El sistema de información académica de la universidad (el SIA) es una aplicación web Oracle ADF sin API. Ver los grupos de una sola materia exige cuatro menús encadenados, y cada paso es un POST contra una sesión del servidor que caduca tras unos cuatro minutos de inactividad."] },
            { label: "Qué hice", items: [
              "Hice ingeniería inversa del protocolo ADF en Go. La API repite los POST parciales que enviaría un navegador y devuelve JSON limpio.",
              "Mantuve un pool de sesiones ADF vivas en lugar de un cliente HTTP simple, y le hice pruebas de carga contra producción para hallar el techo de concurrencia.",
              "Guardé en Postgres según cómo cambia cada tipo de dato: los catálogos se sirven con stale-while-revalidate y cada cupo indica qué tan viejo es.",
              "Construí una aplicación web en React y TypeScript sobre la misma API pública para planear un semestre, con detección de cruces de horario y exportación al calendario.",
            ] },
            { label: "Resultado", items: ["Las consultas que tardan cerca de 2 s en el sistema oficial responden en cerca de 1 ms. Solo un fallo de caché espera al SIA."] },
          ],
          latency: {
            caption: "La misma consulta de materias, valores aproximados, escala lineal. A escala real la segunda barra mide cerca de 1/2 000 de la primera, así que se dibuja con un ancho mínimo para que se vea.",
            slow: "Sistema oficial",
            fast: "SIA Bridge, en caché",
            slowValue: "~2 s",
            fastValue: "~1 ms",
            text: "Cerca de 2 segundos en el sistema oficial frente a cerca de 1 milisegundo en SIA Bridge cuando la respuesta está en caché, unas 2 000 veces más rápido.",
          },
        },
        {
          id: "rag",
          title: "Chatbot RAG en WhatsApp para una campaña presidencial",
          context: "Consultor Backend en Personally AI · oct 2025 a nov 2025 · Remoto, contrato",
          rows: [
            { label: "Qué hice", items: [
              "Construí un chatbot RAG en WhatsApp que corre un modelo local con Ollama, con Twilio para la mensajería.",
              "Escribí un filtro de hostilidad que detecta mensajes abusivos e intentos de inyección de prompts antes de que lleguen al modelo.",
              "Mantuve actualizada la base de conocimiento con scrapers en Selenium que se refrescan cada 24 horas.",
            ] },
            { label: "Resultado", items: ["El bot atendió a más de 1 000 usuarios activos."] },
          ],
        },
      ],
      other: [
        { id: "tax-time", desc: "Asesor tributario colombiano con IA que corre 100% en local sobre Ollama. Sin internet y sin suscripciones." },
        { id: "pokemon-agent", desc: "Agente de Q-Learning que aprende a ganar combates de Pokémon Showdown, con K-Means y XGBoost sobre 484 130 batallas reales de jugadores humanos. Proyecto de un curso universitario." },
        { id: "logi-hyprland", desc: "Daemon de gestos para el Logitech M720 en Hyprland. Evdev puro, sin software de Logitech, como servicio de usuario de systemd." },
        { id: "picas-fijas", desc: "Agente de Picas y Fijas que elige cada jugada con minimax al estilo de Knuth sobre los 5 040 códigos posibles." },
      ],
    },
    approach: [
      {
        title: "Primero medir, después arreglar",
        desc: "Reviso la latencia P95 y los planes de consulta antes de tocar código. Así un servicio central en Go perdió el 90% de su P95, y una consulta de inscripciones pasó de cerca de 2 s a cerca de 1 ms.",
      },
      {
        title: "Las reglas de acceso van primero",
        desc: "Cuatro años en IAM cambiaron cómo empiezo un diseño. Antes de los endpoints quiero saber quién puede entrar a qué y cómo lo vamos a demostrar después. RBAC, OAuth2 y JWT, secretos en Vault.",
      },
      {
        title: "La UX no termina en la API",
        desc: "Una API es un producto para quienes la llaman, así que me importan los contratos claros y los errores predecibles. En el front construyo pensando en quien navega con teclado, en el movimiento reducido y en el alto contraste. Este sitio es un ejemplo.",
      },
      {
        title: "IA local cuando se puede",
        desc: "Prefiero correr los modelos en hardware que controla el usuario. tax-time corre completo sobre Ollama, y el chatbot de la campaña atendió a 1 000+ usuarios con un modelo local.",
      },
    ],
    education: {
      degree: "Ingeniería de Sistemas y Computación (B.Sc.)",
      school: "Universidad Nacional de Colombia",
      period: "Grado esperado: 2027",
      note: "Ex monitor de Métodos Numéricos (Python)",
      languagesLabel: "Idiomas",
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2" },
      ],
    },
    uses: {
      meta: {
        title: "Setup · Gabriel Anzola Tachak",
        description: "Las máquinas, el monitor, las herramientas y los intereses detrás del trabajo de Gabriel Anzola Tachak.",
      },
      title: "Setup",
      lede: "Las máquinas y herramientas con las que trabajo, y lo que me gusta cuando no estoy trabajando.",
      machinesTitle: "Máquinas",
      toolsTitle: "Herramientas",
      interestsTitle: "Intereses",
      archBtw: "(I use arch btw)",
      keys: { chip: "Chip", cpu: "CPU", gpu: "GPU", memory: "Memoria", storage: "Disco", screen: "Pantalla" },
      mac: { kind: "Portátil", sub: "macOS Tahoe" },
      desktop: { kind: "Escritorio", sub: "CachyOS · Arch Linux" },
      display: { title: "Monitor", sub: "2 560×1 440 · 75 Hz · compartido entre ambas máquinas" },
      tools: [
        { label: "Editor", name: "Antigravity IDE", note: "y VSCode" },
        { label: "Navegador", name: "Zen Browser", note: "(Firefox manda)" },
        { label: "Shell", name: "fish", note: "" },
        { label: "IA", name: "Claude Code", note: "y Antigravity CLI" },
      ],
    },
    interests: [
      {
        title: "IA local y de código abierto",
        desc: "Corro modelos locales con Ollama y sigo el ecosistema de IA de código abierto. Prefiero herramientas que dejan los datos en hardware que controlo, y me importa que la IA se desarrolle de forma ética y sostenible.",
        tags: ["Ollama", "open source", "privacidad", "LLMs locales"],
      },
      {
        title: "La era ARM",
        desc: "Me interesa cómo los diseños RISC están cambiando la computación personal. Apple Silicon demostró que funciona; ahora Nvidia DGX Spark y los portátiles con ARM lo llevan a más gente.",
        tags: ["RISC", "ARM", "Apple Silicon", "DGX Spark"],
      },
      {
        title: "Música y vinilos",
        desc: "Rock, pop, indie y electrónica. Colecciono vinilos.",
        tags: ["Rock", "Indie", "Electro", "vinilos"],
      },
      {
        title: "Videojuegos",
        desc: "Nintendo Switch para Mario y Zelda. Steam para juegos AAA de un jugador y plataformeros indie.",
        tags: ["Nintendo Switch", "Steam", "Zelda", "indie"],
      },
    ],
    lfm: {
      title: "Lo último que escuché",
      nowPlaying: "Escuchando ahora",
      lastPlayed: "Última reproducción",
      profile: "Perfil de Last.fm",
    },
  },
} as const;

export type Translations = typeof translations[Lang];
