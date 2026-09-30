# Paso 3 — IA en el flujo de trabajo

## El loop de un agente

Cuando le pedís algo a un asistente de IA con acceso a herramientas (como
Claude Code), no te devuelve la respuesta de una sola vez. Repite este ciclo:

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

## Demo en vivo

Con Claude Code abierto en este proyecto, probá pedir:

```
Agregá una sección de "Testimonios" a la página de inicio, con 3 tarjetas
usando el componente Tarjeta que ya existe. Corré el build al final para
confirmar que no rompiste nada.
```

Observá cómo el agente: lee `page.tsx`, escribe el código, corre
`npm run build`, y si falla, lo arregla sin que vuelvas a pedirlo.

## Qué es una skill, en la práctica

Una skill es un prompt guardado y reutilizable. En vez de escribir las mismas
instrucciones largas cada vez ("cuando te pida X, siempre hacé Y, Z"), las
guardás una vez y las invocás por nombre. Este mismo repo de Claude Code que
usa Jair tiene más de 250 skills — cada una es, en el fondo, un archivo
`.md` con instrucciones claras.

## Ejercicio en vivo

Escribí tu propio prompt para pedirle al agente que agregue una nueva sección
a la página. Fijate si el agente entiende sin ambigüedad — si tuvo que
adivinar algo, tu prompt necesitaba más detalle.

## Ya completaste el recorrido

Volvé al [README principal](../README.md) para ver qué seguir construyendo.
