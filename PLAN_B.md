# Plan B

Qué hacemos si algo falla el día del taller. Prioridad: que cada alumno termine con **algo corriendo en localhost** (ver [RUBRICA.md](RUBRICA.md)).

Alannis lleva este plan por las mesas; Jair sigue con el bloque que toque.

## Material que Alannis lleva

- 2 memorias USB con el repo ya instalado: **una para Windows y una para Mac**.
- Hotspot del celular con datos suficientes.
- Una copia del [prompt mínimo](03-ia-en-el-flujo/prompt-minimo.md) en el celular o impresa.
- El sitio de ejemplo terminado, para comparar.

## 1. No hay wifi, o es muy lenta

1. Activa el **hotspot** del celular de Alannis o de Jair. Quien ya tenga todo instalado no lo necesita para correr el sitio (`npm run dev` funciona sin internet), pero Copilot sí necesita conexión.
2. Si el repo de un alumno no está instalado, usa la **USB**.

**Importante sobre las USB:** la carpeta `node_modules` contiene binarios nativos (Next.js, SWC, Tailwind, etc.) que **no son portables entre Windows y Mac**. Por eso hay una USB por plataforma, instalada en esa plataforma. Una carpeta copiada de Windows a Mac (o al revés) puede fallar al arrancar.

Con la USB:

1. Copia la carpeta del repo a una ruta corta del disco (no corras el proyecto desde la USB: es lento).
2. Abre la carpeta en VS Code.
3. En la terminal: `npm run dev`.
4. Si da error de binarios o de arquitectura (por ejemplo un Mac con chip distinto al de la USB), borra `node_modules` y corre `npm install` de nuevo, con el hotspot.

## 2. Sin cuenta de GitHub o sin cuota de Copilot

Copilot Free tiene cupo mensual limitado. Si un alumno se queda sin cuota, o no logró activar la cuenta:

**Opción A: pareja.** Se sienta con un compañero que sí tenga cuota. Quien tiene la sesión escribe lo que dicta el otro. Ambos aprenden a dirigir.

**Opción B: el alumno dicta, el instructor ejecuta.** El alumno dice qué quiere ("pon un título grande y un botón azul"); Jair o Alannis lo escribe en el agente desde su cuenta. El alumno sigue decidiendo; el instructor solo teclea.

Para gastar menos requests, en cualquier caso:

- Usa el [prompt mínimo](03-ia-en-el-flujo/prompt-minimo.md), más corto que el inicial.
- Agrupa las instrucciones: una petición con varios detalles en vez de muchas pequeñas.

## 3. El modelo no puede ver imágenes

Copilot Free usa selección automática de modelo, y puede pasar que no lea bien la imagen de referencia. Si el agente dice que no puede ver la imagen, o describe algo que no se parece:

1. Describe la referencia **con texto**, en 4 líneas:
   - Colores principales (con nombre o código, por ejemplo "azul marino y crema").
   - Tipografía (con serifa o sin serifa, grande o delgada).
   - Ambiente (minimalista, cálido, oscuro, juguetón).
   - Estructura (portada grande con título, luego tres tarjetas).
2. Pega ese texto en el chat y sigue el flujo normal.

Una descripción en texto basta para el criterio 3 de la [rúbrica](RUBRICA.md).

## 4. Se detuvo `npm run dev` o hay un error raro

Revisa [SOLUCION_DE_PROBLEMAS.md](SOLUCION_DE_PROBLEMAS.md). Si tras 5 minutos no se resuelve, pasa a la opción de pareja y regresa al problema después.

## 5. Falla algo del proyector o del cierre

El cierre con `sunday-agents-control` es solo una **captura o grabación**; no se instala en vivo. Si no hay proyector, se comparte la captura por WhatsApp.

Documentos relacionados: [Agenda](AGENDA.md) · [Prework](PREWORK.md)
