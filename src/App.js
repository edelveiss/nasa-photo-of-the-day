import React from "react";
import PhotoContent from "./component/PhotoContent";
import "./App.css";
import logo from "./assets/nasa-logo.png";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img className="App-logo" src={logo} alt="nasa official logo"></img>
        <h1>Astronomy Photo Of The Day</h1>
      </div>
      <PhotoContent />
    </div>
  );
}

export default App;
