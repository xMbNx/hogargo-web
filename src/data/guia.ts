// Contenido de la guía visual (mismo que el manual en PDF de /manual).

export const pasosInicio = [
  { icono: "📲", titulo: "Crea tu cuenta", texto: "Con tu email o con «Continúa con Google»." },
  { icono: "🏠", titulo: "Crea tu hogar", texto: "Ponle nombre. Puedes cambiarlo cuando quieras." },
  { icono: "✉️", titulo: "Invita a los demás", texto: "Genera un código de invitación y compártelo." },
  { icono: "🎉", titulo: "¡A organizar!", texto: "Todo se sincroniza al momento en los móviles del hogar." },
];

export const formasDeSumar = [
  {
    icono: "👥",
    titulo: "Con cuenta sincronizada",
    texto:
      "Cada uno usa HogarGo en su móvil y entra en el hogar con el código de invitación desde «Unirse a un hogar existente».",
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
  { funcion: "Tareas, puntos y ranking", gratis: "✓", plus: "✓" },
  { funcion: "Gastos compartidos y finanzas personales", gratis: "✓", plus: "✓" },
  { funcion: "Planificador semanal y mensual", gratis: "✓", plus: "✓" },
  { funcion: "Personas por hogar", gratis: "2", plus: "Ilimitadas" },
  { funcion: "Hogares por cuenta", gratis: "1", plus: "Ilimitados" },
  { funcion: "Listas de la compra", gratis: "1", plus: "Ilimitadas" },
  { funcion: "Repetir la planificación todo el año", gratis: "—", plus: "✓" },
  { funcion: "Historial completo de registros y asignaciones", gratis: "—", plus: "✓" },
  { funcion: "Estadísticas avanzadas de tareas y economía", gratis: "—", plus: "✓" },
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
    a: "Pídele un código de invitación. En Configuración → Hogares, pulsa «Unirse a un hogar existente», pega el código y escribe tu nombre.",
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
