import React from "react";

import { Text, Button } from "../components";

import "../styles/screens/contactus.css";

import down_arrow from "../assets/icons/down_arrow.svg";
import map from "../assets/images/map.png";

const ContactusScreen = ({ pageScroll }) => {
  const renderHero = (
    <div
      className="hero"
      style={{ backgroundPositionY: `${pageScroll * 0.5}px` }}
    >
      <img src={down_arrow} alt="arrow" />
      <p className="title">CONTACT US</p>
    </div>
  );

  const renderForm = (
    <div className="forms">
      <div>
        <Text fontSize="16px">Name *</Text>
        <p>
          <input placeholder="Enter your name" />
        </p>
      </div>
      <div>
        <Text fontSize="16px">Email Address *</Text>
        <p>
          <input placeholder="Enter your email address" />
        </p>
      </div>
      <div>
        <Text fontSize="16px">Message</Text>
        <p>
          <textarea rows="4" placeholder="Enter your message" />
        </p>
      </div>
    </div>
  );

  const renderContactInfo = (
    <div className="contact_info padding_box">
      {renderForm}
      <div className="image">
        <img src={map} alt="map" />
      </div>
    </div>
  );
  return (
    <div className="contactus">
      {renderHero}
      {renderContactInfo}
      <div style={{ marginTop: "2em" }} className="padding_box">
        <Button className="primary_btn">Submit</Button>
      </div>
    </div>
  );
};

export default ContactusScreen;
