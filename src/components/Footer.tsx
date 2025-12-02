import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5>Archivo Nacional</h5>
            <p>Preservando la memoria histórica de nuestra nación para las futuras generaciones.</p>
          </div>
          <div className="footer-section">
            <h5>Enlaces Rápidos</h5>
            <ul>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Accesibilidad</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Contacto</h5>
            <p>Av. de la Historia 123<br />Ciudad Capital, CP 1000</p>
            <p>Email: contacto@archivonacional.gob</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Archivo Nacional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
