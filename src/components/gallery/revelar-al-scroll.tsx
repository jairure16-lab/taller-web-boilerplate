"use client";

// Autoría propia (Ratio).
// Envuelve cualquier bloque: aparece (sube y se aclara) la primera vez que entra en pantalla.
// Uso: <RevelarAlScroll> ...tu sección... </RevelarAlScroll>
import { useEffect, useRef, useState, type ReactNode } from "react";

export default function RevelarAlScroll({ children }: { children?: ReactNode }) {
  const bloque = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!bloque.current) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setVisible(true);
        observador.disconnect();
      },
      { threshold: 0.2 },
    );
    observador.observe(bloque.current);
    return () => observador.disconnect();
  }, []);

  return (
    <>
      <div ref={bloque} className="revelar-al-scroll" data-visible={visible}>
        {children ?? (
          <div className="revelar-al-scroll-ejemplo">
            <p className="revelar-al-scroll-titulo">Aparezco al llegar</p>
            <p>Envuelve cualquier sección y entrará cuando el visitante baje hasta ella.</p>
          </div>
        )}
      </div>
      <style>{`
        .revelar-al-scroll {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 500ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .revelar-al-scroll[data-visible="true"] { opacity: 1; transform: none; }
        .revelar-al-scroll-ejemplo {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          max-width: 16rem;
          padding: 1.25rem;
          border: 1px solid #dcdbf3;
          border-radius: 1rem;
          background: #f6f6fd;
          color: #23224d;
          font-size: 0.875rem;
        }
        .revelar-al-scroll-titulo { font-size: 1.125rem; font-weight: 700; }
        @media (prefers-reduced-motion: reduce) {
          .revelar-al-scroll { transform: none; transition: opacity 200ms ease; }
        }
      `}</style>
    </>
  );
}
