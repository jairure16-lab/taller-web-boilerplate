export default function Contacto() {
  return (
    <footer className="contact-section" id="contacto">
      <div className="contact-main">
        <p className="eyebrow">
          <span className="section-number">02</span>
          Nos encantará saludarte
        </p>
        <h2>
          Tu próxima
          <br />
          pausa <span>empieza aquí.</span>
        </h2>
        <p className="contact-placeholder">
          [Medio de contacto de Café Esperanza por definir]
        </p>
      </div>

      <div className="footer-bottom">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">
            ce
          </span>
          <span>Café Esperanza</span>
        </a>
        <a className="back-to-top" href="#inicio">
          Volver al inicio ↑
        </a>
        <span className="footer-note">Un buen café. Una pausa para ti.</span>
      </div>
    </footer>
  );
}
