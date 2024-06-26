import styles from "./LabResults.module.css";
import LabResultsLoop from "./ui/LabResultsLoop.jsx";

const LabResults = () => {
  return (
    <div className={styles.container}>
      <h2>Lab Results</h2>
      <LabResultsLoop />
    </div>
  );
};

export default LabResults;
