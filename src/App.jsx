import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
import AboutMe from "./components/About-me"
import ContactMe from "./components/Contact-me"
import Experience from "./components/Experience"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <AboutMe/>
      <Skills />
      <Experience/>
      <Projects />
      <hr />
      <ContactMe/>
      <Footer />
    </>
  )
}

export default App
