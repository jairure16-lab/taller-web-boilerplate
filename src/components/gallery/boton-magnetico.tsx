"use client";

// Autoría propia (Ratio).
// El botón se deja atraer por el cursor cuando se acerca, y el texto se mueve un poco más
// que el botón (efecto de profundidad). Al alejarse vuelve a su lugar. Solo con mouse.
import { useRef, type PointerEvent } from "react";

export default function BotonMagnetico() {
  const boton = useRef<HTMLButtonElement>(null);
  const texto = useRef<HTMLSpanElement>(null);

  const atraer = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !boton.current || !texto.current) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = boton.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    boton.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    texto.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const soltar = () => {
    if (boton.current) boton.current.style.transform = "";
    if (texto.current) texto.current.style.transform = "";
  };

  return (
    <>
      <div className="boton-magnetico" onPointerMove={atraer} onPointerLeave={soltar}>
        <button ref={boton} type="button">
          <span className="boton-magnetico-cara">
            <span ref={texto}>Hablemos</span>
          </span>
        </button>
      </div>
      <style>{`
        .boton-magnetico {
          display: inline-flex;
          padding: 2.5rem;
        }
        .boton-magnetico button,
        .boton-magnetico button span span {
          display: inline-block;
          transition: transform 280ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .boton-magnetico-cara {
          display: inline-block;
          padding: 1rem 1.75rem;
          border-radius: 999px;
          background: #11111c;
          color: #fff;
          font-weight: 600;
          transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .boton-magnetico button:active .boton-magnetico-cara { transform: scale(0.95); }
      `}</style>
    </>
  );
}
