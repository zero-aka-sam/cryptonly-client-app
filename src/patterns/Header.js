import React, { useState } from "react";
import "../styles/patterns/header.css";

import { Button, Link } from "../components";

import {useHistory } from 'react-router-dom'

//IMPORTING MEDIA ASSETS

import logo from "../assets/images/logo.jpg";
import menu from "../assets/icons/menu.svg";
import whitepaper from "../assets/pdf/whitepaper.pdf";
import { Route } from "react-router-dom";

const Header = () => {
  const [modal, setModal] = useState(false);

  const history = useHistory()

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
        <Button onClick={() => history.push('/presale')} className="primary_btn">Buy COF</Button>
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
