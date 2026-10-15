// Autoría propia (Ratio).
// Título con un degradado que se desplaza. Excepción a "solo transform/opacity": un degradado
// recortado a las letras solo se puede mover con background-position; el área es pequeña.
export default function TextoDegradado() {
  return (
    <>
      <h2 className="texto-degradado">Ideas que se mueven</h2>
      <style>{`
        .texto-degradado {
          background: linear-gradient(90deg, #3f3d83, #8f8cf0, #c05a8a, #3f3d83);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.15;
          text-align: center;
          animation: texto-degradado-mover 6s linear infinite;
        }
        @keyframes texto-degradado-mover { to { background-position: -300% 0; } }
        @media (prefers-reduced-motion: reduce) {
          .texto-degradado { animation: none; }
        }
      `}</style>
    </>
  );
}
