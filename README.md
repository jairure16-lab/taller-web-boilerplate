# Taller: pensar como quien dirige una IA

Aquí construyes tu propio sitio web dirigiendo a una inteligencia artificial (GitHub Copilot). **No necesitas saber programar.** Al final tienes un sitio corriendo en tu laptop.

## Cómo correrlo

Necesitas [Node.js](https://nodejs.org) 20.9 o más reciente. Abre esta carpeta en VS Code, abre la terminal (en Windows usa "Símbolo del sistema", `cmd`) y escribe:

```bash
npm install
npm run dev
```

`npm install` baja las piezas del proyecto (unos 300 MB, una sola vez, mejor con buen wifi). `npm run dev` prende tu sitio. Ábrelo en [http://localhost:3000](http://localhost:3000). Para apagarlo, `Ctrl + C`.

La lista completa de preparación está en [`PREWORK.md`](PREWORK.md).

## Qué ves en la columna izquierda

```
00-antes-de-empezar/   → glosario: qué significa cada palabra, sin tecnicismos
01-fundamentos-next/   → ejercicio opcional: páginas y componentes
02-estilos-tailwind/   → ejercicio opcional: cómo cambiar el diseño
03-ia-en-el-flujo/     → el texto que pegas en Copilot y cómo usar sus botones (EN VIVO)
src/                   → tu sitio. Cada sección que construye la IA aparece como un archivo en src/components/
PREWORK.md             → qué dejar listo antes del taller
RUBRICA.md             → qué cuenta como éxito
SOLUCION_DE_PROBLEMAS.md → errores comunes
```

## El taller en 5 pasos

1. **Plan:** la IA te hace preguntas, una a la vez, y acuerdan qué construir.
2. **Construcción:** crea tu sitio una sección a la vez y te explica cada archivo.
3. **Mejora visual:** compara tu sitio con tu imagen de referencia y lo corrige.
4. **Galería:** eliges piezas animadas de `localhost:3000/galeria` y la IA las agrega.
5. **Cierre:** resumen de lo que se construyó y qué falta para publicarlo.

Los pasos 00, 01 y 02 se pueden hacer **antes** del taller y no ocupan tiempo en sala. El paso 03 es en vivo.

## Qué cuenta como éxito

Que tu sitio **corra en `localhost:3000`**, tenga 2 o más secciones, se parezca a tu referencia y puedas explicar qué archivo tocó la IA y por qué. Detalle en [`RUBRICA.md`](RUBRICA.md). No hace falta que esté terminado.

## Si algo no funciona

Mira [`SOLUCION_DE_PROBLEMAS.md`](SOLUCION_DE_PROBLEMAS.md). Si no se resuelve, escríbenos con una captura del error: Jair y Alannis te ayudan.
