"use client";

// Autoría propia (Ratio).
// Cambia el cursor dentro del bloque por un punto y un anillo que lo sigue con retraso.
// Sobre un botón o enlace el anillo crece. Solo con mouse; en táctil queda el cursor normal.
import { useEffect, useRef, type ReactNode } from "react";

export default function CursorAnillo({ children }: { children?: ReactNode }) {
  const zona = useRef<HTMLDivElement>(null);
  const anillo = useRef<HTMLSpanElement>(null);
  const punto = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = zona.current;
    if (!el || !anillo.current || !punto.current || !matchMedia("(pointer: fine)").matches) return;
    const aro = anillo.current;
    const centro = punto.current;
    const seguir = matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.18;
    let x = 0;
    let y = 0;
    let ax = 0;
    let ay = 0;
    let cuadro = 0;

    const animar = () => {
      ax += (x - ax) * seguir;
      ay += (y - ay) * seguir;
      aro.style.transform = `translate(${ax}px, ${ay}px)`;
      cuadro = requestAnimationFrame(animar);
    };
    const mover = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x = e.clientX - r.left;
      y = e.clientY - r.top;
      centro.style.transform = `translate(${x}px, ${y}px)`;
      el.dataset.sobre = String(Boolean((e.target as Element).closest("a, button")));
      if (el.dataset.activo === "true") return;
      ax = x;
      ay = y;
      el.dataset.activo = "true";
      cuadro = requestAnimationFrame(animar);
    };
    const salir = () => {
      el.dataset.activo = "false";
      cancelAnimationFrame(cuadro);
    };

    el.addEventListener("pointermove", mover);
    el.addEventListener("pointerleave", salir);
    return () => {
      el.removeEventListener("pointermove", mover);
      el.removeEventListener("pointerleave", salir);
      cancelAnimationFrame(cuadro);
    };
  }, []);

  return (
    <>
      <div ref={zona} className="cursor-anillo">
        <div className="cursor-anillo-contenido">
          {children ?? (
            <>
              <p>Pasa el cursor sobre los botones</p>
              <div className="cursor-anillo-botones">
                <button type="button">Servicios</button>
                <button type="button">Contacto</button>
              </div>
            </>
          )}
        </div>
        <span ref={anillo} className="cursor-anillo-anillo" aria-hidden="true">
          <span />
        </span>
        <span ref={punto} className="cursor-anillo-punto" aria-hidden="true" />
      </div>
      <style>{`
        .cursor-anillo {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background: #11111c;
          color: #fff;
        }
        @media (pointer: fine) {
          .cursor-anillo, .cursor-anillo * { cursor: none; }
        }
        .cursor-anillo-contenido {
          display: flex;
          min-height: inherit;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.5rem;
          font-weight: 600;
          text-align: center;
        }
        .cursor-anillo-botones { display: flex; gap: 0.75rem; }
        .cursor-anillo-botones button {
          padding: 0.5rem 1rem;
          border: 1px solid #3a3960;
          border-radius: 999px;
          font-size: 0.875rem;
          transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .cursor-anillo-botones button:active { transform: scale(0.97); }
        .cursor-anillo-anillo,
        .cursor-anillo-punto {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 200ms ease-out;
        }
        .cursor-anillo[data-activo="true"] .cursor-anillo-anillo,
        .cursor-anillo[data-activo="true"] .cursor-anillo-punto { opacity: 1; }
        .cursor-anillo-anillo span {
          display: block;
          width: 36px;
          height: 36px;
          margin: -18px 0 0 -18px;
          border: 1.5px solid #8f8cf0;
          border-radius: 50%;
          transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1), background-color 220ms ease;
        }
        .cursor-anillo[data-sobre="true"] .cursor-anillo-anillo span {
          transform: scale(1.7);
          background-color: rgba(143, 140, 240, 0.18);
        }
        .cursor-anillo-punto {
          width: 6px;
          height: 6px;
          margin: -3px 0 0 -3px;
          border-radius: 50%;
          background: #fff;
        }
      `}</style>
    </>
  );
}
