import ChartResult from "./ui/ChartResult";
import LineChart from "./ui/LineChart";
import { useEffect, useState } from "react";
import styles from "./ChartComponent.module.css";

const ChartComponent = () => {
  const [sysLevel, setSysLevel] = useState();
  const [sysHRate, setSysHRate] = useState();
  const [diaLevel, setDiaLevel] = useState();
  const [diaHRate, setDiaHRate] = useState();

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

      data.map((item) => {
        if (item.name == "Jessica Taylor") {
          // systolic
          setSysLevel(item.diagnosis_history[0].blood_pressure.systolic.levels);
          setSysHRate(item.diagnosis_history[0].blood_pressure.systolic.value);
          //diastolic
          setDiaLevel(
            item.diagnosis_history[0].blood_pressure.diastolic.levels
          );
          setDiaHRate(item.diagnosis_history[0].blood_pressure.diastolic.value);
        }
      });
    }
    fetchPatients();
  }, [authString]);

  return (
    <div className={styles.chartContainer}>
      <LineChart />
      <div>
        <ChartResult
          title="Systolic"
          hRate={sysHRate}
          arrowDirection="up"
          level={sysLevel}
          color="#E66FD2"
        />
        <hr />
        <ChartResult
          title="Diastolic"
          hRate={diaHRate}
          arrowDirection="down"
          level={diaLevel}
          color="#8C6FE6"
        />
      </div>
    </div>
  );
};

export default ChartComponent;
