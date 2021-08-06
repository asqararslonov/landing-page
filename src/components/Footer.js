import React from 'react'
import Ins from './img/icon-links/instagramm.png'
import Facebook from './img/icon-links/facebook.png'
import Twitter from './img/icon-links/twitter.png'
import In from './img/icon-links/in.png'
import P from './img/icon-links/pr.png'
import D from './img/icon-links/driabble.png'
const Footer = () => {

    return (
        <footer id='contact'>
            <div className='container d-flex'>
                <ul>
                    <li><b>Home</b></li>
                    <li><a href='#home'>Colorlib</a></li>
                    <li><a href='#home'>About us</a></li>
                    <li><a href='#home'>Pratice Area</a></li>
                    <li><a href='#home'>Services</a></li>
                    <li><a href='#home'>Attorneys</a></li>
                    <li><a href='#home'>Terms</a></li>
                    <li><a href='#home'>Privacy</a></li>
                </ul>
                <ul>
                    <li><b>Practic Area</b></li>
                    <li><a href='#home'>Architect</a></li>
                    <li><a href='#home'>Projects</a></li>
                    <li><a href='#home'>Colorib</a></li>
                   
                    <li><a href='#home'>Free Templates</a></li>
                    <li><a href='#home'>Wordpress Themes</a></li>
              
                </ul>
                <ul>
                    <li><b>Services</b></li>
                    <li><a href='#home'>Colorlib</a></li>
                    <li><a href='#home'>Houese Renovation</a></li>
                    <li><a href='#home'>Interior Design</a></li>
                    <li><a href='#home'>Installation Works</a></li>
                 
                </ul>
                <ul>
                    <li><b>Contact</b></li>
                    <li><b>43 Raymouth Rd. Baltemoer, London 3910</b></li>
                    <li><a href='#home'>+1(123)-456-7890</a></li>
                    <li><a href='#home'>+1(123)-456-7890</a></li>
                    <li><a href='#home'>info@mydomain.com</a></li>
                    <li>Connect</li>
                    <li>

                        <a href='#home'><img src={Ins} alt='404'/></a>
                        <a href='#home'><img src={Twitter} alt='404'/></a>
                        <a href='#home'><img src={Facebook} alt='404'/></a>
                        <a href='#home'><img src={In} alt='404'/></a>
                        <a href='#home'><img src={P} alt='404'/></a>
                        <a href='#home'><img src={D} alt='404'/></a>
                        
                    </li>
                </ul>

            </div>
            <p>Copyright ©2021 All rights reserved | This template is made with React & ❤ by Asqar Arslonov</p>
        </footer>
    )
}
export default Footer;