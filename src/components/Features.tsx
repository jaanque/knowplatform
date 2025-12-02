import './Features.css';

const Features = () => {
  const categories = [
    { title: "Documentos Escritos", count: "1.2M", desc: "Actas, leyes y decretos." },
    { title: "Material Fotográfico", count: "850k", desc: "Imágenes del siglo XIX y XX." },
    { title: "Mapas y Planos", count: "45k", desc: "Cartografía urbana y rural." },
    { title: "Audiovisual", count: "12k", desc: "Registros sonoros y fílmicos." },
  ];

  return (
    <section className="features">
      <div className="container">
        <h3>Explorar por Tipo de Material</h3>
        <div className="grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="card">
              <div className="card-header">
                <h4>{cat.title}</h4>
                <span className="count">{cat.count}</span>
              </div>
              <p>{cat.desc}</p>
              <a href="#" className="card-action">Ver Catálogo &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
