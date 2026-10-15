// Autoría propia (Ratio).
// Preguntas frecuentes con <details>: abre y cierra sin JavaScript y funciona con teclado.
// Al abrir una se cierra la anterior (mismo name). Cambia las preguntas en PREGUNTAS.
const PREGUNTAS = [
  { pregunta: "¿Cuánto tarda mi sitio?", respuesta: "Una landing page sencilla queda lista en pocos días." },
  { pregunta: "¿Puedo cambiar los textos?", respuesta: "Sí. Cada sección es un archivo que puedes editar." },
  { pregunta: "¿Funciona en el celular?", respuesta: "Sí. El diseño se adapta al tamaño de la pantalla." },
];

export default function AcordeonFaq() {
  return (
    <>
      <div className="acordeon-faq">
        {PREGUNTAS.map(({ pregunta, respuesta }, i) => (
          <details key={pregunta} name="acordeon-faq" open={i === 0}>
            <summary>
              {pregunta}
              <span className="acordeon-faq-icono" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{respuesta}</p>
          </details>
        ))}
      </div>
      <style>{`
        .acordeon-faq {
          width: 100%;
          max-width: 22rem;
          font-size: 0.875rem;
          text-align: left;
        }
        .acordeon-faq details { border-bottom: 1px solid #dcdbf3; }
        .acordeon-faq summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.75rem 0;
          font-weight: 600;
          list-style: none;
          cursor: pointer;
          transition: opacity 150ms ease-out;
        }
        .acordeon-faq summary::-webkit-details-marker { display: none; }
        .acordeon-faq summary:active { opacity: 0.6; }
        .acordeon-faq-icono {
          color: #3f3d83;
          font-size: 1.25rem;
          line-height: 1;
          transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .acordeon-faq details[open] .acordeon-faq-icono { transform: rotate(45deg); }
        .acordeon-faq details p { padding-bottom: 0.75rem; opacity: 0.75; }
        .acordeon-faq details[open] p {
          animation: acordeon-faq-abrir 220ms cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes acordeon-faq-abrir {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 0.75; }
        }
        @media (prefers-reduced-motion: reduce) {
          .acordeon-faq-icono { transition: none; }
          .acordeon-faq details[open] p { animation: none; }
        }
      `}</style>
    </>
  );
}
