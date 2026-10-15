// Autoría propia (Ratio).
// Tres tarjetas apiladas que se abren en abanico al pasar el cursor (o al tocarlas).
// Sirve para mostrar pasos, servicios o fotos. Cambia los textos en TARJETAS.
const TARJETAS = [
  { titulo: "Diseño", texto: "Elegimos colores y estilo", color: "#3f3d83" },
  { titulo: "Código", texto: "Armamos cada sección", color: "#6f6bd6" },
  { titulo: "Lanzamiento", texto: "Tu sitio sale al aire", color: "#c05a8a" },
];

export default function TarjetasAbanico() {
  return (
    <>
      <div className="tarjetas-abanico" tabIndex={0}>
        {TARJETAS.map((t, i) => (
          <div key={t.titulo} className="tarjetas-abanico-tarjeta" style={{ background: t.color, zIndex: i }}>
            <span className="tarjetas-abanico-numero">0{i + 1}</span>
            <p className="tarjetas-abanico-titulo">{t.titulo}</p>
            <p>{t.texto}</p>
          </div>
        ))}
      </div>
      <style>{`
        .tarjetas-abanico {
          position: relative;
          width: 9rem;
          height: 11rem;
          margin: 1rem 0;
          border-radius: 1rem;
          outline-offset: 6px;
        }
        .tarjetas-abanico-tarjeta {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 0.2rem;
          padding: 1rem;
          border-radius: 1rem;
          color: #fff;
          font-size: 0.75rem;
          box-shadow: 0 10px 24px -12px rgba(17, 17, 28, 0.6);
          transform-origin: 50% 120%;
          transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .tarjetas-abanico-tarjeta:nth-child(1) { transform: rotate(-4deg); }
        .tarjetas-abanico-tarjeta:nth-child(3) { transform: rotate(4deg); }
        .tarjetas-abanico-numero { margin-bottom: auto; font-weight: 700; opacity: 0.6; }
        .tarjetas-abanico-titulo { font-size: 1rem; font-weight: 700; }
        .tarjetas-abanico:focus .tarjetas-abanico-tarjeta:nth-child(1) { transform: translateX(-75%) rotate(-12deg); }
        .tarjetas-abanico:focus .tarjetas-abanico-tarjeta:nth-child(3) { transform: translateX(75%) rotate(12deg); }
        @media (hover: hover) and (pointer: fine) {
          .tarjetas-abanico:hover .tarjetas-abanico-tarjeta:nth-child(1) { transform: translateX(-75%) rotate(-12deg); }
          .tarjetas-abanico:hover .tarjetas-abanico-tarjeta:nth-child(3) { transform: translateX(75%) rotate(12deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tarjetas-abanico-tarjeta { transition: none; }
        }
      `}</style>
    </>
  );
}
