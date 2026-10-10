import type { ComponentType } from "react";

export type GalleryItem = {
  /** Identificador único en minúsculas con guiones, p. ej. "boton-brillante". */
  id: string;
  /** Nombre visible para el alumno. */
  name: string;
  /** Categoría, p. ej. "botones", "tarjetas", "fondos". */
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

// Alannis agrega aquí una entrada por componente. Ver GALERIA_CONTRATO.md.
export const registry: GalleryItem[] = [];
