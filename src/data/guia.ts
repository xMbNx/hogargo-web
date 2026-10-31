// Contenido de la guía visual (mismo que el manual en PDF de /manual).

export const pasosInicio = [
  { icono: "📲", titulo: "Crea tu cuenta", texto: "Con tu email o con «Continúa con Google»." },
  { icono: "🏠", titulo: "Crea tu hogar", texto: "Ponle nombre. Puedes cambiarlo cuando quieras." },
  { icono: "✉️", titulo: "Invita a los demás", texto: "Comparte un enlace de invitación: entran con un toque." },
  { icono: "🎉", titulo: "¡A organizar!", texto: "Todo se sincroniza al momento en los móviles del hogar." },
];

export const formasDeSumar = [
  {
    icono: "👥",
    titulo: "Con cuenta sincronizada",
    texto:
      "Cada uno usa HogarGo en su móvil. Comparte el enlace de invitación y basta con tocarlo; también lleva un código.",
  },
  {
    icono: "🧒",
    titulo: "Usuario sin cuenta",
    texto:
      "Para peques o para quien no quiere instalar la app. Tú le apuntas las tareas y los gastos.",
  },
  {
    icono: "🙋",
    titulo: "Modo «Un usuario»",
    texto:
      "¿Vives solo? Actívalo en Configuración → Modo del hogar y lleva tus tareas, tu compra y tus finanzas.",
  },
];

export const comparativa: { funcion: string; gratis: string; plus: string }[] = [
  { funcion: "Tareas, puntos, ranking y planificador semanal y mensual", gratis: "✓", plus: "✓" },
  { funcion: "Logros, rachas y reto del hogar", gratis: "✓", plus: "✓" },
  { funcion: "Gastos compartidos y finanzas personales", gratis: "✓", plus: "✓" },
  { funcion: "Compra por voz, widget y recordatorios", gratis: "✓", plus: "✓" },
  { funcion: "Personas por hogar", gratis: "2", plus: "Sin límite" },
  { funcion: "Hogares por cuenta", gratis: "1", plus: "Sin límite" },
  { funcion: "Listas de la compra", gratis: "1", plus: "Sin límite" },
  { funcion: "Historial de registros y asignaciones", gratis: "30 días", plus: "Completo" },
  { funcion: "Repetir la planificación todo el año", gratis: "—", plus: "✓" },
  { funcion: "Reparto automático y justo de tareas", gratis: "—", plus: "✓" },
  { funcion: "Recompensas canjeables con puntos", gratis: "—", plus: "✓" },
  { funcion: "Escanear tickets", gratis: "—", plus: "✓" },
  { funcion: "Gastos que se repiten cada mes", gratis: "—", plus: "✓" },
  { funcion: "Metas de ahorro del hogar", gratis: "—", plus: "✓" },
  { funcion: "Informes mensuales y anuales en PDF y CSV", gratis: "—", plus: "✓" },
  { funcion: "Estadísticas avanzadas y resumen del mes", gratis: "—", plus: "✓" },
  { funcion: "Colores de acento", gratis: "—", plus: "✓" },
];

export const planes = [
  { nombre: "Mensual", texto: "Renovación cada mes" },
  { nombre: "6 meses", texto: "Renovación semestral, con ahorro" },
  { nombre: "Anual", texto: "Renovación anual, el mayor ahorro" },
  { nombre: "Para siempre", texto: "Pago único, de por vida", destacado: true },
];

export const faqs = [
  {
    q: "¿Necesito que todos tengan la app?",
    a: "No. Puedes añadir usuarios sin cuenta y apuntarles tú sus tareas y gastos.",
  },
  {
    q: "¿Cómo me uno al hogar de otra persona?",
    a: "Pídele el enlace de invitación y tócalo. O, con el código, ve a Configuración → Hogares → «Unirse a un hogar existente» y escribe tu nombre.",
  },
  {
    q: "¿Cómo se calcula el ranking?",
    a: "Cada tarea marcada suma sus puntos a quien la hizo. El ranking muestra los puntos, el número de tareas y el porcentaje del reparto de cada persona, por semana o por mes.",
  },
  {
    q: "Me he equivocado al marcar una tarea, ¿qué hago?",
    a: "Ve al Historial: toca el registro para editarlo o deslízalo a la izquierda para borrarlo.",
  },
  {
    q: "¿Cómo mantengo la racha?",
    a: "Haz al menos una tarea cada día. Si un día aún no has hecho ninguna, la app te avisa para que no la pierdas.",
  },
  {
    q: "¿Los puntos extra del reto cuentan en el ranking?",
    a: "No. Solo sirven para canjear recompensas: no cuentan para el ranking ni para tu nivel. Y canjear tampoco los baja.",
  },
  {
    q: "¿Qué pasa si «Mi cuenta» no coincide con mi banco?",
    a: "Corrígela con el lápiz en la pestaña Personal. El nuevo valor se arrastra a los meses siguientes.",
  },
  {
    q: "Si pago HogarPlus, ¿los demás del hogar también lo tienen?",
    a: "Sí. HogarPlus se activa en el hogar y lo disfrutan todos sus miembros.",
  },
  {
    q: "He cambiado de móvil, ¿pierdo mis datos?",
    a: "No. Inicia sesión con la misma cuenta y todo estará ahí. Si tenías HogarPlus, pulsa «Restaurar compras».",
  },
  {
    q: "¿Cómo elimino mi cuenta?",
    a: "En Configuración → Opciones generales → Datos de la aplicación → Eliminar mi cuenta. Escribe ELIMINAR y vuelve a iniciar sesión para confirmar.",
  },
];
