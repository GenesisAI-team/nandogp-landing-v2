/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LegalSection } from "../types";

export const LEGAL_CONTENT: Record<string, LegalSection> = {
  "aviso-legal": {
    title: "Aviso Legal",
    blocks: [
      {
        type: "infoCard",
        fields: [
          { label: "Titular del sitio web:", value: "Efrén Orlando Guaman Peñarreta" },
          { label: "NIF:", value: "73419940F" },
          { label: "Domicilio:", value: "C/ Mayor 15, 1.5, 31600 Burlada (Navarra), España" },
          { label: "Teléfono:", value: "+34 605 474 930" },
          { label: "Email:", value: "eonandogp@gmail.com" },
        ],
      },
      {
        type: "heading",
        text: "1. Objeto",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El presente Aviso Legal regula el acceso, navegación y uso del sitio web " },
          { text: "nando-gp.com", bold: true },
          { text: ' (en adelante, el "Sitio Web"), así como las responsabilidades derivadas de la utilización de sus contenidos. El acceso al Sitio Web atribuye la condición de usuario e implica la aceptación de este Aviso Legal.' },
        ],
      },
      {
        type: "heading",
        text: "2. Condiciones de uso",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El usuario se compromete a usar el Sitio Web de forma diligente, legal y conforme a la buena fe, absteniéndose de:" },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          [{ text: "Usar el Sitio Web con fines ilícitos o lesivos." }],
          [{ text: "Provocar daños en los sistemas del titular o de terceros." }],
          [{ text: "Introducir o difundir virus o cualquier sistema susceptible de causar daños." }],
        ],
      },
      {
        type: "heading",
        text: "3. Propiedad intelectual e industrial",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Los contenidos del Sitio Web (textos, imágenes, diseños, logotipos, código, etc.) son titularidad del responsable o se utilizan con autorización/licencia y están protegidos por la normativa aplicable. Queda prohibida su reproducción, distribución o modificación sin autorización expresa." },
        ],
      },
      {
        type: "heading",
        text: "4. Responsabilidad",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El titular no garantiza la disponibilidad permanente del Sitio Web ni la ausencia de errores, aunque adoptará medidas razonables para evitarlos. El titular no se responsabiliza del uso que los usuarios realicen de los contenidos." },
        ],
      },
      {
        type: "heading",
        text: "5. Enlaces",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El Sitio Web puede contener enlaces a sitios de terceros. El titular no se responsabiliza de contenidos, políticas o prácticas de dichos sitios." },
        ],
      },
      {
        type: "heading",
        text: "6. Legislación y jurisdicción",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Este Aviso Legal se rige por la legislación española. Para cualquier controversia, las partes se someterán a los Juzgados y Tribunales del domicilio del usuario cuando este sea consumidor; en caso contrario, a los del domicilio del titular, salvo norma imperativa en contrario." },
        ],
      },
    ],
  },

  privacidad: {
    title: "Política de Privacidad",
    blocks: [
      {
        type: "heading",
        text: "1. Responsable del tratamiento",
      },
      {
        type: "infoCard",
        fields: [
          { label: "Responsable:", value: "Efrén Orlando Guaman Peñarreta" },
          { label: "NIF:", value: "73419940F" },
          { label: "Dirección:", value: "C/ Mayor 15, 1.5, 31600 Burlada (Navarra), España" },
          { label: "Email:", value: "eonandogp@gmail.com" },
          { label: "Teléfono:", value: "+34 605 474 930" },
        ],
      },
      {
        type: "heading",
        text: "2. Qué datos tratamos y cómo los recogemos",
      },
      {
        type: "paragraph",
        segments: [
          { text: "En este negocio, los datos se recogen principalmente por WhatsApp y, en su caso, por llamadas/Email cuando el usuario los usa. Podemos tratar:" },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          [
            { text: "Identificativos:", bold: true },
            { text: " nombre y apellidos." },
          ],
          [
            { text: "Contacto:", bold: true },
            { text: " teléfono, email." },
          ],
          [
            { text: "Información del servicio:", bold: true },
            { text: " direcciones de recogida/entrega, fechas, detalles de la mudanza/porte, mensajes, fotos o inventario que el usuario envíe." },
          ],
          [
            { text: "Datos de facturación:", bold: true },
            { text: " cuando se solicita factura con IVA." },
          ],
        ],
      },
      {
        type: "heading",
        text: "3. Finalidades del tratamiento",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Tratamos los datos para:" },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          [{ text: "Atender solicitudes de presupuesto y consultas (principalmente por WhatsApp)." }],
          [{ text: "Gestionar y ejecutar servicios: mudanzas, portes, embalaje/protección, almacenamiento y logística asociada." }],
          [{ text: "Gestión administrativa y contable, incluida la emisión de facturas con IVA cuando proceda." }],
          [{ text: "Gestión de reclamaciones y atención post-servicio." }],
        ],
      },
      {
        type: "heading",
        text: "4. Base jurídica",
      },
      {
        type: "list",
        ordered: false,
        items: [
          [
            { text: "Ejecución de un contrato o medidas precontractuales:", bold: true },
            { text: " para preparar presupuestos y prestar el servicio." },
          ],
          [
            { text: "Cumplimiento de obligaciones legales:", bold: true },
            { text: " facturación, obligaciones fiscales/contables." },
          ],
          [
            { text: "Interés legítimo:", bold: true },
            { text: " atender comunicaciones y mejorar la calidad del servicio (sin usos invasivos)." },
          ],
          [
            { text: "Consentimiento (cuando aplique):", bold: true },
            { text: " por ejemplo, si el usuario solicita recibir comunicaciones por un canal específico o envía información voluntaria." },
          ],
        ],
      },
      {
        type: "heading",
        text: "5. Conservación de datos",
      },
      {
        type: "list",
        ordered: false,
        items: [
          [
            { text: "Datos de presupuesto/consultas:", bold: true },
            { text: " durante el tiempo necesario para atender la solicitud y, posteriormente, por plazos razonables para seguimiento." },
          ],
          [
            { text: "Datos de servicios y facturación:", bold: true },
            { text: " se conservarán durante los plazos exigidos por normativa fiscal y contable." },
          ],
          [
            { text: "Mensajes de WhatsApp:", bold: true },
            { text: " podrán conservarse mientras sean necesarios para la relación comercial o reclamaciones." },
          ],
        ],
      },
      {
        type: "heading",
        text: "6. Destinatarios",
      },
      {
        type: "paragraph",
        segments: [
          { text: "No se cederán datos a terceros salvo:" },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          [{ text: "Obligación legal (Administración Tributaria, autoridades competentes)." }],
          [{ text: "Proveedores necesarios para la prestación del servicio (p. ej., almacenamiento si aplica) bajo compromisos de confidencialidad cuando proceda." }],
        ],
      },
      {
        type: "heading",
        text: "7. WhatsApp / Meta (canal de comunicación)",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Si el usuario contacta por WhatsApp, debe saber que es un servicio prestado por WhatsApp/Meta y que sus datos pueden ser tratados conforme a sus políticas. El responsable utiliza WhatsApp como canal para atender solicitudes y coordinar servicios." },
        ],
      },
      {
        type: "heading",
        text: "8. Derechos del usuario",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad." },
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Para ejercerlos, envíe un email a: " },
          { text: "eonandogp@gmail.com", bold: true },
          { text: ", indicando el derecho y aportando información que permita identificar la solicitud." },
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Asimismo, si considera vulnerados sus derechos, puede reclamar ante la Agencia Española de Protección de Datos (AEPD)." },
        ],
      },
      {
        type: "heading",
        text: "9. Seguridad",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Se aplican medidas razonables para proteger la información y evitar accesos no autorizados." },
        ],
      },
    ],
  },

  terminos: {
    title: "Términos y Condiciones del Servicio",
    blocks: [
      {
        type: "heading",
        text: "1. Identificación del prestador",
      },
      {
        type: "infoCard",
        fields: [
          { label: "Prestador:", value: "Efrén Orlando Guaman Peñarreta (autónomo)" },
          { label: "NIF:", value: "73419940F" },
          { label: "Dirección:", value: "C/ Mayor 15, 1.5, 31600 Burlada (Navarra), España" },
          { label: "Contacto:", value: "+34 605 474 930 · eonandogp@gmail.com" },
        ],
      },
      {
        type: "heading",
        text: "2. Servicios ofrecidos",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Se prestan, bajo presupuesto y condiciones acordadas, los siguientes servicios:" },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          [{ text: "Mudanzas locales y nacionales (hogar)." }],
          [{ text: "Mudanzas de oficina." }],
          [{ text: "Portes express." }],
          [{ text: "Embalaje, protección y manipulación de enseres." }],
          [{ text: "Almacenamiento (cuando se contrate)." }],
          [{ text: "Posibilidad de seguro de mercancía (según condiciones indicadas en el presupuesto)." }],
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Zona de cobertura:", bold: true },
          { text: " Nacional (España)." },
        ],
      },
      {
        type: "heading",
        text: "3. Cómo se contrata (a distancia)",
      },
      {
        type: "paragraph",
        segments: [
          { text: "La contratación se realiza normalmente a distancia:" },
        ],
      },
      {
        type: "list",
        ordered: true,
        items: [
          [{ text: "Solicitud de presupuesto por WhatsApp/teléfono/email." }],
          [{ text: "Envío de presupuesto por WhatsApp (u otro canal acordado)." }],
          [{ text: "Confirmación por WhatsApp (o canal acordado) para reservar fecha/servicio." }],
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "La confirmación implica aceptación de estas condiciones y del presupuesto." },
        ],
      },
      {
        type: "heading",
        text: "4. Precios y forma de pago",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Los precios se determinan por presupuesto, según volumen, distancia, accesos, fechas, servicios extra, necesidad de embalaje, etc. El presupuesto indicará, cuando proceda, si incluye IVA." },
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "La forma de pago se indicará en el presupuesto o se acordará por WhatsApp (transferencia/efectivo/Bizum, etc. si aplica). Si aparecen circunstancias no informadas (p. ej., accesos complejos, volumen superior, objetos especiales), se informará y podrá ajustarse el precio antes de ejecutar." },
        ],
      },
      {
        type: "heading",
        text: "5. Obligaciones del cliente",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El cliente se compromete a:" },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          [{ text: "Facilitar información veraz (direcciones, fechas, volumen aproximado, accesos, ascensor, restricciones de aparcamiento, objetos especiales)." }],
          [{ text: "Avisar de objetos frágiles, de valor o especiales (pianos, cajas fuertes, etc.)." }],
          [{ text: "Tener preparado lo acordado (o contratar embalaje) según el servicio." }],
          [{ text: "Garantizar que puede realizarse la carga/descarga conforme a lo pactado." }],
        ],
      },
      {
        type: "heading",
        text: "6. Embalaje, protección y seguro",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El prestador ofrece protección y embalaje cuando se contrata. El seguro de mercancía, si se contrata, quedará sujeto a lo indicado en el presupuesto: cobertura, límites, exclusiones, franquicias, y requisitos (por ejemplo, declaración de valor)." },
        ],
      },
      {
        type: "heading",
        text: "7. Almacenamiento",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Si se contrata almacenamiento, se definirá en el presupuesto la duración, condiciones, precio y forma de entrega/retirada. El cliente debe comunicar con antelación la retirada y cumplir con pagos pactados." },
        ],
      },
      {
        type: "heading",
        text: "8. Cancelaciones y cambios de fecha",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Para reservas confirmadas:" },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          [
            { text: "Cancelación con más de 48h:", bold: true },
            { text: " sin coste." },
          ],
          [
            { text: "Cancelación entre 24h y 48h:", bold: true },
            { text: " se podrá aplicar un cargo de hasta el 25% del presupuesto para cubrir planificación/bloqueo de agenda." },
          ],
          [
            { text: "Cancelación con menos de 24h o no presentación:", bold: true },
            { text: " se podrá aplicar un cargo de hasta el 50% del presupuesto." },
          ],
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Cambios de fecha: se intentará reprogramar sin coste si se avisa con suficiente antelación y hay disponibilidad. Si ya se han incurrido en gastos (peajes, permisos, desplazamientos, materiales), podrán repercutirse justificadamente." },
        ],
      },
      {
        type: "heading",
        text: "9. Derecho de desistimiento",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Si el cliente es consumidor, puede existir derecho de desistimiento en contratos a distancia. No obstante, cuando el servicio se presta en una fecha concreta o ya se ha iniciado con consentimiento del cliente (por ejemplo, reserva firme y ejecución programada), el desistimiento puede quedar limitado conforme a la normativa aplicable. En todo caso, se informará y se actuará conforme a la ley." },
        ],
      },
      {
        type: "heading",
        text: "10. Reclamaciones",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El cliente puede presentar reclamación por Email (eonandogp@gmail.com) o correo postal a la dirección del prestador. Se responderá en un plazo razonable." },
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "Si el cliente es consumidor, podrá acudir además a los sistemas públicos de consumo/OMIC o mecanismos de resolución alternativa disponibles. " },
          { text: "Nota: la plataforma europea ODR fue objeto de discontinuación normativa.", italic: true },
        ],
      },
      {
        type: "heading",
        text: "11. Legislación aplicable",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Estas condiciones se rigen por la legislación española. Para controversias: juzgados del domicilio del consumidor cuando proceda; en caso contrario, los del prestador, salvo norma imperativa." },
        ],
      },
    ],
  },

  cookies: {
    title: "Política de Cookies",
    blocks: [
      {
        type: "heading",
        text: "1. Qué son las cookies",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Las cookies son pequeños archivos que se descargan en el dispositivo del usuario al acceder a determinadas páginas web. Sirven para permitir el funcionamiento técnico del sitio y, en algunos casos, para recordar preferencias." },
        ],
      },
      {
        type: "heading",
        text: "2. Qué cookies utiliza este sitio",
      },
      {
        type: "paragraph",
        segments: [
          { text: "En este sitio web se utilizan solo " },
          { text: "cookies técnicas necesarias", bold: true },
          { text: " para:" },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          [{ text: "Permitir la navegación y el correcto funcionamiento del sitio." }],
          [{ text: "Mantener configuraciones básicas de sesión (si aplica técnicamente)." }],
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "No se utilizan cookies de analítica, publicidad ni perfilado, salvo que se añadan en el futuro (en cuyo caso se actualizará esta política y, si corresponde, se mostrará un banner/consentimiento)." },
        ],
      },
      {
        type: "heading",
        text: "3. Cookies de terceros",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Si el sitio incluye contenido de terceros (por ejemplo, mapas incrustados, vídeos o widgets), esos terceros podrían instalar cookies. En ese caso, se recomienda revisar las políticas de dichos terceros." },
        ],
      },
      {
        type: "heading",
        text: "4. Cómo desactivar cookies",
      },
      {
        type: "paragraph",
        segments: [
          { text: "El usuario puede configurar su navegador para bloquear o eliminar cookies. Al hacerlo, algunas funciones del sitio podrían no funcionar correctamente. Las opciones dependen del navegador (Chrome, Safari, Firefox, Edge, etc.)." },
        ],
      },
      {
        type: "heading",
        text: "5. Cambios en la política",
      },
      {
        type: "paragraph",
        segments: [
          { text: "Esta política puede actualizarse por cambios técnicos o legales. Se recomienda revisarla periódicamente." },
        ],
      },
    ],
  },
};
