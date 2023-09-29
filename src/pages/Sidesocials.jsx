import React from 'react';
import "../styles/Sidesocials.css";
import { FaGithub, FaLinkedinIn, FaInstagram,FaWhatsapp,FaTwitter } from "react-icons/fa";

function Sidesocials() {
  return (
    <div className="socials">
        <a href="nemogpt.tech/github" className='sides duration-200'>
        <FaGithub color="#c4c4c4" size={25}/>
        </a>
        <a href="https://nemogpt.tech/linkedin" className='sides duration-200'>
        <FaLinkedinIn color="#c4c4c4" size={25} />
        </a>
        <a href="https://nemogpt.tech/instagram" className='sides duration-200'>
        <FaInstagram color="#c4c4c4" size={25} />
        </a>
        <a href="https://nemogpt.tech/twitter" className='sides duration-200'>
        <FaTwitter color="#c4c4c4" size={25} />
        </a>

        {/* <a href="https://wa.me/+919634158726" className="sides">
        <FaWhatsapp />
        </a> */}
    </div>
  )
}

export default Sidesocials