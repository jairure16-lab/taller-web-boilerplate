// Autoría propia (Ratio).
// Fila que se desplaza sin parar. La lista se pinta dos veces y la pista avanza justo la mitad,
// por eso el bucle no tiene salto. Se detiene al pasar el cursor. Cambia los textos en ELEMENTOS.
const ELEMENTOS = ["Diseño", "Velocidad", "Confianza", "Soporte", "Resultados", "Claridad"];

export default function Marquesina() {
  return (
    <>
      <div className="marquesina">
        <div className="marquesina-pista">
          {[0, 1].map((copia) => (
            <ul key={copia} aria-hidden={copia === 1}>
              {ELEMENTOS.map((elemento) => (
                <li key={elemento}>{elemento}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <style>{`
        .marquesina {
          overflow: hidden;
          width: 100%;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
        }
        .marquesina-pista {
          display: flex;
          width: max-content;
          animation: marquesina-mover 18s linear infinite;
        }
        .marquesina ul { display: flex; gap: 0.75rem; padding-right: 0.75rem; }
        .marquesina li {
          padding: 0.5rem 1rem;
          border: 1px solid #dcdbf3;
          border-radius: 999px;
          background: #f6f6fd;
          color: #3f3d83;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
        }
        @keyframes marquesina-mover { to { transform: translateX(-50%); } }
        @media (hover: hover) and (pointer: fine) {
          .marquesina:hover .marquesina-pista { animation-play-state: paused; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquesina-pista { animation: none; }
        }
      `}</style>
    </>
  );
}
