import styles from "./Content.module.css";
import DiagnosticList from "./DiagnosticList";
import ChartComponent from "./ChartComponent";
import InfoBox from "./ui/InfoBox";

const Content = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Diagnosis History</h2>
        <ChartComponent />
        <InfoBox />
      </div>
      <DiagnosticList />
    </div>
  );
};

export default Content;
