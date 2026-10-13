# Paso 3: dirigir a la IA (en vivo, el día del taller)

Este paso se hace durante el taller, con Jair y Alannis en sala.

## La idea en una frase

Una IA que trabaja (un **agente**) no solo te contesta: lee tu pedido, escribe en tus archivos, revisa si funcionó y, si falló, vuelve a intentar. Tú no escribes el código. **Tú decides si sirve.**

Tu ciclo es siempre el mismo: **pides, lees lo que hizo, aceptas o corriges.**

## Las 5 fases del taller

1. **Plan:** la IA te hace preguntas, una a la vez, y juntos acuerdan qué construir. No escribe código hasta que tú digas que sí.
2. **Construcción:** crea tu sitio, una sección a la vez, y te explica qué archivo hizo y para qué sirve.
3. **Mejora visual:** mira tu sitio, lo compara con tu imagen de referencia y corrige las diferencias.
4. **Galería:** eliges piezas animadas de `localhost:3000/galeria` y la IA las agrega.
5. **Cierre:** te resume qué archivos creó y qué falta para publicar tu sitio.

## Cómo empezar

1. Abre el chat de Copilot en VS Code.
2. Cambia el modo a **Agent** y, en el modo del agente, elige **Plan** (abajo te explico qué es cada botón).
3. Abre [`prompt-inicial.md`](prompt-inicial.md), selecciona todo (Ctrl+A en Windows, Cmd+A en Mac), copia (Ctrl+C / Cmd+C) y pégalo en el chat. No hay que editar nada.
4. Adjunta tu imagen de referencia y envía.
5. Responde las preguntas. Cuando apruebes el plan, cambia el modo del agente a **Interactive** para que construya.

## Los botones del chat de Copilot

Están debajo del cuadro donde escribes.

| Botón | Qué hace | Cuándo usarlo |
|---|---|---|
| **Agent** | La IA escribe en tus archivos y corre órdenes. En **Ask** solo te responde con texto. | Siempre **Agent** en el taller. |
| Modo del agente: **Interactive** | Trabaja contigo paso a paso. | Para construir (fases 2 a 4). |
| Modo del agente: **Plan** | Primero arma un plan y solo ejecuta cuando tú se lo dices. | Para empezar (fase 1). |
| Modo del agente: **Autopilot** | Trabaja solo, sin consultarte, dentro de sus permisos. | **No lo uses hoy.** Pierdes el control, y dirigir es justo lo que vienes a practicar. |
| **Manual permissions** | La IA te pregunta antes de hacer algo para lo que no tiene permiso, por ejemplo correr una orden en la terminal. | Déjalo así. Lee lo que pide y aprueba si tiene sentido. |
| **Assisted permissions** (experimental) | Evalúa el riesgo antes de usar una herramienta. | No hace falta hoy. |
| **Allow all** | Corre todo sin preguntar. | **No lo uses hoy.** |
| **Auto** (modelo) | La IA elige el modelo por ti. | Déjalo en Auto. |
| **+** | Adjunta archivos o imágenes. | Para subir tu imagen de referencia. |
| Cuadrado de **parar** (mientras trabaja) | Detiene a la IA. | Si va por mal camino. |

## Cómo ver qué construyó la IA

- Debajo de cada respuesta aparece algo como **"3 Files +572 -55"**: es la lista de archivos que cambió. Haz clic para verlos.
- En la columna izquierda de VS Code, abre `src/components/`. **Cada sección de tu sitio es un archivo.**
- **Restore Checkpoint** (arriba de cada mensaje tuyo) regresa tu proyecto al punto en que estaba antes de ese mensaje. Úsalo si algo salió mal y quieres volver atrás.
- La pestaña del navegador dentro de VS Code dice **"Sharing with Agent"**: significa que la IA puede ver tu sitio. Por eso puede compararlo con tu referencia.

## Si vas atrasado o algo no funciona

Usa [`prompt-minimo.md`](prompt-minimo.md): una sola petición que construye 2 secciones con valores por defecto.

Si la IA compila con error y no se corrige sola después de 2 o 3 intentos, levanta la mano y llama a Alannis o a Jair. No sigas insistiendo con el mismo mensaje. Errores comunes en [`../SOLUCION_DE_PROBLEMAS.md`](../SOLUCION_DE_PROBLEMAS.md).

## Qué es una skill, en la práctica

Una skill es una instrucción larga guardada con un nombre, para no escribirla de cero cada vez. El texto de `prompt-inicial.md` que acabas de usar es, en el fondo, una skill escrita a mano.

## Cómo se evalúa el resultado

El éxito es que tu sitio corra en `localhost:3000`, aunque quede incompleto. Mira [`../RUBRICA.md`](../RUBRICA.md).

## Palabras que no conoces

Mira el [glosario](../00-antes-de-empezar/GLOSARIO.md).

Vuelve al [README principal](../README.md).
