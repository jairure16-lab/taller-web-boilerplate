// Autoría propia (Ratio).
// El borde es un degradado cónico más grande que el botón, que gira detrás del relleno (solo transform).
export default function BotonBordeAnimado() {
  return (
    <>
      <button type="button" className="boton-borde-animado">
        <span>Ver proyectos</span>
      </button>
      <style>{`
        .boton-borde-animado {
          position: relative;
          isolation: isolate;
          display: inline-flex;
          overflow: hidden;
          padding: 2px;
          border-radius: 0.75rem;
          transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .boton-borde-animado:active { transform: scale(0.97); }
        .boton-borde-animado::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;
          width: 200%;
          aspect-ratio: 1;
          margin: -100% 0 0 -100%;
          background: conic-gradient(#3f3d83, #8f8cf0, #f0b35a, #8f8cf0, #3f3d83);
          animation: boton-borde-animado-giro 3s linear infinite;
        }
        .boton-borde-animado span {
          display: block;
          padding: 0.75rem 1.5rem;
          border-radius: calc(0.75rem - 2px);
          background: #11111c;
          color: #fff;
          font-weight: 600;
        }
        @keyframes boton-borde-animado-giro { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .boton-borde-animado::before { animation: none; }
        }
      `}</style>
    </>
  );
}
