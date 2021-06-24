import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./patterns/Header";
import Footer from "./patterns/Footer";
import HomeScreen from "./screens/homeScreen";
import PresaleScreen from "./screens/presaleScreen";
import ContactusScreen from "./screens/contactusScreen";
import CryptonlyfansScreen from "./screens/cryptonlyfansScreen";

function App() {
  const [pageScroll, setPageScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      setPageScroll(offset);
    });
  });
  return (
    <Router>
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
        <Route path="/cryptonlyfans" exact>
          <CryptonlyfansScreen pageScroll={pageScroll} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
