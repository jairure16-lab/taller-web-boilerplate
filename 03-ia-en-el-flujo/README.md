# Paso 3 — IA en el flujo de trabajo (EN VIVO)

Este es el paso que se hace durante el taller, con Jair y Alannis en sala.

## El loop de un agente

Cuando le pides algo a un asistente de IA con acceso a herramientas (como
GitHub Copilot en modo Agent), no te devuelve la respuesta de una sola vez.
Repite este ciclo:

```
1. LEE el contexto   → tu instrucción, los archivos del proyecto
2. PLANEA             → decide qué archivo tocar, qué comando correr
3. EJECUTA            → escribe código, corre un comando
4. REVISA el resultado → ¿el comando falló? ¿el código compila?
5. REPITE             → si algo falló, vuelve al paso 2 con lo que aprendió
```

Esto es el "loop del agente". Es la diferencia entre pedirle a un chatbot
texto ("escríbeme un componente") y pedirle a un agente que trabaje
("agrega un componente Tarjeta y prueba que compile"): el agente cierra el
loop solo, tú solo revisas el resultado final.

## Construye el tuyo

1. Abre el panel de chat de Copilot en VS Code y cambia el modo de "Ask" a
   **"Agent"** (el selector está arriba del cuadro de texto del chat). Sin
   este cambio, Copilot solo responde texto: no toca archivos ni corre
   comandos.
2. El prompt está en un archivo: [`prompt-inicial.md`](prompt-inicial.md).
   Ábrelo, selecciona todo (Ctrl+A en Windows, Cmd+A en Mac), copia
   (Ctrl+C / Cmd+C) y pégalo completo en el chat. No hay que editar nada.
3. Adjunta tu imagen de referencia con el botón de clip o arrastrándola al
   chat, y envía. El agente te hace sus preguntas en un solo mensaje,
   analiza la imagen y construye tu sitio explicando cada paso del loop.

Las reglas del taller para Copilot viven en
[`../.github/copilot-instructions.md`](../.github/copilot-instructions.md);
Copilot las lee solo, no tienes que pegarlas.

## Si vas atrasado o se acabó tu cuota

Usa [`prompt-minimo.md`](prompt-minimo.md): una sola petición que construye
2 secciones con valores por defecto. Más opciones en
[`../PLAN_B.md`](../PLAN_B.md).

## Si el agente se traba

Si el agente compila con error y no se corrige solo después de 2-3 intentos,
avisa a Alannis o a Jair. No sigas insistiendo con el mismo prompt: cada
intento gasta cuota. Errores comunes en
[`../SOLUCION_DE_PROBLEMAS.md`](../SOLUCION_DE_PROBLEMAS.md).

## Qué es una skill, en la práctica

Una skill es un prompt guardado y reutilizable. En vez de escribir las mismas
instrucciones largas cada vez ("cuando te pida X, siempre haz Y, Z"), se
guarda una vez y se invoca por nombre. El prompt de `prompt-inicial.md` que
acabas de usar es, en el fondo, eso: una skill escrita a mano.

## Cómo se evalúa el resultado

El éxito es que tu sitio corra en localhost, aunque quede incompleto. Mira
[`../RUBRICA.md`](../RUBRICA.md).

## Ya completaste el recorrido

Vuelve al [README principal](../README.md) para ver qué seguir construyendo.
