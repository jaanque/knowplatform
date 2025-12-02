import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>ARCHIVO NACIONAL</h1>
          <span>Memoria de la Nación</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Colecciones</a></li>
            <li><a href="#">Investigación</a></li>
            <li><a href="#">Visitas</a></li>
            <li><a href="#">Institucional</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
