import React from 'react';
import styles from './AccountInfo.module.scss';

const AccountInfo = () => {

  const handleCopy = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber)
      .then(() => {
        alert('계좌번호가 복사되었습니다.');
      })
      .catch(err => {
        alert('복사에 실패했습니다.');
      });
  };

  return (
    <div className={styles.accountInfoSection}>
      <h3>마음 전하실 곳</h3>
      <p className={styles.infoMessage}>축하해주시는 모든 분들께 진심으로 감사드립니다.</p>
      
      <div className={styles.accountDetails}>
        <h4>신랑측 계좌</h4>
        <div className={styles.accountItem}>
          <p>신랑 김건</p>
          <p className={styles.accountNumber}>OO은행 123-456-789012</p>
          <button onClick={() => handleCopy('123-456-789012')}>복사</button>
        </div>
      </div>

      <div className={styles.accountDetails}>
        <h4>신부측 계좌</h4>
        <div className={styles.accountItem}>
          <p>신부 이하나</p>
          <p className={styles.accountNumber}>XX은행 987-654-321098</p>
          <button onClick={() => handleCopy('987-654-321098')}>복사</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
