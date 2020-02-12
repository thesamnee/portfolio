import React from "react";
import "./StartButton.css";

const StartButton = ({ lightClass, activateLogos }) => {

  return (
    <div class="btnContainer">
      <div className="buttonDiv" onClick={() => activateLogos()}>
        <img className="signature" src="../images/signature.png" alt="sam-nee-signature" />
      </div>
      <div className={lightClass}></div>
      <div className="insetCircle"></div>
    </div>
  );
};

export default StartButton;
