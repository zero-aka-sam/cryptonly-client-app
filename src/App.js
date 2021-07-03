import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./patterns/Header";
import Footer from "./patterns/Footer";
import HomeScreen from "./screens/homeScreen";
import PresaleScreen from "./screens/presaleScreen";
import ContactusScreen from "./screens/contactusScreen";
import CryptonlyfansScreen from "./screens/cryptonlyfansScreen";


const styles = {
  backdrop: {
  backgroundColor: 'rgba(0, 0, 0, 0.86)',
  position: 'absolute',
  bottom: '1',
    left: '1',
    width: '100%',
    height: '100%',
    zIndex: '1',
    scrollX: 'none',
    scrollY: 'none',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form : {
    color: 'white',
    fontFamily: 'futura_hv_ft',
    fontSize: '12px',
    backgroundColor: '#00000A',
    padding: '32px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '32px'
  },
  button: {
    height: '48px',
     color: 'white',
    fontFamily: 'futura_md_bt',
    backgroundColor: '#9E35FE',
    outline: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}
const Backdrop = ({ setConsent }) => {
  
  useEffect(() => {
          document.body.style.overflow = 'hidden'
  }, [])
  
  return (
    <div style={styles.backdrop}>
      <div style={styles.form}>
        <h1>click to validate you are over the age of 18</h1>
        <button onClick={(e) => { e.preventDefault(); setConsent(true); document.body.style.overflowY = 'scroll'
}} style={styles.button}>I agree and enter</button>
      </div>
    </div>
  )
}



function App() {
  const [pageScroll, setPageScroll] = useState(0);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
  

    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      setPageScroll(offset);
    });
  },[consent]);

  return (
    <Router>
      {!consent && <Backdrop setConsent={setConsent}/>}
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeScreen pageScroll={pageScroll} />
        </Route>
        <Route path="/presale" exact>
          <PresaleScreen pageScroll={pageScroll} />
        </Route>
        <Route path="/contact_us" exact>
          <ContactusScreen pageScroll={pageScroll} />
        </Route>
        <Route path="/cryptonlyfanz" exact>
          <CryptonlyfansScreen pageScroll={pageScroll} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
