# Paso 1 — Fundamentos de Next.js (PREWORK)

Este paso es un ejercicio **previo al taller**: hazlo en tu casa, no en vivo.

## Correr el proyecto

Desde la raíz del repo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Cada cambio que guardes
se refleja solo, sin recargar la página a mano.

## Qué es una página

En este proyecto, cada archivo `page.tsx` dentro de `src/app/` es una página.
La página de inicio vive en [`../src/app/page.tsx`](../src/app/page.tsx).

## Qué es un componente

Un componente es una función que devuelve HTML (en realidad JSX, HTML con
superpoderes de JavaScript). `Home()` en `page.tsx` es un componente. Puedes
crear el tuyo:

```tsx
function Saludo({ nombre }: { nombre: string }) {
  return <p>Hola, {nombre}</p>;
}
```

y usarlo dentro de otro componente como `<Saludo nombre="Jair" />`.

Importante: `Saludo` se declara **afuera** de `Home`, al mismo nivel (no
adentro de la función `Home`). Si lo declaras adentro, React se queja
("Cannot create components during render") porque lo recrea en cada
render. Es un error común al copiar este patrón por primera vez.

## Ejercicio (prework)

Agrega un componente `Tarjeta` (afuera de `Home`, igual que `Saludo` arriba)
que reciba un título y una descripción, y muéstralo dos veces en la página de
inicio con datos distintos.

No borres el índice de pasos que ya está en `page.tsx`: agrega las dos
`Tarjeta` debajo del `</ol>` que ya existe, como una sección nueva. El
índice se queda; esto es una sección aparte, no un reemplazo.

## Criterio de "listo"

Terminaste este paso cuando, con `npm run dev` corriendo, ves **2 Tarjeta**
en [http://localhost:3000](http://localhost:3000) con datos distintos y el
índice de pasos sigue ahí. (El borde y la sombra los agregas en el Paso 2.)

## Siguiente paso

Continúa en [`../02-estilos-tailwind/README.md`](../02-estilos-tailwind/README.md).
