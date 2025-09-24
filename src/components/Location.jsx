import React from "react"; // Removed useEffect as it's not used in this component anymore
import styles from "./Location.module.scss";
import KakaoMap from "./KakaoMap";

const Location = () => {
  // Naver Map URL
  const naverMapUrl = "https://naver.me/GWeyeWHp";

  return (
    <div className={styles.locationSection}>
      <div className={styles.locationTitle}>
        <span>LOCATION</span>
        <h2 className={styles.locationHead}>오시는 길</h2>
      </div>
      <div className={styles.mapFrame}>
        <KakaoMap />
      </div>
      <div className={styles.mapButtonContainer}>
        <a
          href="https://kko.kakao.com/26WllvSEZB"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mapButton} ${styles.kakaoMapButton}`}
          style={{ flex: 1 }}
        >
          카카오 맵
        </a>
        <a
          href={naverMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapButton}
          style={{ flex: 1 }}
        >
          네이버 지도
        </a>
      </div>
      <div className={styles.directions}>
        <div className={styles.directionItem}>
          <h4>지하철</h4>
          <p>4호선 고잔역 2번 출구</p>
          <p>(셔틀버스 5분~7분 간격 수시운행 / 도보 15~20분)</p>
        </div>
        <div className={styles.directionItem}>
          <h4>버스</h4>
          <p>안산 문화숲의 광장 하차: 88번</p>
          <p>동남레이크빌 하차: 99-1번, 3100번</p>
          <p>대림호수공원아파트 하차 : 77, 98, 3</p>
        </div>
        <div className={styles.directionItem}>
          <h4>자가용</h4>
          <p>네비게이션: AW컨벤션 검색</p>
          <p>(경기 안산시 단원구 광덕1로 171)</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
