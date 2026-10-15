// Autoría propia (Ratio).
// Cuadrícula de puntos que se desvanece hacia los bordes y se desliza despacio.
// La capa se mueve exactamente un cuadro de la cuadrícula, por eso el bucle no se nota.
import type { ReactNode } from "react";

export default function FondoPuntos({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="fondo-puntos">
        <div className="fondo-puntos-mascara" aria-hidden="true">
          <div className="fondo-puntos-capa" />
        </div>
        <div className="fondo-puntos-contenido">{children ?? <p>Tu contenido va aquí</p>}</div>
      </div>
      <style>{`
        .fondo-puntos {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background: #fafaff;
          color: #23224d;
        }
        .fondo-puntos-mascara {
          position: absolute;
          inset: 0;
          -webkit-mask-image: radial-gradient(ellipse at center, #000 35%, transparent 78%);
          mask-image: radial-gradient(ellipse at center, #000 35%, transparent 78%);
        }
        .fondo-puntos-capa {
          position: absolute;
          inset: -22px;
          background-image: radial-gradient(circle, #6f6bd6 1.5px, transparent 1.5px);
          background-size: 22px 22px;
          animation: fondo-puntos-mover 6s linear infinite;
        }
        .fondo-puntos-contenido {
          position: relative;
          display: flex;
          min-height: inherit;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          text-align: center;
        }
        @keyframes fondo-puntos-mover { to { transform: translate(22px, 22px); } }
        @media (prefers-reduced-motion: reduce) {
          .fondo-puntos-capa { animation: none; }
        }
      `}</style>
    </>
  );
}
