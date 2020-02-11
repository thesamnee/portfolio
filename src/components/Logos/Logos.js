import './Logos.css'
import React from 'react';
import CSS from './CSSLogo.png';
import JS from './js.png';
import Mongo from './mongo.png';
import MySQL from './mysql.png';
import ReactLogo from './react.png';
import HTML from './html5.png';

const Logos = ({ cssClass }) => {
  return (
    <div className={cssClass}>
      <img src={CSS} className="logoImg" alt="css-logo" />
      <img src={JS} className="logoImg" alt="js-logo" />
      <img src={Mongo} className="logoImg" alt="mongo-logo" />
      <img src={MySQL} className="logoImg" alt="sql-logo" />
      <img src={ReactLogo} className="logoImg" alt="react-logo" />
      <img src={HTML} className="logoImg" alt="html-logo" />
    </div>
  );
};

export default Logos;
