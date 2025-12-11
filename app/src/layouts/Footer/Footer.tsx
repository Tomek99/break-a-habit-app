import styles from "./Footer.module.scss";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";

function Footer() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        darkMode ? `${styles.BarDark} ${styles.Footer}` : `${styles.Footer}`
      }
    >
      <p className={styles.pContent}>Small steps, big results.</p>
      <p className={styles.pContent}>Tomasz Skupień ©</p>
    </div>
  );
}

export default Footer;
