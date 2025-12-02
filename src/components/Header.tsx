import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>FileNexus</h1>
          <span className="badge">HUB</span>
        </div>

        <div className="search-mini">
          <input type="text" placeholder="Buscar archivos..." />
          <button>🔍</button>
        </div>

        <nav className="nav">
          <a href="#">Categorías</a>
          <a href="#">Populares</a>
          <a href="#">Premium</a>
        </nav>

        <div className="user-actions">
          <button className="btn-upload">☁️ Subir Archivo</button>
          <button className="btn-login">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
