import React, { useState } from "react";

import { Text, Button } from "../components";

import "../styles/screens/home.css";

const styles = {
  text: {
    color: "white",
    fontFamily: "futura_bk_ft",
    fontSize: "15px",
    margin: "32px",
  },
  title: {
    color: "white",
    fontFamily: "futura_hv_ft",
    fontSize: "20px",
    margin: "32px",
  },
  header: {
    color: "white",
    fontFamily: "futura_hv_ft",
    fontSize: "28px",
    margin: "32px",
  },
};

const PolicyScreen = ({ pageScroll }) => {
  const Block = ({ title, text }) => {
    return (
      <div>
        <div style={styles.block}>
          <p style={styles.title}>{title}</p>
        </div>
        <p style={styles.text}>{text}</p>
      </div>
    );
  };
  return (
    <div>
      <h1 style={styles.header}>Privacy Policy</h1>
      <Block
        // title="Interpretation"
        text="CryptOnlyFanz is committed to protecting any data that we collect concerning you. By using our services you agree to the use of the data that we collect in accordance with this Privacy Policy.
"
      />
      <Block
        text="We are committed to protecting your privacy.

"
      />
      <Block
        text="We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy to enable you to understand which personal identifying information ('PI', 'Personal Information') of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.

"
      />
      <Block
        title="Information Collected"
        text="We may collect any or all of the information that via both automated means such as communications profiles and cookies. Personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, fax number and email address, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments, domain name or other payment information. All sensitive information is collected on a secure server and data is transferred . When transferring personal information a security icon will appear in your browser.
"
      />
      <Block
        title="Information Use"
        text="This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details.
"
      />
      <Block
        text="We use IP addresses to analyze trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and SaaS applications.

"
      />
    </div>
  );
};

export default PolicyScreen;
