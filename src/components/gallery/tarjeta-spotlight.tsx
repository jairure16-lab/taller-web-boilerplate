"use client";

// Autoría propia (Ratio).
// Una luz suave sigue al cursor sobre la tarjeta. La luz se mueve con transform
// escrito directo en el elemento; solo su opacidad tiene transición.
import { useRef, type PointerEvent } from "react";

export default function TarjetaSpotlight() {
  const luz = useRef<HTMLDivElement>(null);

  const seguir = (e: PointerEvent<HTMLDivElement>) => {
    if (!luz.current) return;
    const zona = e.currentTarget.getBoundingClientRect();
    luz.current.style.transform = `translate(${e.clientX - zona.left}px, ${e.clientY - zona.top}px)`;
  };

  return (
    <>
      <div className="tarjeta-spotlight" onPointerMove={seguir}>
        <div ref={luz} className="tarjeta-spotlight-luz" />
        <div className="tarjeta-spotlight-texto">
          <p className="tarjeta-spotlight-titulo">Soporte cercano</p>
          <p>Pasa el cursor: la luz te sigue por toda la tarjeta.</p>
        </div>
      </div>
      <style>{`
        .tarjeta-spotlight {
          position: relative;
          overflow: hidden;
          width: 15rem;
          max-width: 100%;
          padding: 1.5rem 1.25rem;
          border: 1px solid #2c2b45;
          border-radius: 1rem;
          background: #11111c;
          color: #c9c8e6;
          font-size: 0.875rem;
        }
        .tarjeta-spotlight-luz {
          position: absolute;
          top: 0;
          left: 0;
          width: 16rem;
          height: 16rem;
          margin: -8rem 0 0 -8rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(143, 140, 240, 0.45), transparent 65%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 200ms ease-out;
        }
        .tarjeta-spotlight-texto {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .tarjeta-spotlight-titulo { color: #fff; font-size: 1.125rem; font-weight: 700; }
        @media (hover: hover) and (pointer: fine) {
          .tarjeta-spotlight:hover .tarjeta-spotlight-luz { opacity: 1; }
        }
        @media (hover: none) {
          .tarjeta-spotlight-luz { opacity: 0.7; }
        }
      `}</style>
    </>
  );
}
