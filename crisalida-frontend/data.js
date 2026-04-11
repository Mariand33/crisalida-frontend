// ============================================
// USUARIOS — agregá uno por alumno que compre
// ============================================
window.usuariosData = [
  { email: "sabrina@crisalida.com", password: "crsld2026#", nombre: "Sabrina" },
    { email: "karina@crisalida.com", password: "edicion2026#", nombre: "Karina" },
];

// ============================================
// CURSOS
// ============================================
window.cursosData = [
  {
    id: 1,
    nombre: "Tarología I",
    descripcion: "Formación integral en Tarología desde el enfoque Crisálida.",
    modulos: [

      // 🔮 MÓDULO 1
      {
        titulo: "Módulo 1 - Introducción",
        clases: [
          {
            id: 1,
            titulo: "Clase 1 - Introducción a la Tarología: Enfoque Crisálida",
            videoId: "BliRHUz1lQw",
            pdf1: "assets/pdf/clase1-guia.pdf",
            pdf2: "assets/pdf/clase1-practica.pdf",
            resumen: "Introducción a la Tarología como camino de autoconocimiento y lectura simbólica desde el enfoque Crisálida.",
            temas: ["qué es la tarología", "enfoque Crisálida", "autoconocimiento", "lenguaje simbólico"],
            tipo: "normal",
            duracion: "Clase base"
          },
          {
            id: 2,
            titulo: 'Clase 2 - El Mundo XXI: "Espejo del Tarot"',
            videoId: "-8a1feIWQ6w",
            pdf1: "assets/pdf/clase2-guia.pdf",
            pdf2: "assets/pdf/clase2-practica.pdf",
            resumen: "Análisis del Arcano XXI como símbolo de integración, totalidad y cierre de ciclos.",
            temas: ["arcano XXI", "el mundo", "integración", "totalidad"],
            tipo: "normal",
            duracion: "Clase conceptual"
          },
          {
            id: 3,
            titulo: "Clase Especial - Masterclass: Numerología y Colores en la Tarología",
            videoId: "hIV7eoERQvE",
            pdf1: "assets/pdf/clase3-guia.pdf",
            pdf2: "assets/pdf/clase3-practica.pdf",
            resumen: "Masterclass intensiva que integra numerología y el lenguaje de los colores para una comprensión profunda del Tarot.",
            temas: ["numerología", "colores en el tarot", "interpretación simbólica", "integración de lectura"],
            tipo: "masterclass",
            duracion: "5h 05min"
          }
        ]
      },

      // 🜂 MÓDULO 2
      {
        titulo: "Módulo 2 - Arcanos Mayores",
        clases: [
          {
            id: 4,
            titulo: 'Clase 4 - Introducción a los Arcanos: El Viaje Arcano y los Pares Numerológicos (Grado I: "El Mago y La Fuerza")',
            videoId: "PWyIM9RJxt4",
            pdf1: "assets/pdf/clase4-guia.pdf",
            pdf2: "assets/pdf/clase4-practica.pdf",
            resumen: "Introducción al recorrido de los Arcanos como viaje iniciático.",
            temas: ["viaje arcano", "pares numerológicos", "grado I", "el mago", "la fuerza"],
            tipo: "clave",
            duracion: "Clase profunda"
          },
          {
            id: 5,
            titulo: "Clase 5 - El Loco: Inicio del Viaje",
            videoId: "", pdf1: "", pdf2: "",
            resumen: "El arquetipo del inicio, el salto al vacío y la libertad.",
            temas: ["el loco", "inicio", "libertad"],
            tipo: "bloqueado"
          },
          {
            id: 6,
            titulo: "Clase 6 - El Mago: Potencial y Acción",
            videoId: "", pdf1: "", pdf2: "",
            resumen: "El poder de manifestación y la capacidad creadora.",
            temas: ["el mago", "acción", "manifestación"],
            tipo: "bloqueado"
          }
        ]
      },

      // 🌿 MÓDULO 3
      {
        titulo: "Módulo 3 - Arcanos Menores",
        clases: [
          {
            id: 7,
            titulo: "Clase 7 - Introducción a los Arcanos Menores",
            videoId: "", pdf1: "", pdf2: "",
            resumen: "Comprensión de los Arcanos Menores como expresión de lo cotidiano.",
            temas: ["arcanos menores", "vida diaria"],
            tipo: "bloqueado"
          }
        ]
      },

      // 🔥 MÓDULO 4
      {
        titulo: "Módulo 4 - Lectura e Interpretación",
        clases: [
          {
            id: 8,
            titulo: "Clase 8 - Cómo interpretar una lectura",
            videoId: "", pdf1: "", pdf2: "",
            resumen: "Claves para realizar lecturas profundas y coherentes.",
            temas: ["lectura", "interpretación", "práctica"],
            tipo: "bloqueado"
          }
        ]
      }
    ]
  }
];
