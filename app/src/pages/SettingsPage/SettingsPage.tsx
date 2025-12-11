import styles from "../SettingsPage/SettingsPage.module.scss";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

function SettingsPage() {
  return (
    <div className={styles.SettingsPage}>
      <ToggleSwitch />
    </div>
  );
}

export default SettingsPage;
