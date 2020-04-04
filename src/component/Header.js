import React from "react";
import "../App.css";
import styled from "styled-components";

const H2Title = styled.h2`
  margin-top: 2rem;
`;

const Header = ({ title }) => {
  return (
    <div className="content">
      <H2Title>{title}</H2Title>
    </div>
  );
};
export default Header;
//<iframe height="100vh" src={image}></iframe>
