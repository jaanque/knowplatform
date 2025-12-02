import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Centro de Datos Históricos</h2>
        <p>Explore nuestra colección de documentos, mapas y registros históricos.</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="¿Qué está buscando hoy? (ej. Censo 1950, Tratados...)"
            className="search-input"
          />
          <button className="search-button">Buscar</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
