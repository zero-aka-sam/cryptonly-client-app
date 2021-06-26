import React from "react";
import "../styles/patterns/footer.css";

import { Link } from "../components";

//IMPORTING MEDIA ASSETS

import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import telegram from "../assets/icons/telegram.svg";
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
        <a href="https://twitter.com/cryptonlyfanz" >
        <img src={twitter} alt="twitter" />
        </a>
        <a  href="https://www.instagram.com/cryptonlyfanz/" >
           <img src={instagram} alt="ig"/>
        </a>
        <a href="http://tiktok.com/cryptonlyfanz">
                  <img src={tiktok} alt="tt"  />

        </a>
        <a href="http://t.me/cryptonlyfanz">
                  <img src={telegram} alt="tg"  />
        </a>

      </div>
    </div>
  );
};

export default Footer;
