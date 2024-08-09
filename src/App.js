import About from "./components/About/about";
import Education from "./components/Education/education";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";



function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Intro/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;



