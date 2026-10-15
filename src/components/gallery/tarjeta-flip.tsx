// Autoría propia (Ratio).
// Gira en 3D al pasar el cursor; en pantallas táctiles gira al tocarla (recibe el foco).
// Con prefers-reduced-motion no gira: cambia de cara con un fundido.
export default function TarjetaFlip() {
  return (
    <>
      <div className="tarjeta-flip" tabIndex={0}>
        <div className="tarjeta-flip-giro">
          <div className="tarjeta-flip-cara tarjeta-flip-frente">
            <p className="tarjeta-flip-titulo">Diseño web</p>
            <p>Pasa el cursor para ver más</p>
          </div>
          <div className="tarjeta-flip-cara tarjeta-flip-reverso">
            <p className="tarjeta-flip-titulo">Lo que incluye</p>
            <p>Página de inicio, galería y formulario de contacto.</p>
          </div>
        </div>
      </div>
      <style>{`
        .tarjeta-flip {
          width: 15rem;
          max-width: 100%;
          height: 10rem;
          perspective: 900px;
          border-radius: 1rem;
          outline-offset: 4px;
        }
        .tarjeta-flip-giro {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .tarjeta-flip-cara {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.35rem;
          padding: 1.25rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          backface-visibility: hidden;
        }
        .tarjeta-flip-titulo { font-size: 1.125rem; font-weight: 700; }
        .tarjeta-flip-frente { background: #3f3d83; color: #fff; }
        .tarjeta-flip-reverso {
          background: #f1f0fb;
          color: #23224d;
          transform: rotateY(180deg);
        }
        .tarjeta-flip:focus .tarjeta-flip-giro { transform: rotateY(180deg); }
        @media (hover: hover) and (pointer: fine) {
          .tarjeta-flip:hover .tarjeta-flip-giro { transform: rotateY(180deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tarjeta-flip-giro { transition: none; transform: none !important; }
          .tarjeta-flip-cara { backface-visibility: visible; transition: opacity 200ms ease; }
          .tarjeta-flip-reverso { transform: none; opacity: 0; }
          .tarjeta-flip:focus .tarjeta-flip-reverso,
          .tarjeta-flip:hover .tarjeta-flip-reverso { opacity: 1; }
        }
      `}</style>
    </>
  );
}
