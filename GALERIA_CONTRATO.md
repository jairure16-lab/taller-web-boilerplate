# Contrato de la galería de componentes

Este documento define el formato que debe seguir la galería de componentes que prepara Alannis en `ratiosystems/ratio-ui-kit`, para que se pueda copiar a este repo sin ajustes. El punto de integración ya existe: la página `/galeria` (`src/app/galeria/page.tsx`) lee `src/components/gallery/registry.ts` y lista lo que haya ahí. Mientras el registry esté vacío, muestra un mensaje de "llega aquí".

## Estructura

```
src/components/gallery/
  registry.ts          <- lista de piezas (nombre, categoría, descripción, licencia, fuente)
  boton-brillante.tsx  <- un archivo por componente
  tarjeta-flip.tsx
  ...
```

- Una carpeta: `src/components/gallery/`.
- **Un archivo por componente**, autocontenido, con `export default` del componente. Nombres de archivo en minúsculas con guiones.
- Cada archivo debe poder copiarse solo a otro proyecto: no importa de otros archivos de la galería.

## registry.ts

Ya existe con el tipo y un arreglo vacío. Alannis agrega una entrada por pieza:

```ts
import type { ComponentType } from "react";
import BotonBrillante from "./boton-brillante";

export type GalleryItem = {
  id: string;            // "boton-brillante" (único, igual al nombre del archivo)
  name: string;          // "Botón brillante"
  category: string;      // "botones" | "tarjetas" | "fondos" | ...
  description: string;   // qué hace y cuándo usarlo, 1-2 frases
  license: string;       // identificador SPDX: "MIT", "Apache-2.0", ...
  source: string;        // autoría o URL de origen, para la atribución
  component: ComponentType;
};

export const registry: GalleryItem[] = [
  {
    id: "boton-brillante",
    name: "Botón brillante",
    category: "botones",
    description: "Botón con brillo animado al pasar el cursor.",
    license: "MIT",
    source: "Autoría propia (Ratio) / https://ejemplo.org/origen",
    component: BotonBrillante,
  },
];
```

Todos los campos son obligatorios, incluidos `license` y `source`, aunque la pieza sea de autoría propia.

## Requisitos técnicos

- Compatible con **Next 16 + React 19 + Tailwind 4** (el proyecto usa App Router y `@import "tailwindcss"`).
- **Sin internet**: nada de CDNs, fuentes remotas, imágenes remotas ni scripts externos. Las imágenes, si hacen falta, son SVG en línea o archivos en `public/`.
- **Sin dependencias nuevas**: solo React, Next y Tailwind. Nada de framer-motion, lucide, etc. Las animaciones se hacen con clases de Tailwind y CSS.
- `"use client"` **solo cuando sea necesario** (estado, efectos, eventos del navegador). Si el componente solo usa CSS/Tailwind, se queda como server component.
- Tailwind 4: las animaciones propias (`@keyframes`) van dentro del mismo archivo (con `<style>` o clases arbitrarias) o se documentan en el registry; no se edita `globals.css`.
- Componentes sin props obligatorias: la galería los renderiza como `<Pieza />`.
- Que pasen `npm run build` y `npm run lint` sin errores ni advertencias nuevas.

## Licencias y origen

- Solo se acepta código con licencia que permita reutilizarlo (MIT, Apache-2.0, BSD, ISC, o autoría propia). Se conserva la atribución en `source` y, si la licencia lo exige, en un comentario al inicio del archivo.
- Nada de código tomado de repos de clientes ni de código sin licencia clara.
- Nada de piezas "inspiradas" copiadas literal de sitios con licencia restrictiva.

## Cómo lo usa el alumno

1. Abre `/galeria` en `localhost:3000` y elige una pieza.
2. Copia el archivo de `src/components/gallery/` a su proyecto (o lo deja donde está).
3. En su página pega el import, por ejemplo: `import BotonBrillante from "@/components/gallery/boton-brillante";` y lo usa como `<BotonBrillante />`.

## Checklist de aceptación

- [ ] El archivo está en `src/components/gallery/` y exporta el componente por defecto.
- [ ] Hay una entrada en `registry.ts` con `id`, `name`, `category`, `description`, `license` y `source` completos.
- [ ] La licencia permite reutilizar y la atribución está en el registry.
- [ ] No hay URLs externas (CDN, fuentes, imágenes) ni dependencias nuevas en `package.json`.
- [ ] `"use client"` solo aparece si hace falta.
- [ ] No hay código de repos de clientes.
- [ ] El componente se ve bien en `/galeria` sin internet.
- [ ] `npm run build` y `npm run lint` pasan.
- [ ] Se probó copiando solo el archivo a un proyecto limpio.
