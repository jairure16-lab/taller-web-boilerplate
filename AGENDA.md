# Agenda: 1 h 45 min (105 min)

**Fecha:** jueves 15 de octubre de 2026 · **Hora y lugar:** 1:45 pm a 3:30 pm, ADEN University Panamá, Salón Nro 2 · **Alumnos:** 5

Reparto: **Jair** lleva el contenido y habla al frente; **Alannis** lleva el soporte técnico y se mueve por las mesas.

| Min | Bloque | Jair | Alannis | Punto de control |
|---|---|---|---|---|
| 0-10 | Llegada y verificación + pre-autoevaluación | Da la bienvenida, explica la meta del día y reparte el enlace de la encuesta | Pasa por cada mesa: `node -v`, `localhost:3000` funcionando, Copilot en modo Agent. Usa [PLAN_B.md](PLAN_B.md) si algo falla | Los 5 corren `localhost:3000` y respondieron la pre-autoevaluación (1-5) |
| 10-25 | Demo en vivo: cómo se dirige al agente | Proyecta su pantalla y dirige al agente en directo: pide una cosa pequeña, lee lo que hace, corrige. Muestra [`prompt-minimo.md`](03-ia-en-el-flujo/prompt-minimo.md) | Observa quién se pierde; anota dudas | Todos vieron: pedir, leer el cambio, aceptar o corregir |
| 25-40 | Entrevista del agente + imagen de referencia | Explica que el agente pregunta antes de construir y que las respuestas buenas ahorran requests | Ayuda a cada alumno a adjuntar su imagen (o a describirla con texto, ver plan B) | Cada alumno terminó la entrevista y el agente confirmó su plan (2-3 secciones) |
| 40-85 | Construcción individual | Camina por las mesas, resuelve dudas de dirección ("qué pedir, cómo pedirlo") | Resuelve problemas técnicos; empareja a quien se quedó sin cuota | **Min 60:** alto de 2 min, todos levantan la vista y se muestra el estado. **Min 65:** se abre [`/galeria`](GALERIA_CONTRATO.md) con componentes para incorporar |
| 85-95 | Muro de sitios | Modera: cada alumno enseña su sitio (1 min c/u) y dice qué archivo tocó el agente | Toma las capturas (solo con permiso) y las sube al muro | Los 5 sitios corren; capturas subidas |
| 95-105 | Post-autoevaluación, encuesta y cierre | Cierra con captura o grabación de `sunday-agents-control` (no se instala en vivo) | Reparte el enlace de la encuesta y vigila que la completen | Post-autoevaluación enviada con la **misma redacción** que la pre ([ENCUESTA.md](ENCUESTA.md)) |

## Qué se dice en cada bloque (guion corto)

- **0-10:** "Hoy no vienes a aprender a programar. Vienes a aprender a dirigir una IA que programa. Al final tienes un sitio corriendo en tu laptop."
- **10-25:** "Fíjate en tres cosas: qué pido, qué hace el agente y qué cambio acepto. Siempre le pregunto por qué lo hizo."
- **25-40:** "Responde la entrevista con calma. Una buena respuesta vale más que cinco correcciones después."
- **40-85:** "Un paso a la vez. Si algo no funciona, dímelo con una frase al agente. No hace falta terminar: lo importante es que corra."
- **85-95:** "Cuéntanos qué archivo cambió el agente y por qué."
- **95-105:** "Mide otra vez cuánta confianza tienes para dirigir una IA. Y cuéntanos cómo mejorar."

Referencias: [PREWORK.md](PREWORK.md) · [RUBRICA.md](RUBRICA.md) · [PLAN_B.md](PLAN_B.md) · [SOLUCION_DE_PROBLEMAS.md](SOLUCION_DE_PROBLEMAS.md) · [ENCUESTA.md](ENCUESTA.md)

---

## Nota de requests (Copilot Free)

La cuota de chat y agente de Copilot Free **no está confirmada oficialmente** (hay fuentes que hablan de unas 50 interacciones al mes). Diseña el taller para gastar pocos:

- Pide que cada alumno **no use Copilot** en nada ajeno al taller hasta el jueves, y que revise su uso del mes en el [prework](PREWORK.md).
- En la demo (10-25) muestra el patrón de **agrupar**: una petición con varios detalles, no diez pequeñas.
- La entrevista del agente debe hacerse en **una ronda** (las preguntas agrupadas), no pregunta por pregunta.
- Los componentes de la galería (min 65) se **copian y se piden en un solo mensaje**.
- Quien se quede sin cuota pasa a pareja o a "dicta y el instructor ejecuta" ([PLAN_B.md](PLAN_B.md)).

## Ajustes sugeridos

1. **No hay colchón.** Los bloques suman exactamente 105 min. Cualquier retraso se come la construcción o el cierre. Recomendación: pide a los alumnos llegar **15 min antes** y haz ahí la verificación de entorno; así el bloque 0-10 queda para la pre-autoevaluación y la bienvenida, y si hay tiempo sobrante lo regalas a la construcción.
2. **Dónde recortar si vas tarde** (en este orden): a) muro de sitios de 10 a 7 min (cada alumno 1 min, sin comentarios); b) demo de 15 a 12 min; c) componentes de la galería: se vuelven opcionales para quien ya terminó sus 2 secciones.
3. **Nunca recortar** la construcción por debajo de 40 min ni la post-autoevaluación: es el dato que sirve para medir el taller.
4. **Confianza vs. tiempo:** la pre-autoevaluación se responde en el celular, para no gastar tiempo de laptop.
5. **Min 60:** el alto de 2 min es para que quien va atrasado active el [prompt mínimo](03-ia-en-el-flujo/prompt-minimo.md), no para presentar.
