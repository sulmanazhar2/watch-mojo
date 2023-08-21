import FAQ from "./components/faq/faq.component";
import ReadyToStartProject from "./components/ready-to-start-project/ready-to-start-project.component";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <FAQ />
      <ReadyToStartProject />
    </div>
  );
};

export default App;
