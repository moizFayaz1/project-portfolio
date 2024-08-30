import Experience from "./Componenets/Experience/Experience";
import Hero from "./Componenets/Hero/Hero";
import Introduction from "./Componenets/Introduction/Introduction";
import Navbar from "./Componenets/Navbar/Navbar";
import Teachnologies from "./Componenets/Teachnologies/Teachnologies";
import Testimonials from "./Componenets/Testimonials/Testimonials";
import Planet from "./Componenets/Planet/Planet";
import Contact from "./Componenets/Contact/Contact";
import Footer  from "./Componenets/Footer/Footer";
import Projects from "./Componenets/Projects/Projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Introduction />
      <Experience />
      <Projects />
      <Teachnologies />
      <Testimonials />
      <Planet />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
