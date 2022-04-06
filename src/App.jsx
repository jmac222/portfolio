import Landing from "./components/Landing";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./layout/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navigation />
      <Landing />
      <Projects />
    </>
  );
}

export default App;
