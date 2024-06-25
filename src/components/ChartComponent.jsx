import ChartResult from "./ui/ChartResult";
import LineChart from "./ui/LineChart";
import styles from "./ChartComponent.module.css";

const ChartComponent = () => {
  return (
    <div className={styles.chartContainer}>
      <LineChart />
      <div>
        <ChartResult
          title="Systolic"
          hRate="160"
          arrowDirection="up"
          level="Higher than Average"
          color="#E66FD2"
        />
        <hr />
        <ChartResult
          title="Diastolic"
          hRate="78"
          arrowDirection="down"
          level="Lower than Average"
          color="#8C6FE6"
        />
      </div>
    </div>
  );
};

export default ChartComponent;
