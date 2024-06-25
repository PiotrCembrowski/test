import styles from "./Content.module.css";
import ChartComponent from "./ui/ChartComponent";
import InfoBox from "./ui/InfoBox";

const Content = () => {
  return (
    <div className={styles.content}>
      <h2>Diagnosis History</h2>
      <ChartComponent />
      <InfoBox />
    </div>
  );
};

export default Content;
