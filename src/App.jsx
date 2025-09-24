import React from "react";
import Intro from "./components/Intro";
import Calendar from "./components/Calendar";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import AccountInfo from "./components/AccountInfo";
import Guestbook from "./components/Guestbook";
import Footer from "./components/Footer";
import lovelyImage from "./assets/images/lovely.jpg"; // Import the image
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Intro />
      <Calendar />
      <Gallery />
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
    </div>
  );
}

export default App;
