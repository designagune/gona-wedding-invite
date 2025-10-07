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
          <span>카카오 맵</span>
        </a>
        <a
          href={naverMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapButton}
          style={{ flex: 1 }}
        >
          <span>네이버 지도</span>
        </a>
      </div>
      <div className={styles.directions}>
        <div className={styles.directionItem}>
          <h4>지하철</h4>
          <p>4호선 중앙역, 고잔역 2번 출구 (도보 15분)</p>
          <p>
            4호선 고잔역 2번 출구 횡단보도 앞 - 셔틀버스
            <br />
            (5분~7분 간격 수시운행)
          </p>
        </div>
        <div className={styles.directionItem}>
          <h4>버스</h4>
          <p>안산문화숲의광장 하차: 10, 88, 123</p>
          <p>동남레이크빌 하차: 77, 98, 99-1, 314, 3100</p>
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
