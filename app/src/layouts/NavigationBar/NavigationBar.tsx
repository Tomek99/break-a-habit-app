import styles from "./NavigationBar.module.scss";
import linkData from "../../data/navBarLinks.json";
import NavBarLink from "../../components/NavBarLink/NavBarLink";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
function NavigationBar() {
  // #F8F9FB
  //background-color: #1e1e1e;
  const { darkMode } = useContext(DarkModeContext);
  return (
    <header
      className={
        darkMode
          ? `${styles.BarDark} ${styles.NavigationBar}`
          : ` ${styles.NavigationBar}`
      }
    >
      <nav className={styles.navBar}>
        <ul className={styles.ulContent}>
          {/* <span>LOGO</span> */}
          {linkData.map((item, i) => (
            <NavBarLink item={item} key={i} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
