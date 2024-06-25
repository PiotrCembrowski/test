import ChartResult from "./ChartResult";
import { Line } from "react-chartjs-2";
import months from "./../../utils/data.json";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import styles from "./ChartComponent.module.css";

Chart.register(CategoryScale);

const ChartComponent = () => {
  const labels = months.map((data) => data.label);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [120, 115, 160, 112, 150, 158],
        fill: false,
        borderColor: "#E66FD2",
        tension: 0.4,
        pointBorderWidth: 5,
      },
      {
        label: "My First Dataset",
        data: [110, 65, 110, 90, 70, 78],
        fill: false,
        borderColor: "#8C6FE6",
        tension: 0.4,
        pointBorderWidth: 5,
      },
    ],
  };
  return (
    <div className={styles.chartContainer}>
      <Line data={data} className={styles.chartBox} />
      <div>
        <ChartResult
          title="Systolic"
          hRate="160"
          arrowDirection="up"
          level="Higher than Average"
          color="#E66FD2"
        />
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
