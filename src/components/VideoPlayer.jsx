import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <ReactPlayer
        url={src} // La URL del video (puede ser de YouTube, Vimeo, o un archivo MP4)
        playing={isPlaying} // Controla si el video está reproduciéndose
        controls={true} // Mostrar controles
        width="100%" // Ancho del video
        height="auto" // Alto del video
        muted={false} // Si deseas mutear el video por defecto, cámbialo a true
      />
      <button onClick={toggleVideo}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
