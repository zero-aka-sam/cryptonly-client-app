import React, { useState } from "react";
import "../styles/patterns/header.css";

import { Button, Link } from "../components";

import {useHistory } from 'react-router-dom'

//IMPORTING MEDIA ASSETS

import logo from "../assets/images/logo.png";
import menu from "../assets/icons/menu.svg";
import whitepaper from "../assets/pdf/whitepaper.pdf";
import { Route } from "react-router-dom";

import pdf from '../assets/pdf/whitepaper.pdf'

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
      <Link to="/cryptonlyfanz" onClick={() => setModal(false)}>
        CRYPTONLYFANZ
      </Link>
      <a
        href={whitepaper}
        target="_blank"
        rel="noreferrer"
        downlad
        onClick={() => { 
          window.open(pdf)
          setModal(false)
        }}
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
