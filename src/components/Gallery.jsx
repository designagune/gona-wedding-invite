import React from "react";
import styles from "./Gallery.module.scss";

const Gallery = ({ images, onImageClick }) => {
  return (
    <div className={styles.gallerySection}>
      <div className={styles.galleryTitle}>
        <span>GALLERY</span>
        <h2 className={styles.galleryHead}>웨딩 갤러리</h2>
      </div>
      <div className={styles.galleryGrid}>
        {images.map((src, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => onImageClick(index)}
          >
            <img src={src} alt={`Wedding photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
