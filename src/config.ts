/**
 * Contenido público de la web (extraído de la plantilla «Peludos & Co.»).
 *
 * Todo lo que se ve en la web sale de aquí: textos, precios, imágenes y
 * páginas. El tema visual NO se decide aquí: lo elige el panel de
 * administración y queda guardado en el navegador (ver `src/admin/store.ts`).
 */
import type { SiteConfig } from './site/types';

export const config: SiteConfig = {
  "meta": {
    "projectId": "demo-peludos-and-co",
    "projectName": "Peludos & Co.",
    "templateId": "canine-peludos-and-co",
    "templateVersion": "1.0.0",
    "themeId": "pco-lavanda-profesional",
    "locale": "es-ES",
    "currency": "EUR"
  },
  "business": {
    "name": "Peludos & Co.",
    "legalName": "Peludos and Co. Grooming, S.L.",
    "tagline": "Tu perro merece lo mejor",
    "descriptor": "Peluquería canina",
    "logo": {
      "text": "Peludos & Co.",
      "image": null,
      "showLogo": true,
      "showName": true
    },
    "phone": "+34 644 123 456",
    "whatsapp": "+34 644 123 456",
    "email": "hola@peludosandco.es",
    "address": {
      "line1": "Calle de la Canina, 15",
      "postalCode": "28001",
      "city": "Madrid",
      "region": "Comunidad de Madrid",
      "country": "España",
      "coordinates": {
        "lat": 40.4249,
        "lng": -3.6842
      }
    },
    "openingHours": [
      {
        "label": "Lunes a viernes",
        "value": "9:30 – 19:00"
      },
      {
        "label": "Sábado",
        "value": "10:00 – 14:00"
      },
      {
        "label": "Domingo",
        "value": "Cerrado"
      }
    ],
    "serviceArea": "Madrid centro y barrios próximos"
  },
  "navigation": {
    "items": [
      {
        "id": "inicio",
        "label": "Inicio",
        "enabled": true,
        "sortOrder": 0,
        "cta": {
          "label": "Inicio",
          "kind": "route",
          "target": "/"
        }
      },
      {
        "id": "servicios",
        "label": "Servicios",
        "enabled": true,
        "sortOrder": 1,
        "cta": {
          "label": "Servicios",
          "kind": "route",
          "target": "/servicios"
        }
      },
      {
        "id": "precios",
        "label": "Precios",
        "enabled": true,
        "sortOrder": 2,
        "cta": {
          "label": "Precios",
          "kind": "route",
          "target": "/precios"
        }
      },
      {
        "id": "sobre-nosotros",
        "label": "Sobre nosotros",
        "enabled": true,
        "sortOrder": 3,
        "cta": {
          "label": "Sobre nosotros",
          "kind": "route",
          "target": "/sobre-nosotros"
        }
      },
      {
        "id": "galeria",
        "label": "Galería",
        "enabled": true,
        "sortOrder": 4,
        "cta": {
          "label": "Galería",
          "kind": "route",
          "target": "/galeria"
        }
      },
      {
        "id": "contacto",
        "label": "Contacto",
        "enabled": true,
        "sortOrder": 5,
        "cta": {
          "label": "Contacto",
          "kind": "route",
          "target": "/contacto"
        }
      }
    ],
    "primaryCta": {
      "label": "Reservar cita",
      "kind": "modal",
      "target": "booking"
    },
    "secondaryCta": {
      "label": "Ver servicios",
      "kind": "anchor",
      "target": "#servicios"
    }
  },
  "content": {
    "hero": {
      "eyebrow": "Amor · cuidado · estilo",
      "title": "Tu perro merece",
      "titleHighlight": "lo mejor",
      "paragraph": "Cuidamos de tu mejor amigo con cariño, profesionalidad y productos de alta calidad.",
      "note": "",
      "primaryCta": {
        "label": "Reservar cita",
        "kind": "modal",
        "target": "booking"
      },
      "secondaryCta": {
        "label": "Ver servicios",
        "kind": "anchor",
        "target": "#servicios"
      },
      "microBenefits": [
        {
          "id": "profesionales",
          "label": "Profesionales",
          "description": "cualificados",
          "icon": "award"
        },
        {
          "id": "productos",
          "label": "Productos",
          "description": "premium",
          "icon": "spa"
        },
        {
          "id": "sin-jaulas",
          "label": "Ambiente seguro",
          "description": "y sin jaulas",
          "icon": "shield"
        },
        {
          "id": "servicios",
          "label": "+500 servicios",
          "description": "realizados",
          "icon": "paw"
        }
      ],
      "ratingBadge": {
        "enabled": true,
        "score": "4,9",
        "countLabel": "Más de 120 reseñas",
        "sourceLabel": "Reseñas propias",
        "url": ""
      },
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/hero/hero-dog-purple-bow.webp",
        "alt": "Perro pequeño con pajarita lila recién arreglado",
        "width": 1800,
        "height": 2250,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/hero/hero-dog-purple-bow-480.webp",
            "width": 480
          },
          {
            "src": "/assets/templates/canine/peludos-and-co/hero/hero-dog-purple-bow-960.webp",
            "width": 960
          },
          {
            "src": "/assets/templates/canine/peludos-and-co/hero/hero-dog-purple-bow-1440.webp",
            "width": 1440
          }
        ],
        "ratio": "4:5",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            30
          ],
          "tablet": [
            50,
            30
          ],
          "mobile": [
            50,
            30
          ]
        },
        "credit": {
          "author": "Tima Miroshnichenko",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/6131004/"
        }
      },
      "videoCta": {
        "enabled": false,
        "label": "",
        "posterSrc": "",
        "videoSrc": "",
        "transcript": ""
      }
    },
    "headings": {
      "services": {
        "eyebrow": "Servicios",
        "title": "Todo lo que tu perro necesita",
        "subtitle": ""
      },
      "packages": {
        "eyebrow": "Paquetes",
        "title": "Ahorra con nuestros paquetes",
        "subtitle": ""
      },
      "process": {
        "eyebrow": "Nuestro proceso",
        "title": "Así de fácil es reservar",
        "subtitle": ""
      },
      "benefits": {
        "eyebrow": "",
        "title": "¿Por qué elegir Peludos & Co.?",
        "subtitle": ""
      },
      "booking": {
        "eyebrow": "",
        "title": "Reserva rápida",
        "subtitle": "Cuéntanos sobre tu peludo y buscaremos el mejor horario."
      }
    },
    "benefits": [
      {
        "id": "sin-jaulas",
        "enabled": true,
        "sortOrder": 0,
        "title": "Sin jaulas",
        "description": "Ambiente libre de estrés",
        "icon": "shield",
        "accent": "#8A43D6"
      },
      {
        "id": "profesionales",
        "enabled": true,
        "sortOrder": 1,
        "title": "Profesionales cualificados",
        "description": "Formación continua",
        "icon": "award",
        "accent": "#E9BC3D"
      },
      {
        "id": "premium",
        "enabled": true,
        "sortOrder": 2,
        "title": "Productos premium",
        "description": "Marcas de calidad",
        "icon": "spa",
        "accent": "#3E9FD6"
      },
      {
        "id": "personalizada",
        "enabled": true,
        "sortOrder": 3,
        "title": "Atención personalizada",
        "description": "Cada perro es único",
        "icon": "heart",
        "accent": "#D96A9A"
      },
      {
        "id": "puntualidad",
        "enabled": true,
        "sortOrder": 4,
        "title": "Puntualidad y confianza",
        "description": "Respetamos el tiempo acordado",
        "icon": "clock",
        "accent": "#8A43D6"
      }
    ],
    "processSteps": [
      {
        "id": "step-1",
        "enabled": true,
        "sortOrder": 0,
        "title": "Elige el servicio",
        "description": "Encuentra la opción adecuada para su manto y tamaño.",
        "icon": "notes"
      },
      {
        "id": "step-2",
        "enabled": true,
        "sortOrder": 1,
        "title": "Reserva tu cita",
        "description": "Eliges servicio, día y hora entre los huecos que quedan libres.",
        "icon": "calendar"
      },
      {
        "id": "step-3",
        "enabled": true,
        "sortOrder": 2,
        "title": "Disfrutamos juntos",
        "description": "El equipo cuida del perro como si fuera propio.",
        "icon": "heart"
      },
      {
        "id": "step-4",
        "enabled": true,
        "sortOrder": 3,
        "title": "Listo para lucir",
        "description": "Recogida con recomendaciones de mantenimiento.",
        "icon": "sparkle"
      }
    ],
    "petProfile": {
      "heading": {
        "eyebrow": "",
        "title": "",
        "subtitle": ""
      },
      "bullets": [],
      "cta": {
        "label": "",
        "kind": "anchor",
        "target": "#inicio"
      },
      "mockup": {
        "petName": "",
        "breed": "",
        "age": "",
        "customerSince": "",
        "nextAppointment": {
          "service": "",
          "date": "",
          "time": ""
        },
        "history": []
      }
    },
    "newsletter": {
      "enabled": false,
      "title": "",
      "description": "",
      "buttonLabel": "",
      "consentText": "",
      "successMessage": ""
    },
    "ambienceImage": null,
    "finalCta": {
      "title": "",
      "subtitle": "",
      "cta": {
        "label": "",
        "kind": "modal",
        "target": "booking"
      },
      "image": null
    },
    "pricingNote": "Precio orientativo para perro pequeño; confirmamos el presupuesto según tamaño y estado del manto.",
    "packagesSideBenefits": [
      "Ahorro de hasta 15 € frente a servicios sueltos",
      "Productos premium incluidos en todos los paquetes",
      "Resultados visibles y cuidados adaptados a cada manto"
    ],
    "legal": {
      "legalNotice": {
        "title": "Aviso legal",
        "body": "Este sitio web pertenece a Peludos and Co. Grooming, S.L., que opera comercialmente como Peludos & Co..\n\nEl acceso y uso de esta web implica la aceptación de estas condiciones. Los contenidos, textos, fotografías y elementos gráficos son titularidad de Peludos and Co. Grooming, S.L. o se utilizan con licencia; queda prohibida su reproducción sin autorización previa.\n\nPeludos & Co. presta servicios de estética e higiene canina. La información publicada tiene carácter orientativo: los precios finales dependen del tamaño, el manto y el estado del pelo de cada animal, y se confirman antes de iniciar el servicio.\n\nPeludos & Co. no presta servicios veterinarios. Ante cualquier signo de enfermedad, lesión o dolor recomendamos acudir a un centro veterinario.\n\nPara cualquier consulta relacionada con este aviso legal puedes escribir a hola@peludosandco.es."
      },
      "privacy": {
        "title": "Política de privacidad",
        "body": "Peludos and Co. Grooming, S.L. trata los datos personales facilitados a través de los formularios de esta web con la finalidad de gestionar solicitudes de cita, responder consultas y prestar el servicio contratado.\n\nLa base jurídica del tratamiento es el consentimiento de la persona interesada y, cuando existe una reserva, la ejecución de la relación de servicio. Los datos se conservan mientras se mantenga la relación y durante los plazos legales aplicables.\n\nLos datos relativos a la salud, las alergias o el comportamiento del animal se utilizan exclusivamente para prestar el servicio con seguridad y no se publican ni se ceden a terceros.\n\nNo se realizan cesiones de datos salvo obligación legal, ni se toman decisiones automatizadas ni se elaboran perfiles comerciales.\n\nPuedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a hola@peludosandco.es, indicando el derecho que deseas ejercer. También puedes reclamar ante la Agencia Española de Protección de Datos."
      },
      "cookies": {
        "title": "Política de cookies",
        "body": "Esta web utiliza únicamente cookies técnicas necesarias para su funcionamiento, como las que recuerdan el estado de los formularios durante la sesión. No se emplean cookies publicitarias ni de perfilado.\n\nSi en el futuro se incorporan servicios de terceros —por ejemplo un mapa embebido o una herramienta de medición— se solicitará el consentimiento previo mediante un aviso específico y no se cargarán hasta que se acepte.\n\nPuedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Bloquear las cookies técnicas puede impedir el uso correcto de los formularios.\n\nPara cualquier duda sobre esta política escribe a hola@peludosandco.es."
      },
      "copyrightNote": "Todos los derechos reservados."
    },
    "footerTagline": "Cuidado profesional, trato cercano y resultados que enamoran.",
    "footerSignature": ""
  },
  "services": [
    {
      "id": "svc-bano",
      "enabled": true,
      "sortOrder": 0,
      "name": "Baño y secado",
      "slug": "bano-y-secado",
      "shortDescription": "Higiene con champú adaptado y secado profesional.",
      "longDescription": "Baño con champú elegido según el manto y la piel, aclarado completo y secado profesional con cepillado.",
      "priceFromEur": 20,
      "durationMinutes": 50,
      "includes": [
        "Champú adaptado",
        "Aclarado completo",
        "Secado profesional",
        "Cepillado final"
      ],
      "sizes": [
        "Mini",
        "Pequeño",
        "Mediano",
        "Grande"
      ],
      "icon": "bath",
      "accent": "#8A43D6",
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/packages/package-basic.webp",
        "alt": "Pomerania recién bañado",
        "width": 800,
        "height": 1000,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/packages/package-basic-480.webp",
            "width": 480
          }
        ],
        "ratio": "4:5",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            32
          ],
          "tablet": [
            50,
            32
          ],
          "mobile": [
            50,
            32
          ]
        }
      }
    },
    {
      "id": "svc-corte",
      "enabled": true,
      "sortOrder": 1,
      "name": "Corte y estilismo",
      "slug": "corte-y-estilismo",
      "shortDescription": "Corte según raza, manto y preferencia.",
      "longDescription": "Corte de raza o comercial acordado contigo, con perfilado de cara y patas y acabado a máquina o tijera.",
      "priceFromEur": 30,
      "durationMinutes": 90,
      "includes": [
        "Baño previo",
        "Corte de raza o comercial",
        "Perfilado de cara y patas",
        "Acabado personalizado"
      ],
      "sizes": [
        "Mini",
        "Pequeño",
        "Mediano",
        "Grande"
      ],
      "icon": "scissors",
      "accent": "#8A43D6",
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-01-after.webp",
        "alt": "Shih tzu después del corte",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-01-after-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        }
      }
    },
    {
      "id": "svc-deslanado",
      "enabled": true,
      "sortOrder": 2,
      "name": "Deslanado",
      "slug": "deslanado",
      "shortDescription": "Retirada de pelo muerto y reducción de muda.",
      "longDescription": "Tratamiento específico para mantos dobles: retiramos el subpelo muerto con producto y técnica, reduciendo la muda en casa.",
      "priceFromEur": 25,
      "durationMinutes": 70,
      "includes": [
        "Producto deslanante",
        "Retirada de subpelo",
        "Secado con soplador",
        "Cepillado final"
      ],
      "sizes": [
        "Pequeño",
        "Mediano",
        "Grande",
        "Gigante"
      ],
      "icon": "brush",
      "accent": "#8A43D6",
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-03-after.webp",
        "alt": "Cocker spaniel después del arreglo",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-03-after-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        }
      }
    },
    {
      "id": "svc-spa",
      "enabled": true,
      "sortOrder": 3,
      "name": "Tratamientos spa",
      "slug": "tratamientos-spa",
      "shortDescription": "Hidratación, nutrición y masaje suave.",
      "longDescription": "Mascarilla hidratante o nutritiva según la necesidad del manto, con masaje suave y acabado perfumado.",
      "priceFromEur": 25,
      "durationMinutes": 60,
      "includes": [
        "Mascarilla hidratante o nutritiva",
        "Masaje suave",
        "Secado y cepillado",
        "Perfume"
      ],
      "sizes": [
        "Mini",
        "Pequeño",
        "Mediano",
        "Grande"
      ],
      "icon": "sparkle",
      "accent": "#8A43D6",
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/packages/package-spa.webp",
        "alt": "Caniche tras el tratamiento de spa",
        "width": 800,
        "height": 1000,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/packages/package-spa-480.webp",
            "width": 480
          }
        ],
        "ratio": "4:5",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            32
          ],
          "tablet": [
            50,
            32
          ],
          "mobile": [
            50,
            32
          ]
        }
      }
    },
    {
      "id": "svc-higiene",
      "enabled": true,
      "sortOrder": 4,
      "name": "Higiene completa",
      "slug": "higiene-completa",
      "shortDescription": "Uñas, oídos e higiene de almohadillas.",
      "longDescription": "Servicio de higiene puntual: corte y limado de uñas, limpieza externa de oídos y cuidado de almohadillas.",
      "priceFromEur": 20,
      "durationMinutes": 35,
      "includes": [
        "Corte y limado de uñas",
        "Limpieza externa de oídos",
        "Higiene de almohadillas"
      ],
      "sizes": [
        "Mini",
        "Pequeño",
        "Mediano",
        "Grande"
      ],
      "icon": "nail",
      "accent": "#8A43D6",
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-02-after.webp",
        "alt": "Caniche apricot después del baño",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-02-after-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        }
      }
    }
  ],
  "packages": [
    {
      "id": "pack-basico",
      "enabled": true,
      "sortOrder": 0,
      "name": "Básico",
      "priceEur": 35,
      "priceNote": "",
      "includes": [
        "Baño",
        "Secado",
        "Higiene"
      ],
      "highlighted": false,
      "highlightLabel": "",
      "accent": "#8A43D6",
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/packages/package-basic.webp",
        "alt": "Pomerania recién bañado",
        "width": 800,
        "height": 1000,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/packages/package-basic-480.webp",
            "width": 480
          }
        ],
        "ratio": "4:5",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            32
          ],
          "tablet": [
            50,
            32
          ],
          "mobile": [
            50,
            32
          ]
        },
        "credit": {
          "author": "Colaborador de Pexels",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/28914761/"
        }
      }
    },
    {
      "id": "pack-completo",
      "enabled": true,
      "sortOrder": 1,
      "name": "Completo",
      "priceEur": 50,
      "priceNote": "",
      "includes": [
        "Baño",
        "Corte",
        "Higiene"
      ],
      "highlighted": true,
      "highlightLabel": "Más popular",
      "accent": "#8A43D6",
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/packages/package-complete.webp",
        "alt": "Bichón blanco con el corte terminado",
        "width": 800,
        "height": 1000,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/packages/package-complete-480.webp",
            "width": 480
          }
        ],
        "ratio": "4:5",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            32
          ],
          "tablet": [
            50,
            32
          ],
          "mobile": [
            50,
            32
          ]
        },
        "credit": {
          "author": "Christopher Welsch Leveroni",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/31121169/"
        }
      }
    },
    {
      "id": "pack-spa",
      "enabled": true,
      "sortOrder": 2,
      "name": "Premium Spa",
      "priceEur": 65,
      "priceNote": "",
      "includes": [
        "Spa",
        "Corte",
        "Higiene"
      ],
      "highlighted": false,
      "highlightLabel": "",
      "accent": "#8A43D6",
      "image": {
        "src": "/assets/templates/canine/peludos-and-co/packages/package-spa.webp",
        "alt": "Caniche tras el tratamiento de spa",
        "width": 800,
        "height": 1000,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/packages/package-spa-480.webp",
            "width": 480
          }
        ],
        "ratio": "4:5",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            32
          ],
          "tablet": [
            50,
            32
          ],
          "mobile": [
            50,
            32
          ]
        },
        "credit": {
          "author": "Dheeraj Singh",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/28754149/"
        }
      }
    }
  ],
  "plans": [],
  "team": [],
  "gallery": [],
  "transformations": [
    {
      "id": "trf-01",
      "enabled": true,
      "sortOrder": 0,
      "petName": "Max",
      "breed": "Shih tzu",
      "serviceName": "Corte y estilismo",
      "before": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-01-before.webp",
        "alt": "Shih tzu antes del corte",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-01-before-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Danilo Mirage",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/29442589/"
        }
      },
      "after": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-01-after.webp",
        "alt": "Shih tzu después del corte",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-01-after-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Mladen Šćekić",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/23542061/"
        }
      }
    },
    {
      "id": "trf-02",
      "enabled": true,
      "sortOrder": 1,
      "petName": "Coco",
      "breed": "Caniche apricot",
      "serviceName": "Paquete Completo",
      "before": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-02-before.webp",
        "alt": "Caniche apricot antes del baño",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-02-before-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Benjamin Lehman",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/1436139/"
        }
      },
      "after": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-02-after.webp",
        "alt": "Caniche apricot después del baño",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-02-after-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Colaborador de Pexels",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/12661459/"
        }
      }
    },
    {
      "id": "trf-03",
      "enabled": true,
      "sortOrder": 2,
      "petName": "Nala",
      "breed": "Cocker spaniel",
      "serviceName": "Deslanado",
      "before": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-03-before.webp",
        "alt": "Cocker spaniel antes del arreglo",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-03-before-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Motilal Rapria",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/33881453/"
        }
      },
      "after": {
        "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-03-after.webp",
        "alt": "Cocker spaniel después del arreglo",
        "width": 900,
        "height": 900,
        "sources": [
          {
            "src": "/assets/templates/canine/peludos-and-co/transformations/transformation-03-after-480.webp",
            "width": 480
          }
        ],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Renan Rezende",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/5584468/"
        }
      }
    }
  ],
  "testimonials": [
    {
      "id": "tst-01",
      "enabled": true,
      "sortOrder": 0,
      "author": "Laura G.",
      "petName": "Max",
      "rating": 5,
      "text": "Llevamos meses confiando en el equipo y no podríamos estar más contentos. Max sale feliz y siempre impecable.",
      "avatar": {
        "src": "/assets/templates/canine/peludos-and-co/testimonials/testimonial-01.webp",
        "alt": "Retrato de Laura G., clienta",
        "width": 320,
        "height": 320,
        "sources": [],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Diogo Cacito",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/9148379/"
        }
      }
    },
    {
      "id": "tst-02",
      "enabled": true,
      "sortOrder": 1,
      "author": "Javier T.",
      "petName": "Coco",
      "rating": 5,
      "text": "Reservar desde la web es rapidísimo y siempre respetan la hora acordada.",
      "avatar": {
        "src": "/assets/templates/canine/peludos-and-co/testimonials/testimonial-02.webp",
        "alt": "Retrato de Javier T., cliente",
        "width": 320,
        "height": 320,
        "sources": [],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Kampus Production",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/8439765/"
        }
      }
    },
    {
      "id": "tst-03",
      "enabled": true,
      "sortOrder": 2,
      "author": "Elena R.",
      "petName": "Nala",
      "rating": 5,
      "text": "El deslanado le cambió el pelaje por completo y en casa se nota muchísimo.",
      "avatar": {
        "src": "/assets/templates/canine/peludos-and-co/testimonials/testimonial-03.webp",
        "alt": "Retrato de Elena R., clienta",
        "width": 320,
        "height": 320,
        "sources": [],
        "ratio": "1:1",
        "origin": "demo",
        "focal": {
          "desktop": [
            50,
            40
          ],
          "tablet": [
            50,
            40
          ],
          "mobile": [
            50,
            40
          ]
        },
        "credit": {
          "author": "Cibele Bergamim",
          "source": "Pexels",
          "license": "Pexels License",
          "url": "https://www.pexels.com/photo/32222185/"
        }
      }
    }
  ],
  "faqs": [],
  "booking": {
    "mode": "pending-request",
    "scheduleConnected": false,
    "fields": [
      {
        "name": "ownerName",
        "label": "Nombre y apellidos",
        "step": 1,
        "required": true,
        "enabled": true
      },
      {
        "name": "phone",
        "label": "Teléfono",
        "step": 1,
        "required": true,
        "enabled": true
      },
      {
        "name": "email",
        "label": "Correo electrónico",
        "step": 2,
        "required": true,
        "enabled": true
      },
      {
        "name": "petName",
        "label": "Nombre de la mascota",
        "step": 1,
        "required": true,
        "enabled": true
      },
      {
        "name": "breed",
        "label": "Raza",
        "step": 2,
        "required": false,
        "enabled": true
      },
      {
        "name": "size",
        "label": "Tamaño",
        "step": 2,
        "required": true,
        "enabled": true
      },
      {
        "name": "age",
        "label": "Edad (años)",
        "step": 2,
        "required": false,
        "enabled": true
      },
      {
        "name": "service",
        "label": "Servicio",
        "step": 1,
        "required": true,
        "enabled": true
      },
      {
        "name": "professional",
        "label": "Profesional preferido",
        "step": 2,
        "required": false,
        "enabled": true
      },
      {
        "name": "date",
        "label": "Fecha preferida",
        "step": 1,
        "required": true,
        "enabled": true
      },
      {
        "name": "time",
        "label": "Hora preferida",
        "step": 2,
        "required": false,
        "enabled": true
      },
      {
        "name": "notes",
        "label": "Observaciones",
        "step": 1,
        "required": false,
        "enabled": true
      },
      {
        "name": "allergies",
        "label": "Alergias o necesidades especiales",
        "step": 2,
        "required": false,
        "enabled": true
      },
      {
        "name": "consent",
        "label": "Consentimiento de privacidad",
        "step": 2,
        "required": true,
        "enabled": true
      }
    ],
    "professionalsSelectable": false,
    "timeSlots": [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "16:00",
      "17:00",
      "18:00"
    ],
    "sizes": [
      "Mini (hasta 5 kg)",
      "Pequeño (5–10 kg)",
      "Mediano (10–25 kg)",
      "Grande (25–40 kg)",
      "Gigante (+40 kg)"
    ],
    "confirmationTitle": "Hemos recibido tu solicitud",
    "confirmationMessage": "Es un acuse de recibo: buscamos el mejor horario y te confirmamos el hueco.",
    "privacyText": "He leído y acepto la política de privacidad y autorizo el contacto para gestionar esta solicitud.",
    "whatsappTemplate": "Hola, he solicitado {servicio} para {mascota} el {fecha}. ¿Podéis confirmarme el hueco?"
  },
  "contact": {
    "mapEmbedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=-3.6942%2C40.4199%2C-3.6742%2C40.4299&layer=mapnik&marker=40.4249%2C-3.6842",
    "mapLinkUrl": "https://www.openstreetmap.org/?mlat=40.4249&mlon=-3.6842#map=17/40.4249/-3.6842",
    "socialLinks": [
      {
        "network": "instagram",
        "url": "https://www.instagram.com/",
        "label": "Instagram de Peludos & Co."
      },
      {
        "network": "facebook",
        "url": "https://www.facebook.com/",
        "label": "Facebook de Peludos & Co."
      },
      {
        "network": "tiktok",
        "url": "https://www.tiktok.com/",
        "label": "TikTok de Peludos & Co."
      },
      {
        "network": "google",
        "url": "https://www.google.com/maps",
        "label": "Ficha de Peludos & Co. en Google Maps"
      }
    ]
  },
  "pages": [
    {
      "id": "inicio",
      "name": "Inicio",
      "route": "/",
      "sortOrder": 0,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "pco-s-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio-header",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "pco-s-hero",
          "type": "hero",
          "variantId": "pco-hero-01",
          "anchor": "inicio",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": false
        },
        {
          "id": "pco-s-services",
          "type": "services",
          "variantId": "pco-services-01",
          "anchor": "servicios",
          "sortOrder": 2,
          "enabled": true,
          "required": false,
          "fixed": false
        },
        {
          "id": "pco-s-packages",
          "type": "packages",
          "variantId": "pco-packages-01",
          "anchor": "paquetes",
          "sortOrder": 3,
          "enabled": true,
          "required": false,
          "fixed": false
        },
        {
          "id": "pco-s-process",
          "type": "process",
          "variantId": "pco-process-01",
          "anchor": "proceso",
          "sortOrder": 4,
          "enabled": true,
          "required": false,
          "fixed": false
        },
        {
          "id": "pco-s-benefits",
          "type": "benefits",
          "variantId": "pco-benefits-01",
          "anchor": "por-que-elegirnos",
          "sortOrder": 5,
          "enabled": true,
          "required": false,
          "fixed": false
        },
        {
          "id": "pco-s-proof",
          "type": "testimonials",
          "variantId": "pco-testimonials-01",
          "anchor": "testimonios",
          "sortOrder": 6,
          "enabled": true,
          "required": false,
          "fixed": false
        },
        {
          "id": "pco-s-booking",
          "type": "booking",
          "variantId": "pco-booking-01",
          "anchor": "reserva",
          "sortOrder": 7,
          "enabled": true,
          "required": true,
          "fixed": false
        },
        {
          "id": "pco-s-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 8,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "servicios",
      "name": "Servicios",
      "route": "/servicios",
      "sortOrder": 1,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "servicios-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "servicios-content",
          "type": "services",
          "variantId": "common-services-01",
          "anchor": "servicios-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "servicios-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "tarifas",
      "name": "Precios",
      "route": "/precios",
      "sortOrder": 2,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "tarifas-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "tarifas-content",
          "type": "packages",
          "variantId": "common-pricing-01",
          "anchor": "tarifas-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "tarifas-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "galeria",
      "name": "Galería",
      "route": "/galeria",
      "sortOrder": 3,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "galeria-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "galeria-content",
          "type": "gallery",
          "variantId": "common-gallery-01",
          "anchor": "galeria-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "galeria-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "sobre-nosotros",
      "name": "Sobre nosotros",
      "route": "/sobre-nosotros",
      "sortOrder": 4,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "sobre-nosotros-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "sobre-nosotros-content",
          "type": "benefits",
          "variantId": "common-about-01",
          "anchor": "sobre-nosotros-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "sobre-nosotros-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "contacto",
      "name": "Contacto",
      "route": "/contacto",
      "sortOrder": 5,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "contacto-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "contacto-content",
          "type": "contact",
          "variantId": "common-contact-01",
          "anchor": "contacto-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "contacto-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "reservar",
      "name": "Reservar",
      "route": "/reservar",
      "sortOrder": 6,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "reservar-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "reservar-content",
          "type": "booking",
          "variantId": "common-booking-01",
          "anchor": "reservar-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "reservar-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "aviso-legal",
      "name": "Aviso legal",
      "route": "/aviso-legal",
      "sortOrder": 7,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "aviso-legal-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "aviso-legal-content",
          "type": "contact",
          "variantId": "common-legal-01",
          "anchor": "aviso-legal-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "aviso-legal-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "privacidad",
      "name": "Política de privacidad",
      "route": "/privacidad",
      "sortOrder": 8,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "privacidad-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "privacidad-content",
          "type": "contact",
          "variantId": "common-legal-01",
          "anchor": "privacidad-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "privacidad-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    },
    {
      "id": "cookies",
      "name": "Política de cookies",
      "route": "/cookies",
      "sortOrder": 9,
      "themeOverrideId": null,
      "sections": [
        {
          "id": "cookies-header",
          "type": "header",
          "variantId": "pco-header-01",
          "anchor": "inicio",
          "sortOrder": 0,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "cookies-content",
          "type": "contact",
          "variantId": "common-legal-01",
          "anchor": "cookies-contenido",
          "sortOrder": 1,
          "enabled": true,
          "required": true,
          "fixed": true
        },
        {
          "id": "cookies-footer",
          "type": "footer",
          "variantId": "pco-footer-01",
          "anchor": "contacto",
          "sortOrder": 2,
          "enabled": true,
          "required": true,
          "fixed": true
        }
      ]
    }
  ],
  "tokenOverrides": {},
  "collectionSchemas": [],
  "collections": {},
  "forms": [],
  "motion": {
    "version": 1,
    "style": "suave",
    "intensity": 45,
    "durationMs": 520,
    "delayMs": 0,
    "staggerMs": 70,
    "scrollBehavior": "once",
    "threshold": 0.15,
    "cards": "lift",
    "images": "none",
    "background": "none",
    "header": "shrink",
    "buttons": "press",
    "icons": "none",
    "gallery": "fade",
    "counters": true,
    "pageTransitions": true,
    "sections": {
      "pco-s-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "pco-s-hero": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "pco-s-services": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "pco-s-packages": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "pco-s-process": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "pco-s-benefits": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "pco-s-proof": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "pco-s-booking": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "pco-s-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "servicios-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "servicios-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "servicios-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "tarifas-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "tarifas-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "tarifas-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "galeria-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "galeria-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "galeria-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "sobre-nosotros-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "sobre-nosotros-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "sobre-nosotros-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "contacto-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "contacto-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "contacto-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "reservar-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "reservar-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "reservar-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "aviso-legal-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "aviso-legal-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "aviso-legal-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "privacidad-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "privacidad-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "privacidad-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "cookies-header": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "cookies-content": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      },
      "cookies-footer": {
        "entry": "fade-up",
        "stagger": true,
        "delayMs": 0,
        "disabled": false
      }
    }
  },
  "bindings": {},
  "routes": {
    "home": "/",
    "services": "/servicios",
    "contact": "/contacto",
    "booking": "/reservar",
    "faq": "/preguntas",
    "about": "/sobre-nosotros",
    "legalNotice": "/aviso-legal",
    "privacy": "/privacidad",
    "cookies": "/cookies"
  },
  "schemaVersion": 4
};
