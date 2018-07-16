import React from 'react'
import './SocialLogos.css'

class SocialLogos extends React.Component {
    render () {
        return (
            <div className="socials"> 
            <ul>
               <li><a href='https://github.com/NadiaWho' target='_blank'><i className="fab fa-github"></i></a></li>
               <li><a href='https://codepen.io/Nadia_Who/' target='_blank'><i className="fab fa-codepen"></i></a></li>
               <li><a href='https://www.linkedin.com/in/nadia-djellali-77635493/' target='_blank'><i className="fab fa-linkedin"></i></a></li>
               <li><a href='https://twitter.com/Nadia_Who_' target='_blank'><i className="fab fa-twitter"></i></a></li>
            </ul>
            </div>
        )
    }
}

export default SocialLogos