import ChartResult from "./ui/ChartResult";
import LineChart from "./ui/LineChart";
import { useEffect, useState } from "react";
import styles from "./ChartComponent.module.css";

const ChartComponent = () => {
  const [patients, setPatients] = useState([]);

  const username = "coalition";
  const password = "skills-test";
  let authString = btoa(username + ":" + password);

  useEffect(() => {
    async function fetchPatients() {
      const response = await fetch(
        `https://fedskillstest.coalitiontechnologies.workers.dev/`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `Basic ${authString}`,
          }),
        }
      );

      if (!response.ok) {
        const error = new Error("An error occured while fetching the events");
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const data = await response.json();

      setPatients(data);
    }
    fetchPatients();
  }, [patients, authString]);

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
