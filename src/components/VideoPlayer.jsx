import React from 'react';

const VideoPlayer = ({ src }) => {
  // Convierte una URL estándar de YouTube o YouTube Short en un enlace de inserción
  const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  const embedUrl = getEmbedUrl(src);

  if (!embedUrl) {
    return <p>Error: URL de YouTube no válida</p>;
  }

  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default VideoPlayer;
