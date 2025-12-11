// import  from "./ToggleSwitch.module.scss";
import { useContext } from "react";
import styles from "./ToggleSwitch.module.scss";
import Switch from "@mui/material/Switch";
import { DarkModeContext } from "../../context/DarkModeContext/DarkModeContext";
const label = { inputProps: { "aria-label": "Switch demo" } };

function ToggleSwitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={styles.ToggleSwitch}>
      <span>Dark Mode:</span>
      <Switch {...label} checked={darkMode} onChange={toggleDarkMode} />
    </div>
  );
}

export default ToggleSwitch;
