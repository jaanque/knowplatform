import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-col">
          <h4>CodeFlow</h4>
          <p>El IDE del futuro, hoy.</p>
        </div>
        <div className="footer-col">
          <h5>Producto</h5>
          <ul>
            <li><a href="#">Editor</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Recursos</h5>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Comunidad</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Términos</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CodeFlow Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
