import React, { useState } from "react";
import "../styles/patterns/header.css";

import { Button, Link } from "../components";

//IMPORTING MEDIA ASSETS

import logo from "../assets/images/logo.jpg";
import menu from "../assets/icons/menu.svg";
import whitepaper from "../assets/pdf/whitepaper.pdf";

const Header = () => {
  const [modal, setModal] = useState(false);

  const renderModal = (
    <div className={modal ? "modal active" : "modal"}>
      <Link to="/" onClick={() => setModal(false)}>
        HOME
      </Link>
      <Link to="/presale" onClick={() => setModal(false)}>
        PRE SALE
      </Link>
      <Link to="/cryptonlyfans" onClick={() => setModal(false)}>
        CRYPTONLYFANS
      </Link>
      <a
        href={whitepaper}
        target="_blank"
        rel="noreferrer"
        download
        onClick={() => setModal(false)}
      >
        WHITEPAPER
      </a>
      <Link to="contact_us" onClick={() => setModal(false)}>
        CONTACT US
      </Link>
    </div>
  );

  const renderHeader = (
    <div className="header padding_box">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <Button className="primary_btn">Buy COF</Button>
        <img
          src={menu}
          alt="menu"
          style={{ marginLeft: "2em", cursor: "pointer" }}
          onClick={() => setModal((prevModal) => !prevModal)}
        />
      </div>
      {renderModal}
    </div>
  );

  return renderHeader;
};

export default Header;
