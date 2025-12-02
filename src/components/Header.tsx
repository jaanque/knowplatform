import Icons from './Icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Icons name="file" size={24} color="#0f172a" />
          <h1>FileNexus</h1>
          <span className="badge">HUB</span>
        </div>

        <div className="search-mini">
          <Icons name="search" size={16} color="#94a3b8" />
          <input type="text" placeholder="Buscar archivos..." />
        </div>

        <nav className="nav">
          <a href="#">Categorías</a>
          <a href="#">Populares</a>
          <a href="#">Premium</a>
        </nav>

        <div className="user-actions">
          <button className="btn-upload">
            <Icons name="upload" size={16} color="white" />
            <span>Subir</span>
          </button>
          <button className="btn-login">
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
