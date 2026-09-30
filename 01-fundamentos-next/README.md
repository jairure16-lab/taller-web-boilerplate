# Paso 1 — Fundamentos de Next.js

## Correr el proyecto

Desde la raíz del repo:

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). Cada cambio que guardes
se refleja solo, sin recargar la página a mano.

## Qué es una página

En este proyecto, cada archivo `page.tsx` dentro de `src/app/` es una página.
La página de inicio vive en [`../src/app/page.tsx`](../src/app/page.tsx).

## Qué es un componente

Un componente es una función que devuelve HTML (en realidad JSX, HTML con
superpoderes de JavaScript). `Home()` en `page.tsx` es un componente. Podés
crear el tuyo:

```tsx
function Saludo({ nombre }: { nombre: string }) {
  return <p>Hola, {nombre}</p>;
}
```

y usarlo dentro de otro componente como `<Saludo nombre="Jair" />`.

## Ejercicio en vivo

Agregá un componente `Tarjeta` que reciba un título y una descripción, y
mostralo dos veces en la página de inicio con datos distintos.

## Siguiente paso

Continuá en [`../02-estilos-tailwind/README.md`](../02-estilos-tailwind/README.md).
