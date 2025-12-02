import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Catálogo en Línea</h2>
        <div className="search-container">
          <form className="search-form">
            <input
              type="text"
              placeholder="Buscar por palabra clave, fondo documental o fecha..."
              className="search-input"
            />
            <button type="submit" className="search-button">Buscar</button>
          </form>
          <div className="search-links">
            <a href="#">Búsqueda Avanzada &rarr;</a>
            <a href="#">Guía de Fondos &rarr;</a>
            <a href="#">Novedades de Ingreso &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
