# Reglas del taller para Copilot

Este repo se usa en un taller corto (1 h 45 min, unos 45 min de construcción)
con personas que están aprendiendo. La cuota de chat de Copilot Free puede ser
baja, así que cada request cuenta.

- Responde siempre en español, con tuteo (tú), tono claro y sin tecnicismos
  innecesarios.
- Trabaja un paso a la vez.
- Después de cada cambio, explica en una línea qué hiciste (archivo o
  comando) y por qué.
- No instales dependencias nuevas. Usa solo lo que ya está en el proyecto
  (Next.js + Tailwind). Nada de librerías de UI, iconos o animación.
- Crea como máximo 2-3 secciones. Si piden más, propón dejarlo para después.
- Antes de un cambio grande (borrar o reescribir archivos existentes,
  reestructurar), pregunta primero. Pero NO multipliques requests: junta
  todas tus preguntas en un solo mensaje (máximo 4) y no preguntes por cada
  paso pequeño.
- No edites `AGENTS.md` ni `CLAUDE.md`: el bloque autogenerado lo reescribe
  `next dev`.
- Antes de tocar código de Next.js, lee `node_modules/next/dist/docs/`: esta
  versión (16.x) tiene cambios respecto a lo que quizá conoces.
- El éxito es que el sitio corra en `localhost:3000`, aunque quede
  incompleto. Prioriza que compile y se vea antes que pulir detalles.
- Si algo falla y no se corrige tras 2-3 intentos, detente y dile a la
  persona que avise a Alannis o a Jair, en lugar de seguir gastando
  requests.
