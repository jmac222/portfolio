import Landing from "./components/Landing";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./layout/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Landing />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
