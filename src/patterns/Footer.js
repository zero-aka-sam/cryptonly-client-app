import React from "react";
import "../styles/patterns/footer.css";

import { Link } from "../components";

//IMPORTING MEDIA ASSETS

import facebook from "../assets/icons/facebook.svg";
import githup from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="footer padding_box">
      <div className="links">
        <Link to="/">Contact Us</Link>
        <Link to="/">Cookie Policy</Link>
        <Link to="/">Terms of Service</Link>
        <Link to="/">Privacy Policy</Link>
      </div>
      <div>
        <img src={facebook} alt="facebook" />
        <img src={githup} alt="githup" />
        <img src={linkedin} alt="linkedin" />
        <img src={youtube} alt="youtube" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
