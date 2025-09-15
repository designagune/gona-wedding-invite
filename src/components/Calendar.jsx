import React from 'react';
import styles from './Calendar.module.scss';

const Calendar = () => {
  const year = 2025;
  const month = '11';
  const weddingDay = 23;

  // Simple calendar data for Nov 2025 (starts on a Saturday)
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dates = [
    ...Array(6).fill(null), // Offset for Saturday start
    ...Array.from({ length: 30 }, (_, i) => i + 1)
  ];

  return (
    <div className={styles.calendarSection}>
      <h3>{year}년 {month}월</h3>
      <div className={styles.calendarGrid}>
        {days.map(day => <div key={day} className={styles.dayName}>{day}</div>)}
        {dates.map((date, index) => (
          <div key={index} className={`${styles.dateCell} ${date === weddingDay ? styles.weddingDay : ''}`}>
            {date}
            {date === weddingDay && <span className={styles.heart}>♥</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
