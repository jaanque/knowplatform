import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <h5>FileNexus</h5>
          <p>La plataforma líder en intercambio de archivos seguros.</p>
        </div>
        <div className="footer-links">
          <div>
            <h6>Explorar</h6>
            <ul>
              <li><a href="#">Software</a></li>
              <li><a href="#">Música</a></li>
              <li><a href="#">Documentos</a></li>
            </ul>
          </div>
          <div>
            <h6>Comunidad</h6>
            <ul>
              <li><a href="#">Subir</a></li>
              <li><a href="#">Reglas</a></li>
              <li><a href="#">Foro</a></li>
            </ul>
          </div>
          <div>
            <h6>Legal</h6>
            <ul>
              <li><a href="#">DMCA</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FileNexus. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
