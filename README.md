# Taller Web + IA

Plantilla para un taller práctico: construir un sitio web real en vivo,
usando Next.js, Tailwind y un agente de IA (GitHub Copilot en modo Agent)
como copiloto. Nada de teoría abstracta: cada paso se hace corriendo
comandos y viendo el resultado en el navegador.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) para estilos
- Sin dependencias de pago, sin API keys

## Instalación

Requiere [Node.js](https://nodejs.org) 20.9 o más reciente (Next.js 16 no
corre en Node 18). `npm install` descarga unos 300 MB, así que hazlo con
buen wifi y antes del día del taller.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000): vas a ver el índice de
pasos del taller.

La lista completa de preparación (Windows y Mac) está en
[`PREWORK.md`](PREWORK.md).

## Estructura del repo

```
00-antes-de-empezar/   → qué es un README, un .md, una skill, qué instalar
01-fundamentos-next/   → páginas y componentes (PREWORK)
02-estilos-tailwind/   → cómo cambiar el diseño (PREWORK)
03-ia-en-el-flujo/     → el loop de un agente IA y cómo pedirle tareas (EN VIVO)
src/app/               → el código real del sitio, se construye en el taller
```

Cada carpeta numerada tiene su propio `README.md`. Léelo antes de tocar el
código de ese paso: ahí está la explicación del concepto, no solo el "qué
hacer".

## Cómo seguir el taller

1. Antes del taller (prework): lee `00-antes-de-empezar/README.md` y haz los
   ejercicios de los pasos 01 y 02 en tu casa. Sigue [`PREWORK.md`](PREWORK.md).
2. El día del taller: el Paso 03 se hace en vivo, con el agente de Copilot.
3. La página de inicio (`src/app/page.tsx`) es el punto de partida: un
   índice de los pasos. Se reemplaza con tu sitio real durante la
   construcción.

## Agenda del día del taller (1 h 45 min)

| Minutos | Bloque | Qué pasa |
|---|---|---|
| 0-10 | Llegada y verificación | Alannis pasa por las mesas; autoevaluación inicial |
| 10-25 | Demostración | Jair muestra en vivo cómo dirigir al agente |
| 25-40 | Entrevista + referencia | El agente te entrevista; adjuntas tu imagen de referencia |
| 40-85 | Construcción individual | Alto de 2 min a los 60; componentes de la galería desde el min 65 |
| 85-95 | Muro de sitios | Cada quien enseña lo suyo y sube captura (con permiso) |
| 95-105 | Cierre | Autoevaluación final, encuesta y captura de `sunday-agents-control` |

El detalle por bloque (quién hace qué) está en [`AGENDA.md`](AGENDA.md).
Los pasos 00, 01 y 02 se hacen **antes** del taller y no ocupan tiempo en
sala.

## Otros documentos

- [`PREWORK.md`](PREWORK.md): checklist de preparación.
- [`RUBRICA.md`](RUBRICA.md): qué cuenta como éxito (que corra en localhost,
  aunque quede incompleto).
- [`PLAN_B.md`](PLAN_B.md): qué hacer sin wifi, sin cuenta o sin cuota.
- [`SOLUCION_DE_PROBLEMAS.md`](SOLUCION_DE_PROBLEMAS.md): errores comunes.
- [`GALERIA_CONTRATO.md`](GALERIA_CONTRATO.md): formato de la galería de
  componentes.
