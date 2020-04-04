import React from "react";
import "../App.css";
import styled from "styled-components";

const PExp = styled.p`
  margin-top: 3rem;
  padding: 2rem;
  background: white;
  color: black;
  border-top: 5px solid #f93f2e;
  border-bottom: 5px solid #f93f2e;
`;
const Explanation = ({ desc }) => {
  return (
    <div className="content">
      <PExp>{desc}</PExp>
    </div>
  );
};
export default Explanation;
