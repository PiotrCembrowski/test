import BioSection from "./BioSection";
import styles from "./PatientInfo.module.css";

const PatientInfo = () => {
  return (
    <div className={styles.container}>
      <BioSection />
    </div>
  );
};

export default PatientInfo;
