// ========================================
// USUARIOS
// ========================================
window.usuariosData = [
  { email: "sabrina@crisalida.com", password: "crsld2026#", nombre: "Sabrina" },
  { email: "karina@crisalida.com", password: "creador26", nombre: "Karina" },
  { email: "rosy@crisalida.com", password: "creador33", nombre: "Rosy" }
];

// ========================================
// CURSOS
// ========================================
window.cursosData = [
  {
    id: 1,
    nombre: "Tarología I",
    descripcion: "Formación integral en Tarología desde el enfoque Crisálida.",
    modulos: [
      {
        titulo: "Módulo 1 - Introducción",
        clases: [
          {
            id: 1,
            titulo: "Clase 1 - Introducción a la Tarología: Enfoque Crisálida",
            videoId: "BliRHUz1lQw",
            pdf1: "assets/pdf/clase1-introduccion.pdf",
            pdf2: "#",
            resumen: "Presentación de la formación, el enfoque Crisálida y la mirada de la Tarología como camino de autoconocimiento, interpretación y transformación.",
            temas: ["Tarología", "Enfoque Crisálida", "Autoconocimiento"],
            tipo: "clave"
          },
          {
            id: 2,
            titulo: "Clase 2 - El Mundo XXI: Espejo del Tarot",
            videoId: "-8a1feIWQ6w",
            pdf1: "#",
            pdf2: "#",
            resumen: "Exploración del Arcano XXI como imagen de totalidad, reflejo interior y puerta de ingreso al recorrido simbólico del Tarot.",
            temas: ["Arcano XXI", "El Mundo", "Simbolismo"],
            tipo: "normal"
          },
          {
            id: 3,
            titulo: "Clase 3 - Numerología y Colores",
            videoId: "hIV7eoERQvE",
            pdf1: "#",
            pdf2: "#",
            resumen: "Clase extensa sobre la lógica numerológica y cromática del Tarot como base de interpretación y lectura profunda.",
            temas: ["Numerología", "Colores", "Lectura simbólica"],
            tipo: "masterclass"
          }
        ]
      },
      {
  titulo: "Módulo 2 - Profundización",
  clases: [
    {
      id: 4,
      titulo: "Clase 4 - Grado I: Introducción al viaje arcano. El Mago y La Fuerza",
      videoId: "PWyIM9RJxt4",
      pdf1: "#",
      pdf2: "#",
      resumen: "Introducción al recorrido de los Arcanos, los pares numerológicos y el inicio del proceso de interpretación desde el Grado I.",
      temas: ["Grado I", "Arcanos", "Viaje arcano", "Base del método"],
      tipo: "clave"
    },
    {
      id: 5,
      titulo: "Clase 5 - Grado II: La Papisa y El Colgado",
      videoId: "hfgn7z-sKUw",
      pdf1: "#",
      pdf2: "#",
      resumen: "Trabajo sobre el tiempo interno, la pausa consciente y los procesos de gestación simbólica.",
      temas: ["La Papisa", "El Colgado", "Tiempo interno", "Proceso"],
      tipo: "clave"
    },
    {
      id: 6,
      titulo: "Clase 6 - Grado III: Integración de procesos. La Emperatriz y El Arcano Sin Nombre",
      videoId: "UPltzdo-m1o",
      pdf1: "#",
      pdf2: "#",
      resumen: "Integración de los grados anteriores junto con nuevos arcanos como parte del proceso de transformación.",
      temas: ["Integración", "Proceso", "Transformación"],
      tipo: "clave"
    },
    {
      id: 7,
      titulo: "Clase 7 - Grado IIII: Profundización simbólica El Emperador y La Templanza",
      videoId: "796hrEe7xjE",
      pdf1: "#",
      pdf2: "#",
      resumen: "Profundización en la lectura simbólica y comprensión interna del proceso.",
      temas: ["Símbolos", "Lectura", "Profundización"],
      tipo: "clave"
    },
    {
      id: 8,
      titulo: "Clase 8 - Grado VI: El Enamorado y La Casa Dios",
      videoId: "fFfSWRC-3X4",
      pdf1: "#",
      pdf2: "#",
      resumen: "Trabajo sobre elección, vínculo, crisis y ruptura de estructuras como parte del proceso de transformación.",
      temas: [
        "El Enamorado",
        "La Casa Dios",
        "Elección",
        "Crisis",
        "Transformación"
      ],
      tipo: "clave"
    },
    {
      id: 9,
      titulo: "Clase 9 - Grado VII: Dirección y avance El Carro y La Estrella",
      videoId: "ocSfKhKTnb8",
      pdf1: "#",
      pdf2: "#",
      resumen: "Profundización en el avance consciente, dirección del proceso y toma de decisiones.",
      temas: [
        "Grado VII",
        "Dirección",
        "Avance",
        "Conciencia"
      ],
      tipo: "clave"
    },
    {
      id: 10,
      titulo: "Clase 10 - Grado VIII",
      videoId: "",
      pdf1: "#",
      pdf2: "#",
      resumen: "Continuación del proceso de transformación y consolidación interna.",
      temas: ["Grado VIII", "Transformación"],
      tipo: "bloqueado"
    },
    {
      id: 11,
      titulo: "Clase 11 - Grado VIIII",
      videoId: "",
      pdf1: "#",
      pdf2: "#",
      resumen: "Interiorización, comprensión profunda y síntesis del recorrido.",
      temas: ["Grado VIIII", "Interiorización"],
      tipo: "bloqueado"
    },
    {
      id: 12,
      titulo: "Clase 12 - Grado X: Integración final",
      videoId: "",
      pdf1: "#",
      pdf2: "#",
      resumen: "Cierre del recorrido de grados e integración completa del proceso.",
      temas: ["Grado X", "Integración", "Cierre"],
      tipo: "bloqueado"
    }
  ]
}
        titulo: "Módulo 3 - Arcanos Menores",
        clases: [
          {
            id: 8,
            titulo: "Clase 8 - Introducción a los Arcanos Menores",
            videoId: "",
            pdf1: "#",
            pdf2: "#",
            resumen: "Comprensión de los Arcanos Menores como expresión de lo cotidiano y puente con la experiencia concreta.",
            temas: ["Arcanos menores", "Vida diaria", "Experiencia"],
            tipo: "bloqueado"
          }
        ]
      },
      {
        titulo: "Módulo 4 - Lectura e Interpretación",
        clases: [
          {
            id: 9,
            titulo: "Clase 9 - Cómo interpretar una lectura",
            videoId: "",
            pdf1: "#",
            pdf2: "#",
            resumen: "Claves para realizar lecturas profundas, responsables y coherentes dentro del método.",
            temas: ["Lectura", "Interpretación", "Práctica"],
            tipo: "bloqueado"
          }
        ]
      }
    ]
  }
];
