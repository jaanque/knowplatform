import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section footer-branding">
          <h3>Archivo Nacional</h3>
          <p>
            Preservamos el patrimonio documental de la nación para garantizar el acceso a la información, la transparencia y el conocimiento histórico.
          </p>
        </div>

        <div className="footer-section">
          <h5>Institucional</h5>
          <ul>
            <li><a href="#">Autoridades</a></li>
            <li><a href="#">Misión y Visión</a></li>
            <li><a href="#">Transparencia</a></li>
            <li><a href="#">Normativa</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Servicios</h5>
          <ul>
            <li><a href="#">Consulta en Sala</a></li>
            <li><a href="#">Catálogo en Línea</a></li>
            <li><a href="#">Reproducción</a></li>
            <li><a href="#">Visitas Guiadas</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Contacto</h5>
          <ul>
            <li><a href="#">Mesa de Entradas</a></li>
            <li><a href="#">Ubicación</a></li>
            <li><a href="#">Teléfonos</a></li>
            <li><a href="#">Buzón Ciudadano</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Archivo Nacional. Ministerio de Cultura.</p>
        <p>Desarrollado con estándares de accesibilidad.</p>
      </div>
    </footer>
  );
};

export default Footer;
