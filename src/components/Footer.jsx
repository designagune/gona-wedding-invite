import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <p className={styles.closingMessage}>Our New Beginning</p>
      <p className={styles.copyright}>
        © 2025 관중 & 유진. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
