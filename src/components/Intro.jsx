import React from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.introSection}>
      <div className={styles.intro}>
        <img
          src="https://images.theirmood.com/resources/87339/card/AZuQ3rXlpi/SquMBTFJQm.jpg?f=webp&w=1280"
          alt="Wedding"
          className={styles.mainPhoto}
        />
      </div>

      <div className={styles.introText}>
        <div className={styles.name}>
          <span>김관중</span>
          <span className={styles.dot}>·</span>
          <span>이유진</span>
        </div>
        <p className={styles.date}>2025년 11월 23일 일요일 오후 3시 40분</p>
        <p className={styles.location}>AW컨벤션 안산</p>

        <div className={styles.invitation}>
          <div className={styles.invitationTitle}>
            <span>INVITATION</span>
            <h2 className={styles.invitationHead}>소중한 분들을 초대합니다</h2>
          </div>

          <p className={styles.invitationMessage}>
            서로 마주보며 다져온 사랑을
            <br />
            이제 함께 한 곳을 바라보며 걸어갈 수 있는
            <br />
            큰 사랑으로 키우고자 합니다.
            <br />
            저희 두 사람이 사랑의 이름으로 지켜나갈 수 있도록
            <br />
            가까이에서 축복해주시면 더없는 기쁨이겠습니다.
          </p>
        </div>

        <div className={styles.names}>
          <div className={styles.namesMain}>
            김용균 · 차정숙의 <div className={styles.order}>아들</div>{" "}
            <strong>관중</strong>
          </div>
          <div className={styles.namesMain}>
            이진호 · 이은경의 <div className={styles.order}>딸</div>{" "}
            <strong>유진</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
