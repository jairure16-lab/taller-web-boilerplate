# Prompt inicial — pegalo en el chat de Copilot (modo agente)

Copiá este bloque completo en el chat, agregá tu imagen de referencia de
Pinterest, y enviá.

```
Quiero construir mi sitio a partir de este repo. Antes de tocar código,
hacéme preguntas UNA POR VEZ hasta tener claro:
1. Para quién es el sitio y qué problema resuelve.
2. Qué secciones necesita (máximo 4, esto es un taller de 90 minutos).
3. Qué tono/estilo visual busco — te voy a adjuntar una imagen de
   referencia de Pinterest, analizála y decime qué colores, tipografía y
   estructura ves antes de seguir.

No instales dependencias nuevas — usá solo lo que ya está en el proyecto
(Next.js + Tailwind). Nada de librerías de UI, iconos o animación nuevas,
aunque te parezcan una buena idea para el diseño.

Cuando ya tengas suficiente, decime "con esto ya puedo arrancar". Antes de
arrancar, y antes de cada paso grande durante la construcción, preguntame
primero: "¿qué archivo creés que tengo que tocar para esto?" — esperá mi
respuesta, decime si acerté o no, y recién ahí ejecutá. Después explicame en
una línea qué hiciste (qué archivo tocaste, qué comando corriste, si algo
falló y cómo lo corregiste) — quiero ver el loop completo, no solo el
resultado final.
```

## Qué vas a ver pasar

El agente va a repetir este ciclo en voz alta, no en silencio:

```
LEE tu respuesta → PLANEA qué archivo tocar → EJECUTA el cambio →
REVISA si compila → si falló, lo CORRIGE y vuelve a revisar → sigue con lo
siguiente
```

Ese es el mismo loop que se explicó arriba en este README — ahora lo estás
viendo correr en tu propio proyecto.

## Si el agente se traba

Si compila con error y no se corrige solo después de 2-3 intentos, avisale
a Alannis o a Jair — no sigas insistiendo con el mismo prompt.
