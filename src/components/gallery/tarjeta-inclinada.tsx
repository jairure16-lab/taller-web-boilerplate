"use client";

// Autoría propia (Ratio).
// Se inclina hacia donde está el cursor. El transform se escribe directo en el elemento
// (sin estado de React) para no volver a pintar en cada movimiento.
import { useRef, type PointerEvent } from "react";

const GRADOS = 12;

export default function TarjetaInclinada() {
  const tarjeta = useRef<HTMLDivElement>(null);

  const inclinar = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !tarjeta.current) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const zona = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - zona.left) / zona.width - 0.5;
    const y = (e.clientY - zona.top) / zona.height - 0.5;
    tarjeta.current.style.transform = `rotateX(${-y * GRADOS}deg) rotateY(${x * GRADOS}deg)`;
  };

  const soltar = () => {
    if (tarjeta.current) tarjeta.current.style.transform = "";
  };

  return (
    <>
      <div className="tarjeta-inclinada" onPointerMove={inclinar} onPointerLeave={soltar}>
        <div ref={tarjeta} className="tarjeta-inclinada-cuerpo">
          <p className="tarjeta-inclinada-etiqueta">Plan Pro</p>
          <p className="tarjeta-inclinada-titulo">Mueve el cursor</p>
          <p>La tarjeta se inclina hacia donde apuntas.</p>
        </div>
      </div>
      <style>{`
        .tarjeta-inclinada {
          width: 15rem;
          max-width: 100%;
          perspective: 800px;
        }
        .tarjeta-inclinada-cuerpo {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 1.5rem 1.25rem;
          border-radius: 1rem;
          background: linear-gradient(140deg, #3f3d83, #6f6bd6);
          color: #fff;
          font-size: 0.875rem;
          box-shadow: 0 18px 30px -18px rgba(35, 34, 77, 0.7);
          transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
        }
        .tarjeta-inclinada-etiqueta {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.75;
        }
        .tarjeta-inclinada-titulo { font-size: 1.25rem; font-weight: 700; }
      `}</style>
    </>
  );
}
