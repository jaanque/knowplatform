import './Features.css';

const Features = () => {
  const collections = [
    {
      id: "civil",
      title: "Registro Civil",
      period: "1880 - 1950",
      description: "Actas de nacimiento, matrimonio y defunción. Padrones electorales históricos.",
      color: "#e8e6df"
    },
    {
      id: "judicial",
      title: "Poder Judicial",
      period: "1750 - 1920",
      description: "Expedientes sucesorios, causas criminales y protocolos notariales.",
      color: "#dfdce8"
    },
    {
      id: "maps",
      title: "Cartografía y Planos",
      period: "Siglos XVIII - XX",
      description: "Mapas topográficos, planos urbanos y catastrales de todo el territorio.",
      color: "#dfe8e1"
    },
    {
      id: "photos",
      title: "Archivo Fotográfico",
      period: "1860 - Presente",
      description: "Colección Witcomb, caras y caretas, y registros oficiales de gobierno.",
      color: "#e8dfdf"
    }
  ];

  return (
    <section className="collections">
      <div className="container">
        <div className="section-header">
          <h3>Fondos Documentales</h3>
          <p>Explore nuestras colecciones organizadas por procedencia administrativa.</p>
        </div>

        <div className="collections-grid">
          {collections.map((col) => (
            <a href={`#${col.id}`} key={col.id} className="collection-card">
              <div className="card-image-placeholder" style={{backgroundColor: col.color}}>
                <span className="period-badge">{col.period}</span>
              </div>
              <div className="card-content">
                <h4>{col.title}</h4>
                <p>{col.description}</p>
                <span className="card-link">Consultar Fondo &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
