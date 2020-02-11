import React from 'react';
import './Portfolio.css'

const PortfolioItem = ({link, img, alt, title, desc}) => {
    return(
      <div className="portfolio-item">
      <a href={link}>
        <img className="portfolio-img" src={img} alt={alt} />
        <p className="port-item-title">{title}</p>
        <p className="port-item-desc">{desc}</p>
      </a>
    </div>
    )
}
export default PortfolioItem