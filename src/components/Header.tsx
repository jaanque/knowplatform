import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from './Icons';
import './Header.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          <Icons name="file" size={24} color="#0f172a" />
          <h1>FileNexus</h1>
          <span className="badge">HUB</span>
        </a>

        <form className="search-mini" onSubmit={handleSearch}>
          <Icons name="search" size={16} color="#94a3b8" />
          <input
            type="text"
            placeholder="Buscar archivos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

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
