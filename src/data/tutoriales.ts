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
          "Utiliza los accesos directos y la barra inferior. Y personaliza tu Inicio a tu gusto: con «Mostrar / ocultar paneles» eliges qué tarjetas ver y en qué orden. Cada usuario tiene la suya.",
      },
      {
        imagen: img("primeros_pasos3"),
        titulo: "Gestiona tareas",
        descripcion: "Crea y planifica tareas de casa de manera sencilla y eficiente.",
      },
      {
        imagen: img("economia1"),
        titulo: "Economía compartida",
        descripcion:
          "Controla los gastos del hogar, lo que has pagado tú y el balance del mes para saldar cuentas.",
      },
      {
        imagen: img("primeros_pasos5"),
        titulo: "¡Vamos a ello!",
        descripcion:
          "Para empezar a compartir, añade otro usuario. Puedes enviar invitaciones al hogar o añadir usuarios offline sin cuenta sincronizada. También está disponible el modo «Un usuario»: puedes activarlo desde Configuración > Modo del hogar.",
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
        descripcion: "Lleva un control del hogar. Crea nuevas tareas o edita las existentes.",
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
        imagen: img("tareas4"),
        titulo: "Historial y seguimiento",
        descripcion:
          "Consulta las tareas realizadas por día y persona, y filtra por usuario, tipo o mes. Toca un registro para editarlo o deslízalo a la izquierda para borrarlo.",
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
          "Arriba ves lo que has pagado tú, el gasto total del hogar y tu porcentaje. Despliega el balance del mes para ver quién debe a quién y liquidar cuentas.",
      },
      {
        imagen: img("economia2"),
        titulo: "Movimientos",
        descripcion:
          "Añade compras, pagos o ingresos. Haz el reparto entre los distintos usuarios del hogar de manera fácil y rápida.",
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
        descripcion: "Gestiona tu lista marcando los productos que vayas añadiendo al carrito.",
      },
    ],
  },
];

export const funciones = [
  { icono: "✅", titulo: "Tareas y puntos", texto: "Crea tareas por categoría, asígnalas y márcalas en un toque. Cada una suma puntos." },
  { icono: "🏆", titulo: "Ranking y motivación", texto: "Ranking semanal y mensual con el % del reparto de cada uno, y avisos si alguien se queda atrás." },
  { icono: "🗓️", titulo: "Planificador", texto: "Qué, quién y cuándo: programa tareas por semanas, días sueltos, el mes entero o el año." },
  { icono: "💶", titulo: "Gastos compartidos", texto: "Quién paga y entre quién se reparte. HogarGo calcula quién debe a quién para liquidar." },
  { icono: "💼", titulo: "Finanzas personales", texto: "Tu cuenta mes a mes, ingreso estimado, presupuestos por categoría y metas de ahorro." },
  { icono: "🛒", titulo: "Lista de la compra", texto: "Listas compartidas en tiempo real, agrupadas por categoría y con tu propio catálogo." },
  { icono: "🏠", titulo: "Inicio a tu medida", texto: "Elige qué tarjetas ver y en qué orden. Con modo oscuro y en 9 idiomas." },
  { icono: "👨‍👩‍👧", titulo: "Hogar compartido", texto: "Invita con un código, añade usuarios sin cuenta o úsala tú solo en modo «Un usuario»." },
];
