import { useEffect, useState } from "react";
import styles from "./LeftBar.module.css";
import search from "/search.svg";

const LeftBar = () => {
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
    <div className={styles.leftbar}>
      <div className={styles.searchBar}>
        <h2>Patients</h2>
        <img src={search} alt="" />
      </div>
      <div className={styles.patientsList}>
        <ul>
          {patients.map((patient) => (
            <li key={patient.date_of_birth}>
              <img src={patient.profile_picture} alt="patient img" />
              <div>
                <p>{patient.name}</p>
                <p>
                  {patient.gender}, {patient.age}
                </p>
              </div>
              <div className={styles.loadingIcon}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
