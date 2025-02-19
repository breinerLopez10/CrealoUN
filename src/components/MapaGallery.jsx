import React, { useState, useEffect } from 'react';

const MapaGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goForward = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goBack = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Actualiza el índice actual si el arreglo de imágenes cambia
  useEffect(() => {
    if (currentImageIndex >= images.length) {
      setCurrentImageIndex(images.length - 1);
    }
  }, [images, currentImageIndex]);

  return (
    <div>
      <div className="image-container">
      <div>
          <p>Nombre: {images[currentImageIndex][0]}</p>
          <p>Autor: {images[currentImageIndex][1]}</p>
    </div>
        <img src={images[currentImageIndex][2]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <div className="navigation-buttons">
        <button onClick={goBack} disabled={currentImageIndex === 0}>Atrás</button>
        <button onClick={goForward} disabled={currentImageIndex === images.length - 1}>Adelante</button>
      </div>
    </div>
  );
};

export default MapaGallery;