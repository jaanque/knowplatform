import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Archivo Nacional</h1>
          <small>Preservación y Acceso</small>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Fondos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Organización</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
