import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { FileRecord } from '../types';
import FileIcon from '../components/FileIcon';
import Icons from '../components/Icons';

const FileDetail = () => {
  const { id } = useParams();
  const [file, setFile] = useState<FileRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFile = async () => {
      if (!id) return;
      const { data, error } = await supabase
        .from('files')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching file:', error);
      } else {
        setFile(data);
      }
      setLoading(false);
    };

    fetchFile();
  }, [id]);

  if (loading) return <div className="container" style={{padding: '4rem'}}>Cargando...</div>;
  if (!file) return <div className="container" style={{padding: '4rem'}}>Archivo no encontrado.</div>;

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ transform: 'scale(1.5)' }}>
            <FileIcon type={file.type} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{file.name}</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Subido por {file.uploader}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h5 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>TAMAÑO</h5>
            <p style={{ fontWeight: 600 }}>{file.size}</p>
          </div>
          <div>
            <h5 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>DESCARGAS</h5>
            <p style={{ fontWeight: 600 }}>{file.downloads}</p>
          </div>
        </div>

        {file.description && (
          <div style={{ marginBottom: '2rem' }}>
            <h5 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>DESCRIPCIÓN</h5>
            <p style={{ lineHeight: 1.6 }}>{file.description}</p>
          </div>
        )}

        <button style={{
          backgroundColor: 'var(--accent-color)',
          color: 'white',
          padding: '0.8rem 2rem',
          borderRadius: '6px',
          fontSize: '1rem',
          fontWeight: 600,
          display: 'flex',
          gap: '0.5rem'
        }}>
          <Icons name="download" size={20} color="white" />
          Descargar Archivo
        </button>
      </div>
    </div>
  );
};

export default FileDetail;
