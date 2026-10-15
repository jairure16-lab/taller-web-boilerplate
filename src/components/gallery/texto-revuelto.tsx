"use client";

// Autoría propia (Ratio).
// El texto aparece "descifrándose": letras al azar que se van fijando de izquierda a derecha.
// Pasa al cargar y cada vez que pasas el cursor. Con prefers-reduced-motion el texto queda quieto.
import { useEffect, useRef, useState, type RefObject } from "react";

const FRASE = "Hola, mundo digital";
const SIGNOS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+<>/=";

type Reloj = RefObject<ReturnType<typeof setInterval> | undefined>;

// Lee el intervalo vigente en el momento de detener (a propósito, no el del primer render).
const detener = (reloj: Reloj) => clearInterval(reloj.current);

function revolver(reloj: Reloj, setTexto: (t: string) => void) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  detener(reloj);
  let fijas = 0;
  reloj.current = setInterval(() => {
    fijas += 0.5;
    setTexto(
      [...FRASE]
        .map((letra, i) => (i < fijas || letra === " " ? letra : SIGNOS[Math.floor(Math.random() * SIGNOS.length)]))
        .join(""),
    );
    if (fijas >= FRASE.length) clearInterval(reloj.current);
  }, 30);
}

export default function TextoRevuelto() {
  const [texto, setTexto] = useState(FRASE);
  const reloj: Reloj = useRef(undefined);

  useEffect(() => {
    const inicio = setTimeout(() => revolver(reloj, setTexto), 300);
    return () => {
      clearTimeout(inicio);
      detener(reloj);
    };
  }, []);

  return (
    <>
      <p className="texto-revuelto" aria-label={FRASE} onPointerEnter={() => revolver(reloj, setTexto)}>
        <span aria-hidden="true">{texto}</span>
      </p>
      <style>{`
        .texto-revuelto {
          color: #3f3d83;
          font-family: ui-monospace, "Cascadia Code", Menlo, Consolas, monospace;
          font-size: 1.5rem;
          font-weight: 700;
          white-space: pre;
          cursor: default;
        }
      `}</style>
    </>
  );
}
