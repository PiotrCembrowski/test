import styles from "./Content.module.css";
import ChartComponent from "./ui/ChartComponent";

const Content = () => {
  return (
    <div className={styles.content}>
      <h2>Diagnosis History</h2>
      <ChartComponent />
    </div>
  );
};

export default Content;
