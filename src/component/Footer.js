import React from "react";
import "../App.css";
import styled from "styled-components";

const DivFooter = styled.div`
  margin: 1rem;
`;
const DivContFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = ({ date }) => {
  return (
    <DivContFooter className="content">
      <p>{date} </p>
      <DivFooter>
        <img
          src="https://fontmeme.com/permalink/200404/5b813a9e43bcf7a605cf1ea75c11b023.png"
          alt="nasa font"
          height="42"
        ></img>
      </DivFooter>
    </DivContFooter>
  );
};
export default Footer;
