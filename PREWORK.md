# Prework: lo que debes dejar listo antes del taller

**Taller:** Construye tu sitio web con IA
**Fecha:** jueves 15 de octubre de 2026
**Hora y lugar:** [a completar]
**Duración:** 1 h 45 min · **Costo:** gratis · **Cupos:** 5

Si haces esta lista antes del jueves, en sala vas a dedicar casi todo el tiempo a construir tu sitio. Si algo no te sale, no te preocupes: escríbele a Jair o a Alannis con la captura del error y te ayudamos. Si el problema persiste, el [plan B](PLAN_B.md) cubre el taller igual.

Tiempo estimado: 45 a 60 minutos, casi todo es esperar descargas.

> **Aviso de peso:** `npm install` descarga unos **300 MB**. Hazlo con buena conexión (en tu casa, no con datos del celular).

---

## Checklist

Marca cada punto cuando lo termines.

- [ ] 1. Node.js 20.9 o más reciente
- [ ] 2. VS Code actualizado, con Copilot y modo Agent
- [ ] 3. Cuenta de GitHub con Copilot Free activado y uso del mes revisado
- [ ] 4. Repo clonado
- [ ] 5. `npm install` y `npm run dev` funcionando en localhost:3000
- [ ] 6. Ejercicio de fundamentos (pasos 01 y 02) hecho
- [ ] 7. Imagen de referencia guardada (obligatoria)
- [ ] 8. Captura de pantalla de todo lista para enseñarla al llegar al taller

---

## 1. Node.js 20.9 o más reciente

1. Abre una terminal:
   - **Windows:** menú Inicio, escribe `cmd` y abre "Símbolo del sistema" (mejor que PowerShell para este taller).
   - **Mac:** abre la app "Terminal".
2. Escribe:
   ```bash
   node -v
   ```
3. Debe salir `v20.9.0` o un número mayor (por ejemplo `v22.x`). Si sale `v18` o menor, o dice que no reconoce el comando, descarga la versión **LTS** desde [nodejs.org](https://nodejs.org), instálala y **cierra y vuelve a abrir la terminal**. Verifica otra vez con `node -v`.

## 2. VS Code, Copilot y modo Agent

1. Descarga o actualiza VS Code desde [code.visualstudio.com](https://code.visualstudio.com). Usa una versión reciente (el modo Agent no existe en versiones viejas).
   - Actualizar: Windows `Ayuda > Buscar actualizaciones`; Mac `Code > Buscar actualizaciones`.
2. Copilot Chat viene integrado en las versiones recientes de VS Code. Si no ves el icono de Copilot en la barra superior, instala la extensión **GitHub Copilot** desde el panel de extensiones.
3. Abre el panel de chat de Copilot (icono de Copilot en la barra superior). En la parte de abajo del chat hay un selector de modo: cámbialo a **Agent**. Si solo ves "Ask" o "Edit", revisa [SOLUCION_DE_PROBLEMAS.md](SOLUCION_DE_PROBLEMAS.md#copilot-no-muestra-el-modo-agent).

## 3. Cuenta de GitHub con Copilot Free

1. Crea una cuenta en [github.com](https://github.com) si no tienes (es gratis).
2. Activa Copilot Free. Información oficial: [github.com/features/copilot](https://github.com/features/copilot). Desde ahí, o desde el menú de Copilot en VS Code, elige la opción para empezar con el plan gratuito. [verificar: el nombre exacto del botón puede cambiar]
3. En VS Code inicia sesión con tu cuenta de GitHub (te lo pide al abrir Copilot por primera vez, o desde el icono de cuentas, abajo a la izquierda).
4. **Revisa tu uso del mes:** en VS Code, haz clic en el icono de Copilot de la barra inferior derecha (o en el menú de Copilot de la barra superior). Ahí aparece lo que llevas usado del mes y cuándo se reinicia. [verificar: la ubicación exacta depende de tu versión de VS Code]
5. Si ya gastaste casi todo tu cupo del mes, avísanos **antes** del jueves. No uses Copilot en otras cosas hasta el taller.

> Copilot Free tiene un cupo mensual limitado. Por eso en el taller pedimos pocas cosas y bien explicadas. No hagas pruebas largas con el agente antes del jueves.

## 4. Clonar el repo

El repo del taller es: **github.com/jairure16-lab/taller-web-boilerplate**

En la terminal, ve a la carpeta donde guardas tus proyectos y ejecuta:

```bash
git clone https://github.com/jairure16-lab/taller-web-boilerplate.git
cd taller-web-boilerplate
```

- Si `git` no existe: en Windows, instala [Git for Windows](https://git-scm.com/download/win); en Mac, escribe `git --version` y acepta instalar las herramientas de desarrollo cuando te lo pida.
- **Windows:** clona en una ruta corta y que **no** esté dentro de OneDrive, por ejemplo `C:\proyectos`. Las rutas largas y OneDrive dan problemas (ver [solución de problemas](SOLUCION_DE_PROBLEMAS.md#rutas-largas-y-onedrive)).
- Abre la carpeta en VS Code: `code .` (o `Archivo > Abrir carpeta`).

## 5. Instalar y correr

Dentro de la carpeta del repo, en la terminal:

```bash
npm install
npm run dev
```

- `npm install` tarda unos minutos y descarga ~300 MB. Espera a que termine.
- `npm run dev` deja el sitio corriendo. Abre [http://localhost:3000](http://localhost:3000) en el navegador: debes ver el índice de pasos del taller.
- Para detenerlo: `Ctrl + C` en la terminal.
- Si ves errores, revisa [SOLUCION_DE_PROBLEMAS.md](SOLUCION_DE_PROBLEMAS.md).

## 6. Ejercicio de fundamentos (pasos 01 y 02)

Estos dos pasos son **prework**, no se hacen en sala:

1. Lee y haz el ejercicio de [`01-fundamentos-next/README.md`](01-fundamentos-next/README.md).
2. Lee y haz el ejercicio de [`02-estilos-tailwind/README.md`](02-estilos-tailwind/README.md).

**Criterio de "listo":** en `localhost:3000` se ven **dos tarjetas** (`Tarjeta`) con datos distintos, debajo del índice de pasos, y cada una tiene borde, esquinas redondeadas, espaciado interno y sombra. El índice original sigue ahí.

Si no te sale a la primera, no pasa nada: manda la captura de lo que tienes y lo vemos.

## 7. Imagen de referencia (obligatoria)

El agente te va a pedir una imagen del estilo visual que quieres para tu sitio.

1. Busca en Pinterest, Behance, Dribbble o donde prefieras un diseño de sitio web que te guste (colores, tipografía, ambiente).
2. Guárdala como imagen (`.png` o `.jpg`) en un lugar fácil de encontrar, por ejemplo el Escritorio.
3. Piensa en una frase: ¿de qué trata tu sitio? (ejemplo: "portafolio de fotografía", "mi emprendimiento de repostería").

Sin imagen no podemos arrancar la construcción: es el único punto que no se puede resolver en sala sin perder tiempo.

## 8. Deja lista la captura

Toma **una captura de pantalla** que muestre a la vez:

- La terminal con `node -v` (versión visible).
- El navegador en `localhost:3000` con tus dos tarjetas.
- El panel de Copilot en modo **Agent**.
- La imagen de referencia (puede ser en otra captura).

No tienes que enviarla antes. Guárdala en tu laptop o en tu celular y enséñasela a Alannis cuando pase por tu mesa al llegar el jueves; así verifica en 1 minuto que todo está listo.

---

## Si no pudiste completar algo

Escríbenos con la captura del error. Aunque llegues al taller con parte pendiente, hay un [plan B](PLAN_B.md), solo que te quedará menos tiempo para construir.

Al llegar al taller, trae tu **laptop con cargador**.

Documentos relacionados: [Agenda](AGENDA.md) · [Rúbrica](RUBRICA.md) · [Solución de problemas](SOLUCION_DE_PROBLEMAS.md)
