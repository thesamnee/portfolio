import React, { Component } from "react";
import "./Portfolio.css";
import portfolioTitle from "./portfolio.png";
import portfolioArr from "../../portfolio.json";
import PortfolioItem from "./PortfolioItem.js";

class Portfolio extends Component {
  state = {
    portfolioArr
  };

  render() {
    return (
      <div>
          <div className="portfolioTitleContainer">
              <img src={portfolioTitle} alt="portfolio-title" className="portfolioTitle"/>
          </div>
        <div className="portfolioContainer">
          {this.state.portfolioArr.map(portfolioArr => (
            <PortfolioItem
              link={portfolioArr.link}
              img={portfolioArr.img}
              alt={portfolioArr.alt}
              title={portfolioArr.title}
              desc={portfolioArr.desc}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
