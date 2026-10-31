export interface PasoTutorial {
  imagen: string;
  titulo: string;
  descripcion: string;
}

export interface Tutorial {
  id: string;
  nombre: string;
  icono: string;
  resumen: string;
  pasos: PasoTutorial[];
}

const img = (n: string) => `/tutoriales/${n}.webp`;

export const tutoriales: Tutorial[] = [
  {
    id: "primeros-pasos",
    nombre: "Primeros pasos",
    icono: "🚀",
    resumen: "Conoce la app en un minuto.",
    pasos: [
      {
        imagen: img("primeros_pasos1"),
        titulo: "Bienvenido a HogarGo",
        descripcion:
          "Aquí verás un resumen general: ranking, tareas programadas, lista de la compra, saldos y tus finanzas personales. Con HogarPlus podrás ver además estadísticas detalladas.",
      },
      {
        imagen: img("primeros_pasos2"),
        titulo: "Navega por la app",
        descripcion:
          "Utiliza los accesos directos y la barra inferior. Personaliza el Inicio a tu gusto: con «Mostrar / ocultar paneles» eliges qué tarjetas ver y en qué orden.",
      },
      {
        imagen: img("primeros_pasos3"),
        titulo: "Gestiona tareas",
        descripcion:
          "Crea y planifica tareas de casa de manera sencilla y eficiente.",
      },
      {
        imagen: img("economia1"),
        titulo: "Economía compartida",
        descripcion:
          "Controla los gastos del hogar, lo que has pagado tú y el balance del mes para saldar cuentas. Controla también gastos recurrentes y metas de ahorro.",
      },
      {
        imagen: img("primeros_pasos_logros"),
        titulo: "Racha y logros",
        descripcion:
          "Haz tareas cada día para mantener tu racha, subir de nivel y ganar insignias. En «Tus logros» verás también el reto semanal del hogar.",
      },
      {
        imagen: img("primeros_pasos5"),
        titulo: "¡Vamos a ello!",
        descripcion:
          "Para empezar a compartir, añade otro usuario. Puedes enviar invitaciones al hogar o añadir usuarios offline sin cuenta sincronizada. También está disponible el modo «Un usuario»: Actívalo desde Configuración > Modo del hogar.",
      },
    ],
  },
  {
    id: "tareas",
    nombre: "Tareas",
    icono: "✅",
    resumen: "Reparte y programa las tareas de casa.",
    pasos: [
      {
        imagen: img("tareas1"),
        titulo: "Gestiona tareas",
        descripcion:
          "Lleva un control del hogar. Crea nuevas tareas o edita las existentes.",
      },
      {
        imagen: img("tareas2"),
        titulo: "Marcador de tareas",
        descripcion:
          "Marca tareas realizadas para cada usuario, ya sean tareas programadas o sin planificar.",
      },
      {
        imagen: img("tareas3"),
        titulo: "Planificador",
        descripcion:
          "Programa tareas de manera recurrente. Elige días de la semana, usuarios y tareas para planificar. Repite la programación de manera mensual o anual.",
      },
      {
        imagen: img("tareas_reparto"),
        titulo: "Reparto automático",
        descripcion:
          "Con HogarPlus, elige al menos dos personas y activa el reparto: cada tarea va a una sola persona y los puntos se reparten de forma justa.",
      },
      {
        imagen: img("tareas4"),
        titulo: "Historial y seguimiento",
        descripcion:
          "Consulta las tareas realizadas por día y persona, y filtra por usuario, tipo o mes. Toca un registro para editarlo o deslízalo a la izquierda para borrarlo.",
      },
      {
        imagen: img("tareas_recompensas"),
        titulo: "Recompensas",
        descripcion:
          "Con HogarPlus, canjea los puntos de las tareas por los premios que decidáis en casa. Crea los tuyos, márcalos como entregados y consulta los canjes con el botón Historial.",
      },
    ],
  },
  {
    id: "economia",
    nombre: "Economía",
    icono: "💶",
    resumen: "Gastos compartidos y finanzas personales.",
    pasos: [
      {
        imagen: img("economia1"),
        titulo: "Economía compartida",
        descripcion:
          "El panel principal muestra lo que has pagado tú, el gasto total del hogar y tu porcentaje. Despliega el balance del mes para ver quién debe a quién y liquidar cuentas. Puedes consultar también los gastos recurrentes y las metas de ahorro. En la parte inferior verás el listado completo agrupado por periodos.",
      },
      {
        imagen: img("economia2"),
        titulo: "Movimientos",
        descripcion:
          "Añade compras, pagos o ingresos. Haz el reparto entre los distintos usuarios del hogar de manera fácil y rápida. Con HogarPlus, usa «Escanear ticket» para rellenar los datos con una foto y «Repetir cada mes» para los gastos fijos.",
      },
      {
        imagen: img("economia_recurrentes"),
        titulo: "Gastos recurrentes",
        descripcion:
          "Con HogarPlus, el alquiler, la luz o internet se apuntan solos cada mes, con el mismo importe y reparto. Toca la tarjeta para verlos o dejar de repetirlos.",
      },
      {
        imagen: img("economia_metas"),
        titulo: "Metas de ahorro",
        descripcion:
          "Con HogarPlus, ahorrad juntos para algo: vacaciones, un sofá… Cada uno aporta lo suyo y veis cuánto falta. Las aportaciones no cuentan como gastos del hogar.",
      },
      {
        imagen: img("economia3"),
        titulo: "Tus finanzas personales",
        descripcion:
          "«Mi cuenta» es el saldo con el que empiezas el mes; se arrastra solo de un mes a otro y puedes corregirlo con el lápiz. «Ingreso est.» es tu ingreso mensual (p. ej. la nómina) y se repite cada mes hasta que lo cambies. Balance del mes = Mi cuenta + Ingreso est. − Gastado ± lo que te deben o debes en el hogar.",
      },
      {
        imagen: img("economia4"),
        titulo: "Presupuesto mensual",
        descripcion:
          "En la pestaña Personal, fija con el lápiz un límite de gasto por categoría. El anillo muestra qué porcentaje llevas gastado y se pone en rojo si te pasas.",
      },
      {
        imagen: img("economia_informe"),
        titulo: "Informes",
        descripcion:
          "Con HogarPlus, exporta desde Estadísticas un informe del mes o del año en PDF, con gráficos y resumen visual, o en CSV con todos los datos.",
      },
    ],
  },
  {
    id: "compras",
    nombre: "Compras",
    icono: "🛒",
    resumen: "Listas de la compra siempre al día.",
    pasos: [
      {
        imagen: img("compra1"),
        titulo: "Listas de compra",
        descripcion:
          "Administra listas de compra. Crea o edita productos necesarios para el hogar.",
      },
      {
        imagen: img("compra2"),
        titulo: "¡Que no se te olvide nada!",
        descripcion:
          "Gestiona tu lista marcando los productos que vayas añadiendo al carrito.",
      },
      {
        imagen: img("compra3"),
        titulo: "Añadir productos",
        descripcion:
          "Dentro de una lista, pulsa + y elige «Añadir productos». Busca en el catálogo, ajusta las unidades o crea un producto nuevo si no existe.",
      },
      {
        imagen: img("compra4"),
        titulo: "Dicta o pega tu lista",
        descripcion:
          "Toca el micrófono y di lo que necesitas, o pega una lista entera: «yogures, arroz, zumo y servilletas». Se separa sola y lo añades todo de un toque.",
      },
    ],
  },
  {
    id: "logros",
    nombre: "Logros",
    icono: "🏆",
    resumen: "Rachas, niveles, insignias y retos.",
    pasos: [
      {
        imagen: img("logros1"),
        titulo: "Racha y nivel",
        descripcion:
          "Haz tareas días seguidos para mantener la racha. Los puntos de siempre suben tu nivel, y arriba puedes ver también los logros del resto del hogar.",
      },
      {
        imagen: img("logros2"),
        titulo: "Insignias y logros secretos",
        descripcion:
          "Hay insignias de tareas y de economía. Las que aún no tienes muestran cuánto te falta, y algunas son secretas hasta que las consigues.",
      },
      {
        imagen: img("logros3"),
        titulo: "Reto del hogar",
        descripcion:
          "Cada semana tenéis un reto entre todos. Si lo cumplís, cada persona gana +20 puntos extra para canjear en Recompensas.",
      },
      {
        imagen: img("logros4"),
        titulo: "Comparte tus insignias",
        descripcion:
          "Toca una insignia conseguida y compártela con una imagen por WhatsApp, Instagram o donde quieras.",
      },
    ],
  },
];

export const funciones = [
  { icono: "✅", titulo: "Tareas y puntos", texto: "Crea tareas por categoría, asígnalas y márcalas en un toque. Cada una suma puntos al ranking." },
  { icono: "🏆", titulo: "Logros y retos", texto: "Rachas, niveles, 39 insignias y un reto semanal para cumplir entre todos." },
  { icono: "🎁", titulo: "Recompensas", texto: "Canjea los puntos por premios que decidís en casa: elegir la peli, librarse de fregar… (HogarPlus)" },
  { icono: "🗓️", titulo: "Planificador", texto: "Cuándo, quién y qué: programa tareas por semanas, días sueltos, el mes entero o el año." },
  { icono: "💶", titulo: "Gastos compartidos", texto: "Quién paga y entre quién se reparte. HogarGo calcula quién debe a quién para liquidar." },
  { icono: "🧾", titulo: "Economía en automático", texto: "Escanea tickets, repite los gastos fijos y ahorrad juntos con metas del hogar. (HogarPlus)" },
  { icono: "💼", titulo: "Finanzas personales", texto: "Tu cuenta mes a mes, ingreso estimado y presupuestos por categoría." },
  { icono: "📊", titulo: "Estadísticas e informes", texto: "Análisis de tareas y gastos, e informes del mes o del año en PDF y CSV. (HogarPlus)" },
  { icono: "🛒", titulo: "Lista de la compra", texto: "Listas compartidas en tiempo real. Dicta lo que falta o pega la lista que te han mandado." },
  { icono: "📲", titulo: "Widget y avisos", texto: "Tus tareas, la compra y tu saldo en la pantalla del móvil, con recordatorio diario." },
  { icono: "🏠", titulo: "Inicio a tu medida", texto: "Elige qué tarjetas ver y en qué orden. Con modo oscuro y en 9 idiomas." },
  { icono: "👨‍👩‍👧", titulo: "Hogar compartido", texto: "Invita con un enlace, añade usuarios sin cuenta o úsala tú solo en modo «Un usuario»." },
];
