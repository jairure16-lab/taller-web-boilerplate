export default function Servicios() {
  return (
    <section className="content-section services-section" id="servicios">
      <div className="section-heading">
        <p className="eyebrow">
          <span className="section-number">01</span>
          Lo que ofrecemos
        </p>
        <h2>
          Hecho para
          <br />
          <span>disfrutar.</span>
        </h2>
      </div>

      <div className="service-card">
        <div className="service-card-top">
          <span className="service-symbol" aria-hidden="true">
            ✳
          </span>
          <span className="card-label">Café Esperanza</span>
        </div>
        <p className="service-placeholder">
          [Cuéntanos qué ofrece Café Esperanza: café, comida u otras opciones.]
        </p>
        <span className="service-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </section>
  );
}
