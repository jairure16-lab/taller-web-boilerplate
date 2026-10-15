// Autoría propia (Ratio).
// Manchas de color difusas que se mueven despacio sobre un fondo oscuro.
// Las manchas son degradados radiales (sin filter: blur, que es caro en Safari) y solo animan transform.
import type { ReactNode } from "react";

export default function FondoAurora({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="fondo-aurora">
        <div className="fondo-aurora-mancha fondo-aurora-a" aria-hidden="true" />
        <div className="fondo-aurora-mancha fondo-aurora-b" aria-hidden="true" />
        <div className="fondo-aurora-mancha fondo-aurora-c" aria-hidden="true" />
        <div className="fondo-aurora-contenido">{children ?? <p>Tu contenido va aquí</p>}</div>
      </div>
      <style>{`
        .fondo-aurora {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background: #0b0b1a;
          color: #fff;
        }
        .fondo-aurora-mancha {
          position: absolute;
          width: 70%;
          aspect-ratio: 1;
          border-radius: 50%;
          opacity: 0.75;
          will-change: transform;
        }
        .fondo-aurora-a {
          top: -35%;
          left: -15%;
          background: radial-gradient(circle, #6f6bd6, transparent 65%);
          animation: fondo-aurora-a 14s ease-in-out infinite alternate;
        }
        .fondo-aurora-b {
          right: -20%;
          bottom: -45%;
          background: radial-gradient(circle, #c05a8a, transparent 65%);
          animation: fondo-aurora-b 17s ease-in-out infinite alternate;
        }
        .fondo-aurora-c {
          top: 10%;
          left: 30%;
          width: 50%;
          background: radial-gradient(circle, #2aa7a0, transparent 65%);
          animation: fondo-aurora-c 12s ease-in-out infinite alternate;
        }
        .fondo-aurora-contenido {
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
        @keyframes fondo-aurora-a { to { transform: translate(35%, 25%) scale(1.15); } }
        @keyframes fondo-aurora-b { to { transform: translate(-30%, -20%) scale(0.9); } }
        @keyframes fondo-aurora-c { to { transform: translate(-25%, 20%) scale(1.2); } }
        @media (prefers-reduced-motion: reduce) {
          .fondo-aurora-mancha { animation: none; }
        }
      `}</style>
    </>
  );
}
