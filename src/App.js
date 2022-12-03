import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Art from "./components/Art";
import Music from "./components/Music";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects/>
      <Background />
      <Skills />
      <Art />  
      <Music />
      <Contact />
    </div>
  );
}

export default App;
