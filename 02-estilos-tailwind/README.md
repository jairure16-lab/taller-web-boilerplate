# Paso 2 — Estilos con Tailwind

## Qué es Tailwind

En vez de escribir CSS en un archivo separado, le agregás clases directamente
al elemento HTML y cada clase hace una cosa puntual:

```tsx
<p className="text-xl font-bold text-blue-600">Texto grande, negrita, azul</p>
```

- `text-xl` → tamaño de letra
- `font-bold` → negrita
- `text-blue-600` → color de texto

## Dónde ver todas las clases disponibles

[tailwindcss.com/docs](https://tailwindcss.com/docs) — no hay que memorizarlas,
se buscan cuando se necesitan.

## Ejercicio en vivo

Tomá el componente `Tarjeta` del paso anterior y agregale: un borde
(`border`), esquinas redondeadas (`rounded-lg`), espaciado interno (`p-4`), y
una sombra (`shadow-md`).

## Siguiente paso

Continuá en [`../03-ia-en-el-flujo/README.md`](../03-ia-en-el-flujo/README.md).
