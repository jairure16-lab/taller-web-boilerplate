"use client";

// Autoría propia (Ratio).
// Fondo oscuro con una cuadrícula casi invisible; donde está el cursor, una "linterna" la ilumina.
// La linterna es un círculo que se mueve con transform y dentro lleva la cuadrícula brillante
// movida al revés, así las líneas quedan quietas mientras la luz recorre el fondo.
import { useRef, type PointerEvent, type ReactNode } from "react";

export default function FondoLinterna({ children }: { children?: ReactNode }) {
  const luz = useRef<HTMLDivElement>(null);
  const reja = useRef<HTMLDivElement>(null);

  const alumbrar = (e: PointerEvent<HTMLDivElement>) => {
    if (!luz.current || !reja.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    luz.current.style.transform = `translate(${x}px, ${y}px)`;
    reja.current.style.transform = `translate(${-x}px, ${-y}px)`;
  };

  return (
    <>
      <div className="fondo-linterna" onPointerMove={alumbrar}>
        <div ref={luz} className="fondo-linterna-luz" aria-hidden="true">
          <div ref={reja} className="fondo-linterna-reja" />
        </div>
        <div className="fondo-linterna-contenido">{children ?? <p>Explora con el cursor</p>}</div>
      </div>
      <style>{`
        .fondo-linterna {
          --fondo-linterna-celda: 28px;
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background-color: #0b0b16;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: var(--fondo-linterna-celda) var(--fondo-linterna-celda);
          color: #fff;
        }
        .fondo-linterna-luz {
          position: absolute;
          top: 0;
          left: 0;
          width: 220px;
          height: 220px;
          margin: -110px 0 0 -110px;
          overflow: hidden;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(143, 140, 240, 0.3), transparent 70%);
          -webkit-mask-image: radial-gradient(circle, #000 35%, transparent 70%);
          mask-image: radial-gradient(circle, #000 35%, transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 200ms ease-out;
        }
        /* La reja empieza en el centro de la luz (110px) y se mueve al revés que ella:
           así queda alineada con la cuadrícula tenue del fondo. */
        .fondo-linterna-reja {
          position: absolute;
          top: 110px;
          left: 110px;
          width: 2400px;
          height: 2400px;
          background-image:
            linear-gradient(#8f8cf0 1px, transparent 1px),
            linear-gradient(90deg, #8f8cf0 1px, transparent 1px);
          background-size: var(--fondo-linterna-celda) var(--fondo-linterna-celda);
        }
        .fondo-linterna-contenido {
          position: relative;
          display: flex;
          min-height: inherit;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          text-align: center;
          pointer-events: none;
        }
        @media (hover: hover) and (pointer: fine) {
          .fondo-linterna:hover .fondo-linterna-luz { opacity: 1; }
        }
      `}</style>
    </>
  );
}
