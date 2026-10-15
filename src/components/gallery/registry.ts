import type { ComponentType } from "react";
import AcordeonFaq from "./acordeon-faq";
import BotonBordeAnimado from "./boton-borde-animado";
import BotonBrillante from "./boton-brillante";
import BotonMagnetico from "./boton-magnetico";
import ContadorAnimado from "./contador-animado";
import CursorAnillo from "./cursor-anillo";
import CursorChispas from "./cursor-chispas";
import CursorEstela from "./cursor-estela";
import FondoAurora from "./fondo-aurora";
import FondoCuadriculaRetro from "./fondo-cuadricula-retro";
import FondoEstrellas from "./fondo-estrellas";
import FondoGradienteAnimado from "./fondo-gradiente-animado";
import FondoLinterna from "./fondo-linterna";
import FondoOndas from "./fondo-ondas";
import FondoPuntos from "./fondo-puntos";
import Marquesina from "./marquesina";
import RevelarAlScroll from "./revelar-al-scroll";
import TarjetaFlip from "./tarjeta-flip";
import TarjetaInclinada from "./tarjeta-inclinada";
import TarjetaSpotlight from "./tarjeta-spotlight";
import TarjetasAbanico from "./tarjetas-abanico";
import TextoDegradado from "./texto-degradado";
import TextoMaquina from "./texto-maquina";
import TextoOla from "./texto-ola";
import TextoPalabrasReveladas from "./texto-palabras-reveladas";
import TextoRevuelto from "./texto-revuelto";

export type GalleryItem = {
  /** Identificador único en minúsculas con guiones, igual al nombre del archivo. */
  id: string;
  /** Nombre visible para el alumno. */
  name: string;
  /** Categoría: botones, tarjetas, fondos, texto, scroll, ... */
  category: string;
  /** Una o dos frases: qué hace y cuándo usarlo. */
  description: string;
  /** Identificador SPDX de la licencia, p. ej. "MIT" o "Apache-2.0". */
  license: string;
  /** Autoría o URL de origen de la pieza (para la atribución). */
  source: string;
  /** El componente de React que se muestra en la galería. */
  component: ComponentType;
};

// Una entrada por pieza. Ver README.md y COMPONENTES.md.
export const registry: GalleryItem[] = [
  {
    id: "boton-brillante",
    name: "Botón brillante",
    category: "botones",
    description: "Botón con un brillo que lo cruza al pasar el cursor y que se hunde al presionarlo.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: BotonBrillante,
  },
  {
    id: "boton-borde-animado",
    name: "Botón de borde animado",
    category: "botones",
    description: "Botón oscuro con un borde de colores que gira sin parar. Úsalo para la acción más importante de la página.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: BotonBordeAnimado,
  },
  {
    id: "tarjeta-flip",
    name: "Tarjeta que gira",
    category: "tarjetas",
    description: "Tarjeta que se da la vuelta al pasar el cursor o al tocarla y muestra más detalle en el reverso.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TarjetaFlip,
  },
  {
    id: "tarjeta-inclinada",
    name: "Tarjeta inclinada",
    category: "tarjetas",
    description: "Tarjeta que se inclina en 3D hacia donde está el cursor. Sirve para destacar un plan o un producto.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TarjetaInclinada,
  },
  {
    id: "tarjeta-spotlight",
    name: "Tarjeta con luz",
    category: "tarjetas",
    description: "Tarjeta oscura con una luz suave que sigue al cursor. Queda bien en listas de servicios o ventajas.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TarjetaSpotlight,
  },
  {
    id: "acordeon-faq",
    name: "Preguntas frecuentes",
    category: "tarjetas",
    description: "Lista de preguntas que se abren y cierran al hacer clic. Al abrir una se cierra la anterior.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: AcordeonFaq,
  },
  {
    id: "fondo-gradiente-animado",
    name: "Fondo de gradiente animado",
    category: "fondos",
    description: "Bloque con un degradado de colores que se mueve despacio. Pon tu título o tu sección dentro.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: FondoGradienteAnimado,
  },
  {
    id: "fondo-puntos",
    name: "Fondo de puntos",
    category: "fondos",
    description: "Fondo claro con una cuadrícula de puntos que se desvanece en los bordes y se desliza despacio.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: FondoPuntos,
  },
  {
    id: "fondo-aurora",
    name: "Fondo aurora",
    category: "fondos",
    description: "Fondo oscuro con manchas de color difusas en movimiento lento. Ideal para la primera sección del sitio.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: FondoAurora,
  },
  {
    id: "texto-degradado",
    name: "Texto degradado",
    category: "texto",
    description: "Título con un degradado de colores que se desplaza por las letras.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TextoDegradado,
  },
  {
    id: "texto-maquina",
    name: "Texto máquina de escribir",
    category: "texto",
    description: "Frase que se escribe letra por letra, se borra y cambia por la siguiente.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TextoMaquina,
  },
  {
    id: "texto-palabras-reveladas",
    name: "Palabras reveladas",
    category: "texto",
    description: "Título cuyas palabras entran una tras otra al cargar la página.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TextoPalabrasReveladas,
  },
  {
    id: "contador-animado",
    name: "Contador animado",
    category: "texto",
    description: "Cifras que suben desde cero hasta su valor cuando aparecen en pantalla. Para mostrar resultados.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: ContadorAnimado,
  },
  {
    id: "revelar-al-scroll",
    name: "Revelar al bajar",
    category: "scroll",
    description: "Envoltura que hace aparecer cualquier sección cuando el visitante baja hasta ella.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: RevelarAlScroll,
  },
  {
    id: "marquesina",
    name: "Marquesina",
    category: "scroll",
    description: "Fila de etiquetas que se desplaza sin parar y se detiene al pasar el cursor. Para logos o palabras clave.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: Marquesina,
  },
  {
    id: "boton-magnetico",
    name: "Botón magnético",
    category: "botones",
    description: "Botón que se deja atraer por el cursor cuando se acerca y vuelve a su lugar al alejarse.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: BotonMagnetico,
  },
  {
    id: "cursor-estela",
    name: "Estela de cursor",
    category: "cursores",
    description: "Una cola de puntos de colores sigue al cursor dentro de la sección. Pon tu contenido dentro.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: CursorEstela,
  },
  {
    id: "cursor-anillo",
    name: "Cursor de anillo",
    category: "cursores",
    description: "Cambia el cursor por un punto y un anillo que lo sigue; sobre los botones el anillo crece.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: CursorAnillo,
  },
  {
    id: "cursor-chispas",
    name: "Chispas al hacer clic",
    category: "cursores",
    description: "Cada clic o toque dentro de la sección lanza chispas de colores desde ese punto.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: CursorChispas,
  },
  {
    id: "fondo-linterna",
    name: "Fondo linterna",
    category: "fondos",
    description: "Fondo oscuro con una cuadrícula que se ilumina solo donde está el cursor, como una linterna.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: FondoLinterna,
  },
  {
    id: "fondo-estrellas",
    name: "Cielo estrellado",
    category: "fondos",
    description: "Fondo nocturno con estrellas que titilan y una estrella fugaz de vez en cuando.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: FondoEstrellas,
  },
  {
    id: "fondo-ondas",
    name: "Fondo de olas",
    category: "fondos",
    description: "Tres capas de olas que se mueven a distinta velocidad al pie de la sección.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: FondoOndas,
  },
  {
    id: "fondo-cuadricula-retro",
    name: "Cuadrícula retro",
    category: "fondos",
    description: "Estilo de los 80: piso de neón en perspectiva que avanza hacia ti y un sol a rayas.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: FondoCuadriculaRetro,
  },
  {
    id: "texto-revuelto",
    name: "Texto descifrado",
    category: "texto",
    description: "Las letras aparecen revueltas y se van ordenando, como un código que se descifra. Se repite al pasar el cursor.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TextoRevuelto,
  },
  {
    id: "texto-ola",
    name: "Texto en ola",
    category: "texto",
    description: "Las letras saltan una tras otra como una ola al cargar y al pasar el cursor.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TextoOla,
  },
  {
    id: "tarjetas-abanico",
    name: "Tarjetas en abanico",
    category: "tarjetas",
    description: "Tres tarjetas apiladas que se abren en abanico al pasar el cursor. Para mostrar pasos o servicios.",
    license: "MIT",
    source: "Autoría propia (Ratio)",
    component: TarjetasAbanico,
  },
];
