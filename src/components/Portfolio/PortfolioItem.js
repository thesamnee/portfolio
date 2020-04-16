import React from 'react';
import './Portfolio.css'

const PortfolioItem = ({link, img, alt, title, desc, gitLink}) => {
    return(
      <div className="portfolio-item">
      <a href={link}>
        <img className="portfolio-img" src={img} alt={alt} />
        <p className="port-item-title">{title}</p>
        <p className="port-item-desc">{desc}</p>
        </a>
        <a className="gitLink" href={gitLink}>GitHub</a>
    </div>
    )
}
export default PortfolioItem