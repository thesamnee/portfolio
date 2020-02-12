import './Logos.css'
import React from 'react';
import CSS from './CSSLogo.png';
import JS from './js.png';
import Mongo from './mongo.png';
import MySQL from './mysql.png';
import ReactLogo from './react.png';
import HTML from './html5.png';

const Logos = ({ mainClass, imgClass }) => {
  return (
    <div className={mainClass}>
      <img src={CSS} className={imgClass} alt="css-logo" />
      <img src={JS} className={imgClass} alt="js-logo" />
      <img src={Mongo} className={imgClass} alt="mongo-logo" />
      <img src={MySQL} className={imgClass} alt="sql-logo" />
      <img src={ReactLogo} className={imgClass} alt="react-logo" />
      <img src={HTML} className={imgClass} alt="html-logo" />
    </div>
  );
};

export default Logos;
