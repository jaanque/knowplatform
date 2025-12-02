import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Descarga lo que necesites, cuando lo necesites.</h2>
        <p>Millones de archivos compartidos por nuestra comunidad. Software, documentos, música y más.</p>

        <div className="search-large">
          <input type="text" placeholder="¿Qué archivo estás buscando hoy?" />
          <button>BUSCAR ARCHIVO</button>
        </div>

        <div className="tags">
          <span>Popular:</span>
          <a href="#">Windows 11 ISO</a>
          <a href="#">Python 3.12</a>
          <a href="#">Resume Template</a>
          <a href="#">Ubuntu Server</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
