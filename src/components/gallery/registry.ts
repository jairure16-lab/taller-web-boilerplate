import type { ComponentType } from "react";
import BotonBrillante from "./boton-brillante";

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
];
