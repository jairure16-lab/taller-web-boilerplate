// Autoría propia (Ratio). Pieza de referencia: copia este patrón.
// Reglas de movimiento (emil-design-eng): solo transform/opacity, ease-out, <300 ms,
// feedback al presionar y respeto a prefers-reduced-motion.
export default function BotonBrillante() {
  return (
    <>
      <button type="button" className="boton-brillante">
        <span>Empezar ahora</span>
      </button>
      <style>{`
        .boton-brillante {
          position: relative;
          overflow: hidden;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          background: #3f3d83;
          color: #fff;
          font-weight: 600;
          transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .boton-brillante:active { transform: scale(0.97); }
        .boton-brillante::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%);
          transform: translateX(-100%);
        }
        @media (hover: hover) and (pointer: fine) {
          .boton-brillante:hover::after {
            transform: translateX(100%);
            transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .boton-brillante::after { display: none; }
        }
      `}</style>
    </>
  );
}
