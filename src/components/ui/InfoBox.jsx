import { useEffect, useState } from "react";
import InfoBoxItem from "./InfoBoxItem";
import heartIcon from "/Heart.svg";
import respiratoryIcon from "/respiratory.svg";
import temperatureIcon from "/temperature.svg";
import styles from "./InfoBox.module.css";

const InfoBox = () => {
  const username = "coalition";
  const password = "skills-test";
  let authString = btoa(username + ":" + password);

  const [heartRate, setHeartRate] = useState();
  const [heartLevel, setHeartLevel] = useState();
  const [respiratoryRate, setRespiratoryRate] = useState();
  const [respiratoryLevel, setRespiratoryLevel] = useState();
  const [temperature, setTemperature] = useState();
  const [temperatureLevel, setTemperatureLevel] = useState();

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
          const base = item.diagnosis_history[0];
          setHeartRate(base.heart_rate.value);
          setRespiratoryRate(base.respiratory_rate.value);
          setTemperature(base.temperature.value);

          setHeartLevel(base.heart_rate.levels);
          setRespiratoryLevel(base.respiratory_rate.levels);
          setTemperatureLevel(base.temperature.levels);
        }
      });
    }
    fetchPatients();
  }, [authString]);

  let svgIcon;
  svgIcon = (
    <svg width="9.999" height="5.479" viewBox="0 0 9.999 5.479">
      <path
        id="ArrowDown"
        d="M333.518-544.8l-4.177-4.178a.673.673,0,0,1-.136-.193.532.532,0,0,1-.05-.228.606.606,0,0,1,.165-.424.56.56,0,0,1,.434-.18h8.8a.56.56,0,0,1,.434.181.611.611,0,0,1,.165.423,1.85,1.85,0,0,1-.186.421l-4.177,4.177a.962.962,0,0,1-.3.21.851.851,0,0,1-.338.066.851.851,0,0,1-.339-.066A.963.963,0,0,1,333.518-544.8Z"
        transform="translate(-329.155 549.999)"
        fill="#072635"
      />
    </svg>
  );

  return (
    <div className={styles.container}>
      <InfoBoxItem
        icon={respiratoryIcon}
        title="Respiratory Rate"
        value={`${respiratoryRate} bpm`}
        state={respiratoryLevel}
        bgColor="#E0F3FA"
      />
      <InfoBoxItem
        icon={temperatureIcon}
        title="Temperature"
        value={`${temperature}`}
        state={temperatureLevel}
        bgColor="#FFE6E9"
      />
      <InfoBoxItem
        icon={heartIcon}
        title="Heart Rate"
        value={`${heartRate} bpm`}
        state={heartLevel}
        bgColor="#FFE6F1"
        arrowIcon={svgIcon}
      />
    </div>
  );
};

export default InfoBox;
