import React from "react";
import "../styles/patterns/footer.css";

import { Link } from "../components";

//IMPORTING MEDIA ASSETS

import instagram from "../assets/icons/instagram.svg";
import mail from "../assets/icons/mail.svg";
import telegram from "../assets/icons/telegram.svg";
import twitter from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="footer padding_box">
      <div className="links">
        <Link to="/contact_us">Contact Us</Link>
        <Link to="/cookie_policies">Cookie Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/policies">Privacy Policy</Link>
      </div>
      <div>
        <a href="https://twitter.com/cryptonlyfanz" >
        <img src={twitter} alt="twitter" />
        </a>
        <a  href="https://www.instagram.com/cryptonlyfanz/" >
           <img src={instagram} alt="ig"/>
        </a>
        <a href="mailto:admin@cryptonlyfanz.com">
                  <img src={mail} alt="tt"  />

        </a>
        <a href="http://t.me/cryptonlyfanz">
                  <img src={telegram} alt="tg"  />
        </a>

      </div>
    </div>
  );
};

export default Footer;
