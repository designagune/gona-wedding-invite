import React from "react";
import styles from "./Intro.module.scss";
import visualImage from "../assets/images/visual.jpg";

const Intro = () => {
  return (
    <div className={styles.introSection}>
      <div className={styles.intro}>
        <img src={visualImage} alt="Wedding" className={styles.mainPhoto} />
      </div>

      <div className={styles.introText}>
        <div className={styles.name}>
          <span className={styles.gona}>김관중</span>
          <span className={styles.dot}>·</span>
          <span>이유진</span>
        </div>
        <p className={styles.date}>2025년 11월 23일 일요일 오후 3시 50분</p>
        <p className={styles.location}>안산 AW웨딩컨벤션 그랜드볼룸</p>

        <div className={styles.invitation}>
          <div className={styles.invitationTitle}>
            <span>INVITATION</span>
            <h2 className={styles.invitationHead}>소중한 분들을 초대합니다</h2>
          </div>

          <p className={styles.invitationMessage}>
            예전, 아주 작은 인연이 저희를 연인으로 만들었고
            <br />
            마침내, 그 인연으로 저희가 하나가 됩니다.
            <br />
            작은 사랑으로 하나의 커다란 열매를 맺고
            <br />
            이제 또 다른 모습으로 사랑하고자 하는 두 사람,
            <br />
            오셔서 지켜봐 주시고 축하해 주십시오.
            <br />늘 그 인연을 생각하며 살겠습니다.
          </p>
        </div>

        <div className={styles.names}>
          <div className={styles.namesMain}>
            김용균 · 차정숙의 <div className={styles.order}>아들</div>{" "}
            <strong>관중</strong>
          </div>
          <div className={styles.namesMain}>
            이진호 · 이은경의 <div className={styles.order}>장녀</div>{" "}
            <strong>유진</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
