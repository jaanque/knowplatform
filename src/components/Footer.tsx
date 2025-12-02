import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h5>Archivo Nacional</h5>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Misión y Visión</a></li>
            <li><a href="#">Autoridades</a></li>
            <li><a href="#">Transparencia</a></li>
          </ul>
        </div>
        <div>
          <h5>Servicios</h5>
          <ul>
            <li><a href="#">Consulta en sala</a></li>
            <li><a href="#">Reproducción de documentos</a></li>
            <li><a href="#">Certificaciones</a></li>
            <li><a href="#">Visitas guiadas</a></li>
          </ul>
        </div>
        <div>
          <h5>Contacto</h5>
          <ul>
            <li><a href="#">Mesa de Entradas</a></li>
            <li><a href="#">Teléfonos</a></li>
            <li><a href="#">Ubicación</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; 2024 Archivo Nacional. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
