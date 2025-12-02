import FileIcon from './FileIcon';
import Icons from './Icons';
import './FeaturedFiles.css';

const FeaturedFiles = () => {
  const files = [
    { name: "obs-studio-29.0.zip", size: "128 MB", downloads: "2.4M", type: "archive", user: "OpenSource" },
    { name: "project-proposal-v2.pdf", size: "2.4 MB", downloads: "54k", type: "doc", user: "AliceM" },
    { name: "lofi-beats-collection.mp3", size: "85 MB", downloads: "120k", type: "audio", user: "MusicLover" },
    { name: "ubuntu-24.04-desktop.iso", size: "4.2 GB", downloads: "8.1M", type: "iso", user: "Canonical" },
    { name: "gimp-setup.exe", size: "250 MB", downloads: "900k", type: "software", user: "GimpTeam" },
    { name: "nature-wallpapers-4k.zip", size: "1.2 GB", downloads: "320k", type: "img", user: "PhotoArt" },
    { name: "annual-report-2023.pdf", size: "5.1 MB", downloads: "12k", type: "doc", user: "FinanceDept" },
    { name: "installer-win.msi", size: "45 MB", downloads: "300k", type: "software", user: "DevOps" },
  ];

  return (
    <section className="featured-files">
      <div className="container">
        <div className="section-header">
          <h3>Archivos Destacados</h3>
          <a href="#" className="view-all">
            Ver todos
            <Icons name="arrow-right" size={14} className="icon-arrow" />
          </a>
        </div>

        <div className="files-grid">
          {files.map((file, i) => (
            <div key={i} className="file-card">
              <div className="file-icon-wrapper">
                <FileIcon type={file.type} />
              </div>
              <div className="file-info">
                <h4 title={file.name}>{file.name}</h4>
                <div className="file-meta">
                  <span className="file-size">{file.size}</span>
                  <span className="file-dot">•</span>
                  <span className="file-downloads">
                    <Icons name="download" size={10} className="meta-icon" />
                    {file.downloads}
                  </span>
                </div>
              </div>
              <button className="btn-icon-download" title="Descargar" aria-label="Descargar archivo">
                <Icons name="download" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFiles;
