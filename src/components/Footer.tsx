import Icons from './Icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-header">
              <Icons name="file" size={24} color="#0f172a" />
              <h5>FileNexus</h5>
            </div>
            <p>La plataforma líder en intercambio de archivos seguros.</p>
            <div className="social-links">
               {/* Placeholders for social icons if needed */}
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="link-column">
              <h6>Explorar</h6>
              <ul>
                <li><a href="#">Software</a></li>
                <li><a href="#">Música</a></li>
                <li><a href="#">Documentos</a></li>
                <li><a href="#">Imágenes</a></li>
              </ul>
            </div>
            <div className="link-column">
              <h6>Comunidad</h6>
              <ul>
                <li><a href="#">Subir Archivo</a></li>
                <li><a href="#">Reglas</a></li>
                <li><a href="#">Foro de Ayuda</a></li>
              </ul>
            </div>
            <div className="link-column">
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
          <div className="bottom-links">
            <a href="#">Status</a>
            <span className="dot">•</span>
            <a href="#">API</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
