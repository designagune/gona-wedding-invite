import React, { useState } from "react";
import styles from "./AccountInfo.module.scss";

const AccountInfo = () => {
  const [openAccordion, setOpenAccordion] = useState(null); // 'groom' or 'bride'

  const handleCopy = (accountNumber) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        alert("계좌번호가 복사되었습니다.");
      })
      .catch((err) => {
        alert("복사에 실패했습니다.");
      });
  };

  const toggleAccordion = (accordionName) => {
    setOpenAccordion(openAccordion === accordionName ? null : accordionName);
  };

  const renderAccountItem = (name, accountNumber) => (
    <div className={styles.accountItem}>
      <p className={styles.accountName}>{name}</p>
      <p className={styles.accountNumber}>{accountNumber}</p>
      <button onClick={() => handleCopy(accountNumber)}>복사</button>
    </div>
  );

  return (
    <div className={styles.accountInfoSection}>
      <div className={styles.accountInfoTitle}>
        <span>GIVING</span>
        <h2 className={styles.accountInfoHead}>마음 전하실 곳</h2>
      </div>
      <p className={styles.infoMessage}>
        축하해주시는 모든 분들께 진심으로 감사드립니다.
      </p>

      <div className={styles.accordionContainer}>
        {/* Groom's Side Accordion */}
        <div className={styles.accordionItem}>
          <div
            className={`${styles.accordionHeader} ${
              openAccordion === "groom" ? styles.open : ""
            }`}
            onClick={() => toggleAccordion("groom")}
          >
            <span>신랑측 계좌</span>
            <span className={styles.toggleIcon}>{"▼"}</span>
          </div>
          <div
            className={`${styles.accordionContent} ${
              openAccordion === "groom" ? styles.open : ""
            }`}
          >
            {/* <p className={styles.accountPerson}>신랑 김관중</p> */}
            {renderAccountItem("김관중", "하나은행 01027791068207")}
            {/* <p className={styles.accountPerson}>신랑 아버님</p> */}
            {renderAccountItem("김용균", "농협은행 589-12-023830")}
            {/* <p className={styles.accountPerson}>신랑 어머님</p> */}
            {renderAccountItem("차정숙", "농협은행 356-1533-2757-13")}
          </div>
        </div>

        {/* Bride's Side Accordion */}
        <div className={styles.accordionItem}>
          <div
            className={`${styles.accordionHeader} ${
              openAccordion === "bride" ? styles.open : ""
            }`}
            onClick={() => toggleAccordion("bride")}
          >
            <span>신부측 계좌</span>
            <span className={styles.toggleIcon}>{"▼"}</span>
          </div>
          <div
            className={`${styles.accordionContent} ${
              openAccordion === "bride" ? styles.open : ""
            }`}
          >
            {/* <p className={styles.accountPerson}>신부 이유진</p> */}
            {renderAccountItem("이유진", "신한은행 608-11-012800")}
            {/* <p className={styles.accountPerson}>신부 아버님</p> */}
            {renderAccountItem("이은경\n(이진호)", "농협은행 356-0605-8150-83")}
            {/* <p className={styles.accountPerson}>신부 어머님</p> */}
            {renderAccountItem("이은경", "국민은행 247-24-0015-847")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
