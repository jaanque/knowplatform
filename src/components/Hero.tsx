import IdePreview from './IdePreview';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Nuevo: Integración con GitHub Actions ✨</div>
        <h2>Programa a la velocidad del pensamiento.</h2>
        <p>
          Un entorno de desarrollo completo en tu navegador.
          Colabora en tiempo real, despliega en segundos y sincroniza con Git sin configuración.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Abrir Editor</button>
          <button className="btn-secondary">Ver Documentación</button>
        </div>
      </div>

      <div className="hero-visual">
        <IdePreview />
      </div>
    </section>
  );
};

export default Hero;
