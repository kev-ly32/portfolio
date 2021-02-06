import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="name">Kevin Ly</h1>
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
      </a>
    </div>
  );
}

export default App;
