import React, { Component } from "react";
import StartButton from "./components/StartButton/StartButton.js";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Logos from "./components/Logos/Logos"
import About from "./components/About/About"
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import Contact from "./components/Contact/Contact.js"
// import { AnimatedSwitch } from 'react-router-transition';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  state={
    clicked: false,
    mainLogoClass: "logoPosition1" ,
    logoImgClass: "logoImg1",
    lightClass: "light",
    scrollIndicatorClass: "arrow"
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.scrollListener);
  }

  scrollListener = () => {
      this.setState({
        scrollIndicatorClass: "noArrow"
      });
      this.activateLogos();
      console.log("scrolled")
  }

  activateLogos = () => {
   this.setState({mainLogoClass: "logoPosition2"})
    this.setState({logoImgClass: "logoImg2"})
    this.setState({lightClass: "light-active"})
  }

  render() {
    return (
      <div>
        <ScrollIndicator scrollerClass={this.state.scrollIndicatorClass} />
        <StartButton lightClass={this.state.lightClass} activateLogos={this.activateLogos} />
        <p className="techSkills">Technical Skills</p>
        <Logos imgClass={this.state.logoImgClass} mainClass={this.state.mainLogoClass} />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  };
};

export default App;
