"use client";

// Autoría propia (Ratio).
// Cada clic (o toque) dentro del bloque lanza chispas de colores que salen del punto y se apagan.
// Las chispas se animan con la Web Animations API (solo transform y opacity) y se borran al terminar.
// Con prefers-reduced-motion sale un solo destello que se desvanece en su lugar.
import { type ReactNode, type PointerEvent } from "react";

const COLORES = ["#6f6bd6", "#c05a8a", "#f0b35a", "#2aa7a0"];

export default function CursorChispas({ children }: { children?: ReactNode }) {
  const lanzar = (e: PointerEvent<HTMLDivElement>) => {
    const zona = e.currentTarget;
    const r = zona.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cantidad = reducido ? 1 : 12;

    for (let i = 0; i < cantidad; i++) {
      const chispa = document.createElement("span");
      chispa.className = "cursor-chispas-chispa";
      chispa.style.left = `${x}px`;
      chispa.style.top = `${y}px`;
      chispa.style.background = COLORES[i % COLORES.length];
      zona.appendChild(chispa);
      const angulo = (i / cantidad) * Math.PI * 2 + Math.random() * 0.4;
      const distancia = reducido ? 0 : 40 + Math.random() * 40;
      const animacion = chispa.animate(
        [
          { transform: "translate(0, 0) scale(1)", opacity: 1 },
          {
            transform: `translate(${Math.cos(angulo) * distancia}px, ${Math.sin(angulo) * distancia}px) scale(0.3)`,
            opacity: 0,
          },
        ],
        { duration: reducido ? 300 : 550, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
      );
      animacion.onfinish = () => chispa.remove();
    }
  };

  return (
    <>
      <div className="cursor-chispas" onPointerDown={lanzar}>
        {children ?? <p>Haz clic en cualquier parte</p>}
      </div>
      <style>{`
        .cursor-chispas {
          position: relative;
          overflow: hidden;
          display: flex;
          width: 100%;
          min-height: 12rem;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          border-radius: 1rem;
          background: #fff8ef;
          color: #23224d;
          font-size: 1.125rem;
          font-weight: 700;
          text-align: center;
          user-select: none;
          -webkit-user-select: none;
          cursor: pointer;
        }
        .cursor-chispas-chispa {
          position: absolute;
          width: 8px;
          height: 8px;
          margin: -4px 0 0 -4px;
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
