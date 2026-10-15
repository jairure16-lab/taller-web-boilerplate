"use client";

// Autoría propia (Ratio).
// Escribe una frase letra por letra, la borra y pasa a la siguiente.
// Con prefers-reduced-motion cambia la frase completa de una vez, sin teclear.
import { useEffect, useState } from "react";

const FRASES = ["sitios web", "portafolios", "tiendas en línea"];

export default function TextoMaquina() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frase = 0;
    let letras = 0;
    let borrando = false;
    let reloj: ReturnType<typeof setTimeout>;

    const paso = () => {
      const actual = FRASES[frase];
      if (reducido) {
        setTexto(actual);
        frase = (frase + 1) % FRASES.length;
        reloj = setTimeout(paso, 2600);
        return;
      }
      letras += borrando ? -1 : 1;
      setTexto(actual.slice(0, letras));
      let espera = borrando ? 40 : 85;
      if (!borrando && letras === actual.length) {
        borrando = true;
        espera = 1600;
      } else if (borrando && letras === 0) {
        borrando = false;
        frase = (frase + 1) % FRASES.length;
        espera = 350;
      }
      reloj = setTimeout(paso, espera);
    };

    reloj = setTimeout(paso, 400);
    return () => clearTimeout(reloj);
  }, []);

  return (
    <>
      <p className="texto-maquina" aria-label={`Creamos ${FRASES.join(", ")}`}>
        <span aria-hidden="true">
          Creamos <span className="texto-maquina-frase">{texto}</span>
          <span className="texto-maquina-cursor" />
        </span>
      </p>
      <style>{`
        .texto-maquina {
          min-height: 1.3em;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.3;
        }
        .texto-maquina-frase { color: #3f3d83; }
        .texto-maquina-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          margin-left: 2px;
          background: #3f3d83;
          vertical-align: -0.12em;
          animation: texto-maquina-parpadeo 1s steps(1) infinite;
        }
        @keyframes texto-maquina-parpadeo { 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .texto-maquina-cursor { animation: none; }
        }
      `}</style>
    </>
  );
}
