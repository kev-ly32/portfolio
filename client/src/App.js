import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui//styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#424242",
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
  const projectsRef = useRef(null);

  const scrollToAbout = () =>
    aboutRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToProjects = () =>
    projectsRef.current.scrollIntoView({ behavior: "smooth" });

  const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px",
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
        <Navbar />
        <Intro scroll={scrollToAbout} />
        <About aboutRef={aboutRef} scroll={scrollToProjects} />
        <Projects projectsRef={projectsRef} />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
