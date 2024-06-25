import InfoBoxItem from "./InfoBoxItem";
import heartIcon from "/Heart.svg";
import respiratoryIcon from "/respiratory.svg";
import temperatureIcon from "/temperature.svg";
import styles from "./InfoBox.module.css";

const InfoBox = () => {
  return (
    <div className={styles.container}>
      <InfoBoxItem
        icon={respiratoryIcon}
        title="Respiratory Rate"
        value="20 bpm"
        state="Normal"
        bgColor="#E0F3FA"
      />
      <InfoBoxItem
        icon={temperatureIcon}
        title="Temperature"
        value="98.6 &deg; F"
        state="Normal"
        bgColor="#FFE6E9"
      />
      <InfoBoxItem
        icon={heartIcon}
        title="Heart Rate"
        value="78 bpm"
        state="Lower Than Average"
        bgColor="#FFE6F1"
      />
    </div>
  );
};

export default InfoBox;
