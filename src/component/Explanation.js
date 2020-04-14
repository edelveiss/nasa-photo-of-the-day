import React from "react";
import "../App.css";
import styled from "styled-components";

const PExp = styled.p`
  margin-top: 2rem;
  padding: 1rem;
  background: #dfe2e5;
  color: black;
  font-size: 1rem;
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
