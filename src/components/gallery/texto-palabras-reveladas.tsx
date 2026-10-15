// Autoría propia (Ratio).
// Las palabras del título entran una tras otra al cargar la página (70 ms entre cada una).
// Cambia la frase en FRASE; el resto se ajusta solo.
const FRASE = "Tu sitio listo en una tarde";

export default function TextoPalabrasReveladas() {
  return (
    <>
      <h2 className="texto-palabras-reveladas">
        {FRASE.split(" ").map((palabra, i) => (
          <span key={i} style={{ animationDelay: `${i * 70}ms` }}>
            {palabra}{" "}
          </span>
        ))}
      </h2>
      <style>{`
        .texto-palabras-reveladas {
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.2;
          text-align: center;
        }
        .texto-palabras-reveladas span {
          display: inline-block;
          white-space: pre;
          animation: texto-palabras-reveladas-entrar 500ms cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes texto-palabras-reveladas-entrar {
          from { opacity: 0; transform: translateY(0.5em); }
        }
        @media (prefers-reduced-motion: reduce) {
          .texto-palabras-reveladas span { animation-name: texto-palabras-reveladas-fundido; }
          @keyframes texto-palabras-reveladas-fundido { from { opacity: 0; } }
        }
      `}</style>
    </>
  );
}
