import React, { Component } from "react";
import StartButton from "./components/StartButton/StartButton.js";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Logos from "./components/Logos/Logos"
import About from "./components/About/About"
// import { AnimatedSwitch } from 'react-router-transition';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  state={
    clicked: false,
    mainLogoClass: "logoPosition1" ,
    logoImgClass: "logoImg1"
  }

  activateLogos = () => {
    this.state.mainLogoClass === "logoPosition1" ? this.setState({mainLogoClass: "logoPosition2"}) : this.setState({mainLogoClass: "logoPosition1"})
    this.state.logoImgClass === "logoImg1" ? this.setState({logoImgClass: "logoImg2"}) : this.setState({logoImgClass: "logoImg1"})
  }

  render() {
    return (
      <div>
        <StartButton activateLogos={this.activateLogos} />
        <Logos imgClass={this.state.logoImgClass} mainClass={this.state.mainLogoClass} />
        <About />
        <Portfolio />
      </div>
    );
  };
};

export default App;
