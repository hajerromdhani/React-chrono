import React from "react";
import ReactDOM from "react-dom";
import Chrono from "./Chrono";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Chrono />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
