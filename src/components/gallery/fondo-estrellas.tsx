// Autoría propia (Ratio).
// Cielo nocturno: estrellas que titilan (solo opacity) y una estrella fugaz de vez en cuando.
// Las posiciones salen de un generador con semilla fija, así el servidor y el navegador pintan lo mismo.
import type { ReactNode } from "react";

let semilla = 11;
const azar = () => {
  semilla = (semilla * 16807) % 2147483647;
  return semilla / 2147483647;
};
const ESTRELLAS = Array.from({ length: 70 }, () => ({
  x: (azar() * 100).toFixed(2),
  y: (azar() * 100).toFixed(2),
  tam: azar() > 0.85 ? 3 : azar() > 0.5 ? 2 : 1,
  retraso: (azar() * 4).toFixed(2),
  ciclo: (2 + azar() * 3).toFixed(2),
}));

export default function FondoEstrellas({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="fondo-estrellas">
        <div aria-hidden="true">
          {ESTRELLAS.map((e, i) => (
            <span
              key={i}
              className="fondo-estrellas-estrella"
              style={{
                left: `${e.x}%`,
                top: `${e.y}%`,
                width: e.tam,
                height: e.tam,
                animationDelay: `${e.retraso}s`,
                animationDuration: `${e.ciclo}s`,
              }}
            />
          ))}
          <span className="fondo-estrellas-fugaz" />
        </div>
        <div className="fondo-estrellas-contenido">{children ?? <p>Tu contenido va aquí</p>}</div>
      </div>
      <style>{`
        .fondo-estrellas {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background: radial-gradient(ellipse at bottom, #1d1b44, #07071a 70%);
          color: #fff;
        }
        .fondo-estrellas-estrella {
          position: absolute;
          border-radius: 50%;
          background: #fff;
          animation: fondo-estrellas-titilar ease-in-out infinite alternate;
        }
        .fondo-estrellas-fugaz {
          position: absolute;
          top: 15%;
          left: 70%;
          width: 90px;
          height: 1.5px;
          border-radius: 999px;
          background: linear-gradient(90deg, #fff, transparent);
          opacity: 0;
          transform: rotate(-35deg);
          animation: fondo-estrellas-fugaz 7s ease-out infinite 2s;
        }
        .fondo-estrellas-contenido {
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
        @keyframes fondo-estrellas-titilar { from { opacity: 0.2; } to { opacity: 1; } }
        @keyframes fondo-estrellas-fugaz {
          0% { opacity: 0; transform: rotate(-35deg) translateX(0); }
          3% { opacity: 1; }
          12% { opacity: 0; transform: rotate(-35deg) translateX(-260px); }
          100% { opacity: 0; transform: rotate(-35deg) translateX(-260px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fondo-estrellas-estrella { animation: none; opacity: 0.7; }
          .fondo-estrellas-fugaz { display: none; }
        }
      `}</style>
    </>
  );
}
