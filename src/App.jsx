import React, { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Calendar from "./components/Calendar";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import AccountInfo from "./components/AccountInfo";
import Guestbook from "./components/Guestbook";
import Footer from "./components/Footer";
import lovelyImage from "./assets/images/lovely.jpg";
import styles from "./App.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import gallery images
import galleryImage_1 from "./assets/images/gallery-1.jpg";
import galleryImage_2 from "./assets/images/gallery-2.jpg";
import galleryImage_3 from "./assets/images/gallery-3.jpg";
import galleryImage_4 from "./assets/images/gallery-4.jpg";
import galleryImage_5 from "./assets/images/gallery-5.jpg";
import galleryImage_6 from "./assets/images/gallery-6.jpg";
import galleryImage_7 from "./assets/images/gallery-7.jpg";
import galleryImage_8 from "./assets/images/gallery-8.jpg";
import galleryImage_9 from "./assets/images/gallery-9.jpg";
import galleryImage_10 from "./assets/images/gallery-10.jpg";
import galleryImage_11 from "./assets/images/gallery-11.jpg";
import galleryImage_12 from "./assets/images/gallery-12.jpg";
import galleryImage_13 from "./assets/images/gallery-13.jpg";
import galleryImage_14 from "./assets/images/gallery-14.jpg";

function App() {
  const images = [
    galleryImage_1,
    galleryImage_2,
    galleryImage_3,
    galleryImage_4,
    galleryImage_5,
    galleryImage_6,
    galleryImage_7,
    galleryImage_8,
    galleryImage_9,
    galleryImage_10,
    galleryImage_11,
    galleryImage_12,
    galleryImage_13,
    galleryImage_14,
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const openModal = (index) => {
    setInitialSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.App}>
      <Intro />
      <Calendar />
      <Gallery images={images} onImageClick={openModal} />
      <Location />
      <AccountInfo />
      <Guestbook />
      <div className={styles.imageOverlayContainer}>
        <img src={lovelyImage} alt="Lovely" className={styles.fullWidthImage} />
        <div className={styles.imageOverlay}></div>
        <p className={styles.quoteText}>
          때론 오래된 친구처럼
          <br />
          때론 처음 만나는 사람처럼
          <br />
          그 많은 당신을 다 사랑하고 싶습니다
          <br />
          이준호 - 사랑고백
        </p>
      </div>
      <Footer />

      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <span className={styles.closeButton} onClick={closeModal}>
            &times;
          </span>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              initialSlide={initialSlide}
              spaceBetween={10}
              slidesPerView={1}
              className={styles.swiperContainer}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className={styles.galleryImage}>
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
}

export default App;
