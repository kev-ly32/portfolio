import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
