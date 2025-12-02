import Icons from './Icons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Descarga lo que necesites,<br/>cuando lo necesites.</h2>
          <p>Millones de archivos compartidos por nuestra comunidad. Software, documentos, música y más.</p>

          <div className="search-large-wrapper">
            <div className="search-label">
              <span>Buscador de Archivos</span>
            </div>
            <div className="search-large">
              <div className="search-icon-box">
                <Icons name="search" size={20} color="#64748b" />
              </div>
              <input type="text" placeholder="Ej. reporte_anual_2024.pdf" />
              <button>
                <span>BUSCAR</span>
                <Icons name="arrow-right" size={16} color="white" />
              </button>
            </div>
          </div>

          <div className="tags">
            <span>Tendencias:</span>
            <a href="#">Windows 11</a>
            <a href="#">Python 3.12</a>
            <a href="#">Resume Template</a>
            <a href="#">Ubuntu Server</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
