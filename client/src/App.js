import React from "react";
import Navbar from "./components/Navbar";

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
        {/* <h1 className="name">Kevin Ly</h1>
      <a
        href="https://flow-employee-database.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Employee Database
      </a>
      <br />
      <a
        href="https://aptitudebank.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Apitude Bank
      </a>
      <br />
      <a
        href="https://have-it-noted.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Noted
      </a> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
