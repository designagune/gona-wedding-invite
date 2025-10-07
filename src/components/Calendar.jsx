import React, { useState, useEffect } from "react";
import styles from "./Calendar.module.scss";

const Calendar = () => {
  const year = 2025;
  const month = "11";
  const weddingDay = 23;

  // Simple calendar data for Nov 2025 (starts on a Saturday)
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dates = [
    ...Array(6).fill(null), // Offset for Saturday start
    ...Array.from({ length: 30 }, (_, i) => i + 1),
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-11-23T15:50:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.calendarSection}>
      <h3>
        {year}.{month}.{weddingDay}
      </h3>
      <div className={styles.calendarTime}>일요일 오후 3시 50분</div>
      <div className={styles.divider}></div>
      <div className={styles.calendarGrid}>
        {days.map((day) => (
          <div key={day} className={styles.dayName}>
            {day}
          </div>
        ))}
        {dates.map((date, index) => (
          <div
            key={index}
            className={`${styles.dateCell} ${
              date === weddingDay ? styles.weddingDay : ""
            }`}
          >
            {date}
            {date === weddingDay && <span className={styles.heart}>♥</span>}
          </div>
        ))}
      </div>
      <div className={styles.countdown}>
        <p>부부가 되기까지 남은 날짜</p>
        <div className={styles.timer}>
          {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분{" "}
          {timeLeft.seconds}초
        </div>
      </div>
    </div>
  );
};

export default Calendar;
