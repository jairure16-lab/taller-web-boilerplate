# Solución de problemas

Los errores más comunes del taller. Si ninguno aplica, toma captura del mensaje completo y mándasela a Jair o Alannis.

- [El puerto 3000 está ocupado](#el-puerto-3000-esta-ocupado)
- [Node es muy viejo](#node-es-muy-viejo)
- [PowerShell bloquea npm](#powershell-bloquea-npm)
- [Copilot no muestra el modo Agent](#copilot-no-muestra-el-modo-agent)
- [Rutas largas y OneDrive](#rutas-largas-y-onedrive)

---

## El puerto 3000 esta ocupado

**Síntoma:** al correr `npm run dev` dice que el puerto 3000 está en uso, o abre en `localhost:3001`.

**Causa:** otro programa (o un `npm run dev` anterior que dejaste abierto) usa ese puerto.

**Solución:**

1. Lo más simple: usa la dirección que muestre la terminal (por ejemplo `localhost:3001`). Funciona igual.
2. O cierra el proceso anterior: busca la otra terminal con `npm run dev` y presiona `Ctrl + C`.
3. O libera el puerto:
   - **Windows (cmd):**
     ```
     netstat -ano | findstr :3000
     taskkill /PID <número de la última columna> /F
     ```
   - **Mac:**
     ```
     lsof -i :3000
     kill -9 <número PID>
     ```
4. O usa otro puerto: `npm run dev -- -p 3001`.

## Node es muy viejo

**Síntoma:** errores al correr `npm run dev` o `npm install`, o `node -v` muestra `v18` o menos.

**Causa:** este proyecto necesita Node **20.9 o más reciente**.

**Solución:**

1. Descarga la versión **LTS** desde [nodejs.org](https://nodejs.org) e instálala.
2. Cierra todas las terminales y la ventana de VS Code, y ábrelas de nuevo.
3. Verifica con `node -v`.
4. Si sigue saliendo la versión vieja, puede haber dos instalaciones. En Windows, desinstala la vieja desde "Aplicaciones instaladas". En Mac, si usabas `nvm`, ejecuta `nvm install 22` y `nvm use 22`.
5. Si cambiaste de versión después de instalar, borra `node_modules` y repite `npm install`.

## PowerShell bloquea npm

**Síntoma (Windows):** mensaje parecido a "la ejecución de scripts está deshabilitada en este sistema" al escribir `npm`.

**Solución, opción 1 (permitir scripts para tu usuario):**

1. Abre PowerShell.
2. Ejecuta:
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Acepta con `S` (o `Y`). Cierra y abre la terminal.

**Solución, opción 2 (sin cambiar permisos):** usa el **Símbolo del sistema (cmd)** en vez de PowerShell. En VS Code, en el panel de terminal, el menú desplegable junto al `+` permite elegir "Command Prompt".

## Copilot no muestra el modo Agent

**Síntoma:** en el chat de Copilot solo aparecen "Ask" o "Edit", sin "Agent".

**Revisa en este orden:**

1. **VS Code desactualizado.** Actualiza a la última versión y reinicia. Es la causa más común.
2. **Sin sesión.** Verifica que iniciaste sesión con tu cuenta de GitHub (icono de cuentas, abajo a la izquierda).
3. **Extensión desactualizada.** En el panel de extensiones, actualiza **GitHub Copilot** (y **GitHub Copilot Chat** si aparece por separado).
4. **Copilot Free sin activar.** Revisa [github.com/features/copilot](https://github.com/features/copilot) y confirma que tu cuenta tiene el plan gratuito.
5. **Configuración.** En los ajustes de VS Code, busca "agent" y confirma que el modo Agent no esté desactivado. [verificar: el nombre exacto del ajuste puede cambiar entre versiones]
6. Si tu organización o la universidad restringe Copilot, usa una cuenta personal de GitHub.

Si nada funciona, usa el [plan B](PLAN_B.md): pareja, o dictas y el instructor ejecuta.

## Rutas largas y OneDrive

**Síntoma (Windows):** errores al clonar o durante `npm install` como "path too long", archivos que no se pueden borrar, o la instalación se queda trabada.

**Causa:** `node_modules` crea carpetas muy anidadas, y OneDrive intenta sincronizar miles de archivos mientras se instalan.

**Solución:**

1. Clona el repo en una **ruta corta y fuera de OneDrive**, por ejemplo `C:\proyectos\taller-web-boilerplate`. Evita `Escritorio` y `Documentos` si OneDrive los sincroniza.
2. Si ya clonaste en OneDrive: borra la carpeta, clona de nuevo en la ruta corta y repite `npm install`.
3. Si persiste el error de ruta larga, activa las rutas largas de git:
   ```
   git config --global core.longpaths true
   ```
4. En Mac normalmente no aplica; igual evita carpetas sincronizadas con iCloud (Escritorio y Documentos, si lo tienes activado).

---

Documentos relacionados: [Prework](PREWORK.md) · [Plan B](PLAN_B.md)
