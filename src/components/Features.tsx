import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Documentos",
      description: "Acceda a actas, leyes y decretos oficiales digitalizados.",
      icon: "📄"
    },
    {
      title: "Fotografías",
      description: "Explore nuestra galería visual del siglo XX.",
      icon: "📷"
    },
    {
      title: "Mapas",
      description: "Cartografía histórica y planos de evolución urbana.",
      icon: "🗺️"
    },
    {
      title: "Genealogía",
      description: "Rastree su historia familiar a través de registros civiles.",
      icon: "🌳"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h3>Explorar el Archivo</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <a href="#" className="feature-link">Ver colección &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
