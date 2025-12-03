import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from './Icons';
import './Hero.css';

const Hero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Stop default form submit if button is clicked inside a form
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Descarga lo que necesites,<br/>cuando lo necesites.</h2>
          <p>Millones de archivos compartidos por nuestra comunidad. Software, documentos, música y más.</p>

          <div className="search-large-wrapper">
            <div className="search-label">
              <span>Buscador de Archivos</span>
            </div>
            <div className="search-large">
              <div className="search-icon-box">
                <Icons name="search" size={20} color="#64748b" />
              </div>
              <input
                type="text"
                placeholder="Ej. reporte_anual_2024.pdf"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e as any)}
              />
              <button onClick={handleSearch}>
                <span>BUSCAR</span>
                <Icons name="arrow-right" size={16} color="white" />
              </button>
            </div>
          </div>

          <div className="tags">
            <span>Tendencias:</span>
            <a href="#">Windows 11</a>
            <a href="#">Python 3.12</a>
            <a href="#">Resume Template</a>
            <a href="#">Ubuntu Server</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
