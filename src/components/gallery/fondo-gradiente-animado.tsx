// Autoría propia (Ratio).
// El degradado es una capa tres veces más ancha que el bloque y se desliza con transform
// (más barato que animar background-position). Lo que pongas dentro queda encima.
import type { ReactNode } from "react";

export default function FondoGradienteAnimado({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="fondo-gradiente-animado">
        <div className="fondo-gradiente-animado-capa" aria-hidden="true" />
        <div className="fondo-gradiente-animado-contenido">
          {children ?? <p>Tu contenido va aquí</p>}
        </div>
      </div>
      <style>{`
        .fondo-gradiente-animado {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background: #3f3d83;
          color: #fff;
        }
        .fondo-gradiente-animado-capa {
          position: absolute;
          inset: 0;
          width: 300%;
          background: linear-gradient(90deg, #3f3d83, #6f6bd6, #c05a8a, #f0b35a);
          animation: fondo-gradiente-animado-mover 10s ease-in-out infinite alternate;
        }
        .fondo-gradiente-animado-contenido {
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
        @keyframes fondo-gradiente-animado-mover { to { transform: translateX(-66.666%); } }
        @media (prefers-reduced-motion: reduce) {
          .fondo-gradiente-animado-capa { animation: none; }
        }
      `}</style>
    </>
  );
}
