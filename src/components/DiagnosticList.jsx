import { useEffect, useState } from "react";
import styles from "./DiagnosticList.module.css";

const DiagnosticList = () => {
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
    <div className={styles.container}>
      <h2>Diagnostic List</h2>
      <table>
        <tr className={styles.topbar}>
          <th>Problem/Diagnosis</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </table>
      <table className={styles.scrollContent}>
        {patients.map((patient) => {
          if (patient.name == "Jessica Taylor") {
            const diagnosticList = patient.diagnostic_list;
            return diagnosticList.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                </tr>
              );
            });
          }
        })}
      </table>
    </div>
  );
};

export default DiagnosticList;
