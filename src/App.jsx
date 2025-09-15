import React from 'react';
import Intro from './components/Intro';
import Calendar from './components/Calendar';
import Gallery from './components/Gallery';
import Location from './components/Location';
import AccountInfo from './components/AccountInfo';
import Guestbook from './components/Guestbook';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Intro />
      <Calendar />
      <Gallery />
      <Location />
      <AccountInfo />
      <Guestbook />
    </div>
  );
}

export default App;
