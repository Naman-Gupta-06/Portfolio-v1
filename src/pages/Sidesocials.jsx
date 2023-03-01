import React from 'react';
import "../styles/Sidesocials.css";
import { FaGithub, FaLinkedin, FaInstagram,FaWhatsapp } from "react-icons/fa";

function Sidesocials() {
  return (
    <div className="socials">
        <a href="https://github.com/Naman-Gupta-06" className='sides'>
        <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/naman-gupta-nemo/" className='sides'>
        <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/nemo_.06" className='sides'>
        <FaInstagram />
        
        </a>
        <a href="https://wa.me/+919634158726" className="sides">
                <FaWhatsapp />
        </a>
    </div>
  )
}

export default Sidesocials