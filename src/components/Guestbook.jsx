import React, { useState } from 'react';
import styles from './Guestbook.module.scss';

const Guestbook = () => {
  // NOTE: This is a UI-only implementation.
  // Form submission and message persistence require a backend server.

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert('이름과 메시지를 모두 입력해주세요.');
      return;
    }
    alert('방명록이 등록되었습니다. (실제로는 저장되지 않습니다)');
    setName('');
    setMessage('');
  };

  // Dummy data
  const dummyMessages = [
    { id: 1, name: '홍길동', message: '두 분의 결혼을 진심으로 축하합니다! 행복하세요!', date: '2025.11.22' },
    { id: 2, name: '김영희', message: '건이, 하나! 너무 예쁜 커플이야. 결혼 축하해!', date: '2025.11.21' },
  ];

  return (
    <div className={styles.guestbookSection}>
      <h3>축하의 마음을 전해주세요</h3>
      <form className={styles.guestbookForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input 
            type="text" 
            placeholder="이름" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className={styles.formGroup}>
          <textarea 
            placeholder="축하 메시지를 남겨주세요." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">글 남기기</button>
      </form>
      <div className={styles.guestbookList}>
        {dummyMessages.map(msg => (
          <div key={msg.id} className={styles.guestbookEntry}>
            <div className={styles.entryHeader}>
              <span className={styles.entryName}>{msg.name}</span>
              <span className={styles.entryDate}>{msg.date}</span>
            </div>
            <p className={styles.entryMessage}>{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
