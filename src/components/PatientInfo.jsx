import BioSection from "./BioSection";
import LabResults from "./LabResults";
import styles from "./PatientInfo.module.css";

const PatientInfo = () => {
  return (
    <div className={styles.container}>
      <BioSection />
      <LabResults />
    </div>
  );
};

export default PatientInfo;
