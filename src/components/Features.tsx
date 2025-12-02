import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Colaboración Live",
      desc: "Edita código con tu equipo como si fuera un documento compartido. Cursores en tiempo real.",
      icon: "⚡"
    },
    {
      title: "Git Integrado",
      desc: "Todas las operaciones de Git (commit, push, pull, branch) sin salir del navegador.",
      icon: "🌿"
    },
    {
      title: "Entorno en Nube",
      desc: "Terminal Linux completa con acceso root. Instala cualquier dependencia.",
      icon: "☁️"
    },
    {
      title: "Extensiones",
      desc: "Compatible con la mayoría de extensiones de VS Code. Personaliza tu flujo.",
      icon: "🧩"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
