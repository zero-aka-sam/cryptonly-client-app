import React,{useState} from "react";

import { Text, Button } from "../components";

import "../styles/screens/home.css";


const styles = {
  text: {
    color: 'white',
    fontFamily: 'futura_bk_ft',
    fontSize: '15px',
    margin: '32px'
  },
   title: {
    color: 'white',
    fontFamily: 'futura_hv_ft',
    fontSize: '20px',
    margin: '32px'
  },
   header: {
    color: 'white',
    fontFamily: 'futura_hv_ft',
    fontSize: '28px',
    margin: '32px'
  }
}
 
const CookieScreen = ({ pageScroll }) => {

  
  const Block = ({ title,text }) => {
  return (
    <div>
      <div
      style={styles.block}
    >
        <p style={styles.title}>{ title}</p>
    </div>
          <p style={styles.text}>{text}</p>

    </div>
  );
};
  return (
    <div>
      <h1 style={styles.header}>Cookies Policy</h1>
      <Block
      title='Cookies Usage'
      text={`Your Internet browser has the in-built facility for storing small text files - "cookies" - that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information, and provide personalized functionality. You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on the CryptOnlyFanz website. More information about cookies can be found at https://en.wikipedia.org/wiki/HTTP_cookie`}
      />
    </div>
  )
}

export default CookieScreen;
