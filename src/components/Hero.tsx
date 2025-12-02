import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Centro de Datos Históricos</h2>
        <p>
          Acceso público y gratuito a los documentos que conforman la memoria de la nación.
          Consulte catálogos, registros civiles y material audiovisual.
        </p>

        <div className="search-box">
          <input type="text" placeholder="Buscar documentos, leyes, personas..." />
          <button>BUSCAR</button>
        </div>

        <div className="quick-links">
          <span>Accesos rápidos:</span>
          <a href="#">Guía de Archivos</a>
          <a href="#">Trámites a distancia</a>
          <a href="#">Turnos presenciales</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
