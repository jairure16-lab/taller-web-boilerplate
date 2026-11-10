export default function Portada() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Café Esperanza, inicio">
        <span className="brand-mark" aria-hidden="true">
          ce
        </span>
        <span>Café Esperanza</span>
      </a>

      <nav className="main-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Lo que ofrecemos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a className="header-cta" href="#servicios">
        Conócenos <span aria-hidden="true">↗</span>
      </a>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Un espacio para hacer una pausa
          </p>
          <h1 id="hero-title">
            UN BUEN CAFÉ.
            <br />
            <span>UNA PAUSA PARA TI.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Bienvenido a Café Esperanza. Estamos preparando un lugar donde
              cada pausa pueda sentirse especial.
            </p>
            <a className="primary-cta" href="#servicios">
              Descubre lo que ofrecemos <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="cup">
            <div className="coffee" />
            <div className="cup-handle" />
          </div>
          <span className="art-note">CAFÉ · CALMA · ESPERANZA</span>
        </div>
        <span className="hero-index" aria-hidden="true">
          01 / 03
        </span>
      </section>
    </header>
  );
}
