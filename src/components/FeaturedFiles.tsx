import './FeaturedFiles.css';

const FeaturedFiles = () => {
  const files = [
    { name: "obs-studio-29.0.zip", size: "128 MB", downloads: "2.4M", type: "software", user: "OpenSource" },
    { name: "project-proposal-v2.pdf", size: "2.4 MB", downloads: "54k", type: "doc", user: "AliceM" },
    { name: "lofi-beats-collection.mp3", size: "85 MB", downloads: "120k", type: "audio", user: "MusicLover" },
    { name: "ubuntu-24.04-desktop.iso", size: "4.2 GB", downloads: "8.1M", type: "iso", user: "Canonical" },
    { name: "gimp-setup.exe", size: "250 MB", downloads: "900k", type: "software", user: "GimpTeam" },
    { name: "nature-wallpapers-4k.zip", size: "1.2 GB", downloads: "320k", type: "img", user: "PhotoArt" },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'software': return '💾';
      case 'doc': return '📄';
      case 'audio': return '🎵';
      case 'iso': return '📀';
      case 'img': return '🖼️';
      default: return '📁';
    }
  };

  return (
    <section className="featured-files">
      <div className="container">
        <div className="section-header">
          <h3>Archivos Destacados</h3>
          <a href="#" className="view-all">Ver todos &rarr;</a>
        </div>

        <div className="files-grid">
          {files.map((file, i) => (
            <div key={i} className="file-card">
              <div className="file-icon">{getIcon(file.type)}</div>
              <div className="file-info">
                <h4>{file.name}</h4>
                <div className="file-meta">
                  <span>{file.size}</span> • <span>⬇ {file.downloads}</span>
                </div>
                <div className="file-user">Subido por {file.user}</div>
              </div>
              <button className="btn-download">Descargar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFiles;
