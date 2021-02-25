import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui//styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#424242",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#f57c00",
    },
  },
  typography: {
    fontFamily: ["Libre Franklin"],
  },
});

function App() {
  const [faders, setFaders] = useState([]);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () =>
    aboutRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToSkills = () =>
    skillsRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToProjects = () =>
    projectsRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -400px 0px",
  };
  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  useEffect(() => {
    setFaders(document.querySelectorAll(".fade-in, .fade-in2"));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar
          aboutScroll={scrollToAbout}
          projectsScroll={scrollToProjects}
          skillsScroll={scrollToSkills}
          contactScroll={scrollToContact}
        />
        <Intro scroll={scrollToAbout} />
        <About aboutRef={aboutRef} scroll={scrollToProjects} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </div>
    </ThemeProvider>
  );
}

export default App;
