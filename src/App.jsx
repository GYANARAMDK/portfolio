import { useState, useRef } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Project from "./Components/Project";
// import Introduction from './Components/Introduction'
import "./index.css";
function App() {
  const [activePage, setActivePage] = useState("Home");

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);
 
  const handlePageChange = (page) => {
    setActivePage(page);
    const ref = {
      Home: homeRef,
      AboutMe: aboutMeRef,
      Services: servicesRef,
      Project: projectsRef,
      ContactMe: contactMeRef,
    };
    console.log(activePage)
    ref[page].current.scrollIntoView({ behavior: "smooth" });
  };
  
  
  return (
    <>
      <Header handlePageChange={handlePageChange} />
      {/* <Introduction/> */}
      <Home ref={homeRef} />
      {/* <div title="This is a tooltip">Hover over me!</div> */}
      <AboutMe ref={aboutMeRef} />
      <Project ref={projectsRef}/>
      <ContactMe ref={contactMeRef} />
    </>
  );
}

export default App;
