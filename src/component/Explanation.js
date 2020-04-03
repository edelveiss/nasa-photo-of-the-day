import React from "react";
import "../App.css";
const Explanation = ({ desc }) => {
  return (
    <div className="content">
      <p>{desc}</p>
    </div>
  );
};
export default Explanation;
