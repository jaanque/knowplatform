import React from 'react';

// Removed unused FileType type

interface FileIconProps {
  type: string;
}

const FileIcon: React.FC<FileIconProps> = ({ type }) => {
  const getColors = (t: string) => {
    switch (t) {
      case 'doc': return { bg: '#FFEBEE', fill: '#D32F2F', label: 'PDF' };
      case 'software': return { bg: '#E3F2FD', fill: '#1976D2', label: 'EXE' };
      case 'iso': return { bg: '#E8EAF6', fill: '#3F51B5', label: 'ISO' };
      case 'archive':
      case 'zip': return { bg: '#FFF3E0', fill: '#F57C00', label: 'ZIP' };
      case 'audio': return { bg: '#F3E5F5', fill: '#7B1FA2', label: 'MP3' };
      case 'img': return { bg: '#E0F2F1', fill: '#00796B', label: 'IMG' };
      default: return { bg: '#F5F5F5', fill: '#616161', label: 'FILE' };
    }
  };

  // Map generic types to specific logic
  const normalizedType = type.includes('zip') ? 'archive' : type;
  const { bg, fill, label } = getColors(normalizedType);

  return (
    <div style={{
      width: '40px', /* Smaller compact icon */
      height: '40px',
      backgroundColor: bg,
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{
        position: 'absolute',
        bottom: '-4px',
        right: '-4px',
        backgroundColor: fill,
        color: 'white',
        fontSize: '8px', /* Tiny label */
        fontWeight: 'bold',
        padding: '1px 3px',
        borderRadius: '3px',
        textTransform: 'uppercase',
        lineHeight: 1
      }}>
        {label}
      </span>
    </div>
  );
};

export default FileIcon;
