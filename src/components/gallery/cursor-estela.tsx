"use client";

// Autoría propia (Ratio).
// Una estela de puntos de colores sigue al cursor dentro del bloque (no en toda la página).
// Cada punto persigue al anterior; las posiciones se escriben directo con transform.
// En pantallas táctiles o con prefers-reduced-motion no se muestra.
import { useEffect, useRef, type ReactNode } from "react";

const PUNTOS = 12;

export default function CursorEstela({ children }: { children?: ReactNode }) {
  const zona = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = zona.current;
    if (!el || !matchMedia("(pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const puntos = [...el.querySelectorAll<HTMLElement>(".cursor-estela-punto")];
    const pos = puntos.map(() => ({ x: 0, y: 0 }));
    let meta = { x: 0, y: 0 };
    let cuadro = 0;

    const animar = () => {
      let { x, y } = meta;
      pos.forEach((p, i) => {
        p.x += (x - p.x) * 0.4;
        p.y += (y - p.y) * 0.4;
        puntos[i].style.transform = `translate(${p.x}px, ${p.y}px) scale(${1 - i / PUNTOS})`;
        x = p.x;
        y = p.y;
      });
      cuadro = requestAnimationFrame(animar);
    };
    const mover = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      meta = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (el.dataset.activo === "true") return;
      for (const p of pos) Object.assign(p, meta);
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
      <div ref={zona} className="cursor-estela">
        {Array.from({ length: PUNTOS }, (_, i) => (
          <span
            key={i}
            className="cursor-estela-punto"
            aria-hidden="true"
            style={{ background: `hsl(${250 + i * 9} 75% 62%)` }}
          />
        ))}
        <div className="cursor-estela-contenido">{children ?? <p>Mueve el cursor por aquí</p>}</div>
      </div>
      <style>{`
        .cursor-estela {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 12rem;
          border-radius: 1rem;
          background: #f6f6fd;
          color: #23224d;
        }
        .cursor-estela-punto {
          position: absolute;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          margin: -7px 0 0 -7px;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
          transition: opacity 200ms ease-out;
        }
        .cursor-estela[data-activo="true"] .cursor-estela-punto { opacity: 0.85; }
        .cursor-estela-contenido {
          position: relative;
          display: flex;
          min-height: inherit;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          text-align: center;
        }
      `}</style>
    </>
  );
}
