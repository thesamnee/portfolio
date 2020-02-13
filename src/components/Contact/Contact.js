import React from 'react'
import './Contact.css'
import contactTitle from './contact.png'

//Contact will become a form in later update

const Contact = () => {
    return(
        <div className="contactDiv">
            <img src={contactTitle} alt="contact title" className="title" />
            <ul className="contactInfo">
                <li>Sam Nee</li>
                <li>samuel.r.nee@gmail.com</li>
                <li><a href="linkedin.com/in/samnee">LinkedIn</a></li>
                <li><a href="https://github.com/thesamnee">GitHub</a></li>
            </ul>
        </div>
    )
}

export default Contact