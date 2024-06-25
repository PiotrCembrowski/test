import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import months from "./../../utils/data.json";
import styles from "./LineChart.module.css";

Chart.register(CategoryScale);

const LineChart = () => {
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
    <div className={styles.chartBox}>
      <div className={styles.chartBoxTitle}>
        <h3>Blood Pressure</h3>
        <div>
          <p>Last 6 Months</p>
          <svg width="10.646" height="6" viewBox="0 0 10.646 6">
            <path
              id="expand_more_FILL0_wght300_GRAD0_opsz24"
              d="M271.741-608.384a.958.958,0,0,1-.335-.057.827.827,0,0,1-.3-.2l-4.478-4.479a.722.722,0,0,1-.212-.52.7.7,0,0,1,.212-.53.715.715,0,0,1,.525-.217.715.715,0,0,1,.525.217l4.059,4.059,4.059-4.059a.722.722,0,0,1,.52-.212.7.7,0,0,1,.53.212.715.715,0,0,1,.217.525.715.715,0,0,1-.217.525l-4.478,4.479a.826.826,0,0,1-.3.2A.958.958,0,0,1,271.741-608.384Z"
              transform="translate(-266.42 614.384)"
            />
          </svg>
        </div>
      </div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
