import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Intro/>
      <About/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;



