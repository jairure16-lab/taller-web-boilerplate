# Taller Web + IA

Plantilla para un taller práctico: construir un sitio web real en vivo,
usando Next.js, Tailwind y un agente de IA (Claude Code) como copiloto.
Nada de teoría abstracta — cada paso se hace corriendo comandos y viendo el
resultado en el navegador.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) para estilos
- Sin dependencias de pago, sin API keys

## Instalación

Requiere [Node.js](https://nodejs.org) 20.9 o más reciente (Next.js 16 no
corre en Node 18).

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) — vas a ver el índice de
pasos del taller.

## Estructura del repo

```
00-antes-de-empezar/   → qué es un README, un .md, una skill, qué instalar
01-fundamentos-next/   → páginas y componentes
02-estilos-tailwind/   → cómo cambiar el diseño
03-ia-en-el-flujo/     → el loop de un agente IA y cómo pedirle tareas
src/app/               → el código real del sitio, se construye en vivo
```

Cada carpeta numerada tiene su propio `README.md`. Léelo antes de tocar el
código de ese paso — ahí está la explicación del concepto, no solo el "qué
hacer".

## Cómo seguir el taller

1. Abrí `00-antes-de-empezar/README.md` y seguí los links de "Siguiente
   paso" al final de cada archivo.
2. La página de inicio (`src/app/page.tsx`) es el punto de partida: un
   índice de los pasos. Se va reemplazando con el sitio real a medida que
   avanza el taller.
3. El Paso 3 es donde entra Copilot en serio — ahí se ve el loop del
   agente en acción, no solo explicado.

## Mapeo con el día del taller (90 min)

| Bloque del día | Qué pasa | Carpeta |
|---|---|---|
| Instalación (15 min) | `npm install`, abrir el repo | — |
| Fundamentos guiados (15 min) | Ejercicio en vivo a mano, con el instructor | `01-fundamentos-next/`, `02-estilos-tailwind/` |
| Entrevista + referencia visual (15 min) | Copilot pregunta, pide la imagen de Pinterest | `03-ia-en-el-flujo/` |
| Construcción individual (30 min) | Copilot construye, narrando el loop | `03-ia-en-el-flujo/` |
| Cierre (15 min) | Demo de `sunday-agents-control` | — |

`00-antes-de-empezar/` se da por leído antes del taller (requisito previo),
no ocupa bloque de tiempo en sala.
