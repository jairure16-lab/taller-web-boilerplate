"use client";

// Autoría propia (Ratio).
// Los números suben desde cero hasta su valor cuando el bloque entra en pantalla.
// El número se escribe directo en el elemento (sin estado de React). Sin JavaScript o con
// prefers-reduced-motion se ve el valor final. Cambia los datos en CIFRAS.
import { useEffect, useRef } from "react";

const CIFRAS = [
  { valor: 120, sufijo: "+", texto: "proyectos" },
  { valor: 98, sufijo: "%", texto: "clientes felices" },
  { valor: 24, sufijo: " h", texto: "de respuesta" },
];
const DURACION = 1400;

export default function ContadorAnimado() {
  const bloque = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const el = bloque.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const numeros = [...el.querySelectorAll<HTMLElement>("[data-valor]")];
    let cuadro = 0;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();
        const inicio = performance.now();
        const avanzar = (ahora: number) => {
          const t = Math.min((ahora - inicio) / DURACION, 1);
          const suave = 1 - Math.pow(1 - t, 4);
          for (const n of numeros) n.textContent = String(Math.round(Number(n.dataset.valor) * suave));
          if (t < 1) cuadro = requestAnimationFrame(avanzar);
        };
        cuadro = requestAnimationFrame(avanzar);
      },
      { threshold: 0.4 },
    );
    observador.observe(el);

    return () => {
      observador.disconnect();
      cancelAnimationFrame(cuadro);
    };
  }, []);

  return (
    <>
      <dl ref={bloque} className="contador-animado">
        {CIFRAS.map(({ valor, sufijo, texto }) => (
          <div key={texto}>
            <dd>
              <span data-valor={valor}>{valor}</span>
              {sufijo}
            </dd>
            <dt>{texto}</dt>
          </div>
        ))}
      </dl>
      <style>{`
        .contador-animado {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          text-align: center;
        }
        .contador-animado dd {
          color: #3f3d83;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.1;
          font-variant-numeric: tabular-nums;
        }
        .contador-animado dt { font-size: 0.8rem; opacity: 0.7; }
      `}</style>
    </>
  );
}
