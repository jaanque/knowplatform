import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>CodeFlow</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Producto</a></li>
            <li><a href="#">Soluciones</a></li>
            <li><a href="#">Precios</a></li>
            <li><a href="#">Docs</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <a href="#" className="btn-login">Inicia Sesión</a>
          <a href="#" className="btn-cta">Empezar Gratis</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
