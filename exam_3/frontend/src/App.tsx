import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Routing from "./Components/Routing/Routing";

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routing />
    </div>
  );
}

export default App;
