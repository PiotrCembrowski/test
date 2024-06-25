import Content from "./components/Content";
import LeftBar from "./components/LeftBar";
import PatientInfo from "./components/PatientInfo";
import TopBar from "./components/ui/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <main>
        <LeftBar />
        <Content />
        <PatientInfo />
      </main>
    </>
  );
}

export default App;
