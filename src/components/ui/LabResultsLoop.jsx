import { useState, useEffect } from "react";
import LabItem from "./LabItem";

const LabResultsLoop = () => {
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
    <ul>
      {patients.map((patient) => {
        if (patient.name == "Jessica Taylor") {
          return patient.lab_results.map((item) => {
            return <LabItem title={item} />;
          });
        }
      })}
    </ul>
  );
};

export default LabResultsLoop;
