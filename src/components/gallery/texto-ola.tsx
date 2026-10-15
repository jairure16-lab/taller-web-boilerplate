// Autoría propia (Ratio).
// Las letras saltan una tras otra como una ola: una vez al cargar y otra cada vez que pasas el cursor.
// Cambia el texto en FRASE.
const FRASE = "¡Bienvenidos!";

export default function TextoOla() {
  return (
    <>
      <h2 className="texto-ola" aria-label={FRASE}>
        {[...FRASE].map((letra, i) => (
          <span key={i} aria-hidden="true" style={{ animationDelay: `${i * 45}ms` }}>
            {letra}
          </span>
        ))}
      </h2>
      <style>{`
        .texto-ola {
          color: #3f3d83;
          font-size: 2rem;
          font-weight: 800;
          cursor: default;
        }
        .texto-ola span {
          display: inline-block;
          white-space: pre;
          animation: texto-ola-a 600ms cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @media (hover: hover) and (pointer: fine) {
          .texto-ola:hover span { animation-name: texto-ola-b; }
        }
        @keyframes texto-ola-a { 30% { transform: translateY(-0.35em); } }
        @keyframes texto-ola-b { 30% { transform: translateY(-0.35em); } }
        @media (prefers-reduced-motion: reduce) {
          .texto-ola span { animation: none; }
        }
      `}</style>
    </>
  );
}
