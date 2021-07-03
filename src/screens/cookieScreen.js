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
      <h1 style={styles.header}>TERMS & CONDITIONS</h1>
      <Block
      title='Interpretation'
      text='The words of which the initial letter is capitalized have meanings defined under the following
conditions. The following definitions shall have the same meaning regardless of whether they
appear in singular or in plural.
'
      />
      <Block
      title='Definitions'
      text='The words of which the initial letter is capitalized have meanings defined under the following
conditions. The following definitions shall have the same meaning regardless of whether they
appear in singular or in plural.

'
    />
    </div>
  )
}

export default CookieScreen;
