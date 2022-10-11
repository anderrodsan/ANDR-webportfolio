import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Art from "./components/Art";
import Music from "./components/Music";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Art />  
      <Music />
    </div>
  );
}

export default App;
