import styles from "./ChartResult.module.css";

const ChartResult = ({ title, hRate, level, color, arrowDirection }) => {
  let arrow;

  if (arrowDirection == "down") {
    arrow = (
      <svg width="9.999" height="5.479" viewBox="0 0 9.999 5.479">
        <path
          id="ArrowDown"
          d="M333.518-544.8l-4.177-4.178a.673.673,0,0,1-.136-.193.532.532,0,0,1-.05-.228.606.606,0,0,1,.165-.424.56.56,0,0,1,.434-.18h8.8a.56.56,0,0,1,.434.181.611.611,0,0,1,.165.423,1.85,1.85,0,0,1-.186.421l-4.177,4.177a.962.962,0,0,1-.3.21.851.851,0,0,1-.338.066.851.851,0,0,1-.339-.066A.963.963,0,0,1,333.518-544.8Z"
          transform="translate(-329.155 549.999)"
          fill="#072635"
        />
      </svg>
    );
  }

  if (arrowDirection == "up") {
    arrow = (
      <svg width="10" height="5.479" viewBox="0 0 10 5.479">
        <path
          d="M4.364,5.2.186,1.024A.673.673,0,0,1,.05.832.532.532,0,0,1,0,.6.606.606,0,0,1,.165.18.56.56,0,0,1,.6,0H9.4a.56.56,0,0,1,.434.181A.611.611,0,0,1,10,.6a1.85,1.85,0,0,1-.186.421L5.636,5.2a.962.962,0,0,1-.3.21.9.9,0,0,1-.677,0A.963.963,0,0,1,4.364,5.2Z"
          transform="translate(10 5.479) rotate(180)"
          fill="#072635"
        />
      </svg>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <span style={{ backgroundColor: color }}></span>
        <p className={styles.title}>{title}</p>
      </div>
      <h3>{hRate}</h3>
      <div className={styles.flex}>
        {arrow}
        <p>{level}</p>
      </div>
    </div>
  );
};

export default ChartResult;
