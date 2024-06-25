import styles from "./InfoBoxItem.module.css";

const InfoBoxItem = ({ icon, title, value, state, bgColor }) => {
  return (
    <div className={styles.box} style={{ backgroundColor: bgColor }}>
      <img src={icon} alt="" />
      <p>{title}</p>
      <h3>{value}</h3>
      <p>{state}</p>
    </div>
  );
};

export default InfoBoxItem;
