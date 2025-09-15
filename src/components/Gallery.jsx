import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = () => {
  // 9 placeholder images
  const images = Array.from({ length: 9 }, (_, i) => `https://via.placeholder.com/400x400?text=Photo+${i + 1}`);

  return (
    <div className={styles.gallerySection}>
      <h3>우리의 순간들</h3>
      <div className={styles.galleryGrid}>
        {images.map((src, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={src} alt={`Wedding photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
