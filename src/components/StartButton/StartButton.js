import React from "react";
import "./StartButton.css";

const StartButton = () => {
  return (
    <div class="btnContainer">
      <div className="buttonDiv">
        <img className="signature" src="../images/signature.png" alt="sam-nee-signature" />
      </div>
      <div className="insetCircle"></div>
    </div>
  );
};

export default StartButton;
