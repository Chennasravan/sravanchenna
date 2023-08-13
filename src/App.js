import "./App.css";
import Contact from "./Componets/Contact/Contact";
import Exp from "./Componets/Experience/Exp";
import Footer from "./Componets/Footer/Footer";
import Intro from "./Componets/Intro/Intro";
import Navbar from "./Componets/Navbar1/Navbar";
import Projects from "./Componets/Projects/Projects";
import Services1 from "./Componets/Services1/Services1";
import Testimonal from "./Componets/Testimonals/Testimonal";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services1/>
      <h1 id='Experience' align="center" style={{padding:"100px"}}>Experience</h1>
      <Exp/>
      <Projects/>
      <Testimonal/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
