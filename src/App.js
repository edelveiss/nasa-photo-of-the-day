import React from "react";
import PhotoContent from "./component/PhotoContent";
import "./App.css";
import logo from "./assets/nasa-logo.png";
import styled from "styled-components";

const ImgMainTitle = styled.img`
  margin-top: 2rem;
  margin-left: 4rem;
`;
//<H1MainTitle>Astronomy Photo Of The Day</H1MainTitle>
//https://fontmeme.com/permalink/200403/78045ed9ead72a613f549a5f6feb9cfd.png

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img className="App-logo" src={logo} alt="nasa official logo"></img>

        <ImgMainTitle
          src="https://fontmeme.com/permalink/200404/d95cf155dae4545bbada2a7d664fcc3e.png"
          alt="nasa font"
          height="42"
        ></ImgMainTitle>
      </div>
      <PhotoContent />
    </div>
  );
}

export default App;
