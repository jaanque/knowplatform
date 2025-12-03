import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { FileRecord } from '../types';
import FileIcon from '../components/FileIcon';
import Icons from '../components/Icons';
import '../components/FeaturedFiles.css'; // Re-use styles

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [files, setFiles] = useState<FileRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);

      // Basic search implementation
      const { data, error } = await supabase
        .from('files')
        .select('*')
        .ilike('name', `%${query}%`);

      if (error) {
        console.error('Error fetching files:', error);
      } else {
        setFiles(data || []);
      }
      setLoading(false);
    };

    if (query) {
      fetchFiles();
    } else {
      setFiles([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}>
      <h2 style={{ marginBottom: '2rem' }}>Resultados para "{query}"</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : files.length === 0 ? (
        <p>No se encontraron archivos.</p>
      ) : (
        <div className="files-grid">
          {files.map((file) => (
            <Link to={`/file/${file.id}`} key={file.id} className="file-card">
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
