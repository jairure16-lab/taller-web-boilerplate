# Paso 3 — IA en el flujo de trabajo

## El loop de un agente

Cuando le pedís algo a un asistente de IA con acceso a herramientas (como
Copilot en modo agente, o Claude Code), no te devuelve la respuesta de una
sola vez. Repite este ciclo:

```
1. LEE el contexto   → tu instrucción, los archivos del proyecto
2. PLANEA             → decide qué archivo tocar, qué comando correr
3. EJECUTA            → escribe código, corre un comando
4. REVISA el resultado → ¿el comando falló? ¿el código compila?
5. REPITE             → si algo falló, vuelve al paso 2 con lo que aprendió
```

Esto es el "loop del agente". Es la diferencia entre pedirle a un chatbot
texto ("escribime un componente") y pedirle a un agente que trabaje
("agregá un componente Tarjeta y probá que compile") — el agente cierra el
loop solo, vos solo revisás el resultado final.

## Construí el tuyo

Abrí el panel de chat de Copilot en VS Code y cambiá el modo de "Ask" a
**"Agent"** (el selector está arriba del cuadro de texto del chat). Sin
este cambio, Copilot solo responde texto — no toca archivos ni corre
comandos.

Pegá el prompt de [`prompt-inicial.md`](prompt-inicial.md) en el chat (sin
las comillas de código ```, solo el texto de adentro), adjuntá tu imagen
de referencia con el botón de clip o arrastrándola al chat, y enviá. El
agente te entrevista, analiza la imagen, y construye tu sitio mientras
explica cada paso del loop.

## Qué es una skill, en la práctica

Una skill es un prompt guardado y reutilizable. En vez de escribir las mismas
instrucciones largas cada vez ("cuando te pida X, siempre hacé Y, Z"), se
guarda una vez y se invoca por nombre. El prompt de `prompt-inicial.md` que
acabás de usar es, en el fondo, eso: una skill escrita a mano.

## Ya completaste el recorrido

Volvé al [README principal](../README.md) para ver qué seguir construyendo.
