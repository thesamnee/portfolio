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
    clicked: false
  }

  render() {
    return (
      <div>
        <StartButton />
        <Logos />
        <About />
        <Portfolio />
      </div>
    );
  };
};

export default App;
