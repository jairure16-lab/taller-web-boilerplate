// Autoría propia (Ratio).
// Estilo retro de los 80: un piso de cuadrícula en perspectiva que avanza hacia ti y un sol a rayas.
// El piso es un plano inclinado en 3D que se desplaza exactamente una celda, por eso el bucle no se nota.
import type { ReactNode } from "react";

export default function FondoCuadriculaRetro({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="fondo-cuadricula-retro">
        <div className="fondo-cuadricula-retro-sol" aria-hidden="true" />
        <div className="fondo-cuadricula-retro-piso" aria-hidden="true">
          <div className="fondo-cuadricula-retro-lineas" />
        </div>
        <div className="fondo-cuadricula-retro-contenido">{children ?? <p>Tu contenido va aquí</p>}</div>
      </div>
      <style>{`
        .fondo-cuadricula-retro {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background: linear-gradient(#150a2e 0%, #3a1450 55%, #150a2e 55%);
          color: #fff;
        }
        .fondo-cuadricula-retro-sol {
          position: absolute;
          bottom: 45%;
          left: 50%;
          width: 6rem;
          height: 3rem;
          margin-left: -3rem;
          border-radius: 6rem 6rem 0 0;
          background:
            repeating-linear-gradient(transparent 0 6px, #3a1450 6px 9px),
            linear-gradient(#f0b35a, #c05a8a);
        }
        .fondo-cuadricula-retro-piso {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 45%;
          overflow: hidden;
          perspective: 160px;
        }
        .fondo-cuadricula-retro-lineas {
          position: absolute;
          inset: -100% -50% 0;
          background-image:
            linear-gradient(#e05ad0 1.5px, transparent 1.5px),
            linear-gradient(90deg, #e05ad0 1.5px, transparent 1.5px);
          background-size: 36px 36px;
          transform-origin: bottom;
          transform: rotateX(60deg);
          animation: fondo-cuadricula-retro-avanzar 1.2s linear infinite;
        }
        .fondo-cuadricula-retro-piso::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(#150a2e, transparent 60%);
        }
        .fondo-cuadricula-retro-contenido {
          position: relative;
          display: flex;
          min-height: inherit;
          align-items: flex-start;
          justify-content: center;
          padding: 1.5rem;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-align: center;
          text-shadow: 0 0 12px #e05ad0;
        }
        @keyframes fondo-cuadricula-retro-avanzar {
          to { transform: rotateX(60deg) translateY(36px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fondo-cuadricula-retro-lineas { animation: none; }
        }
      `}</style>
    </>
  );
}
