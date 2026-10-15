// Autoría propia (Ratio).
// Tres capas de olas que se deslizan a distinta velocidad al pie del bloque.
// Cada ola es un SVG del doble de ancho con el dibujo repetido: al moverse justo la mitad, el bucle no se nota.
import type { ReactNode } from "react";

const OLA = "M0 50 Q150 10 300 50 T600 50 T900 50 T1200 50 V100 H0 Z";
const CAPAS = [
  { color: "#8f8cf0", opacidad: 0.35, segundos: 14, alto: "70%" },
  { color: "#6f6bd6", opacidad: 0.5, segundos: 10, alto: "55%" },
  { color: "#3f3d83", opacidad: 0.9, segundos: 7, alto: "40%" },
];

export default function FondoOndas({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="fondo-ondas">
        {CAPAS.map((c) => (
          <svg
            key={c.segundos}
            className="fondo-ondas-ola"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{ height: c.alto, opacity: c.opacidad, animationDuration: `${c.segundos}s` }}
          >
            <path d={OLA} fill={c.color} />
          </svg>
        ))}
        <div className="fondo-ondas-contenido">{children ?? <p>Tu contenido va aquí</p>}</div>
      </div>
      <style>{`
        .fondo-ondas {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background: linear-gradient(#eeedfb, #fff);
          color: #23224d;
        }
        .fondo-ondas-ola {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          animation: fondo-ondas-mover linear infinite;
        }
        .fondo-ondas-contenido {
          position: relative;
          display: flex;
          min-height: inherit;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 1.5rem 4rem;
          font-size: 1.25rem;
          font-weight: 700;
          text-align: center;
        }
        @keyframes fondo-ondas-mover { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .fondo-ondas-ola { animation: none; }
        }
      `}</style>
    </>
  );
}
