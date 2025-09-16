import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
  const images = Array.from(
    { length: 9 },
    (_, i) => `https://placehold.co/600x600?text=Photo+${i + 1}`
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openModal = (index) => {
    setInitialSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.gallerySection}>
      <h3>우리의 순간들</h3>
      <div className={styles.galleryGrid}>
        {images.map((src, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openModal(index)}
          >
            <img src={src} alt={`Wedding photo ${index + 1}`} />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              initialSlide={initialSlide}
              spaceBetween={50}
              slidesPerView={1}
              className={styles.swiperContainer}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Wedding photo ${index + 1}`}
                    className={styles.swiperImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
