import styles from "./DiagnosticList.module.css";

const DiagnosticList = () => {
  return (
    <div className={styles.container}>
      <h2>DiagnosticList</h2>
      <table>
        <tr>
          <th>Problem/Diagnosis</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
};

export default DiagnosticList;
