import React, { useState } from "react";
import * as emailjs from "emailjs-com";

import { Text, Button } from "../components";

import "../styles/screens/presale.css";

import down_arrow from "../assets/icons/down_arrow.svg";

const initialState = {
  username: "",
  email: "",
  note: "",
  amount: 0,
};

const PresaleScreen = ({ pageScroll }) => {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    const { username, email, amount, note } = formData;
    let templateParams = {
      username,
      amount,
      email,
      note,
    };

    emailjs
      .send(
         "service_m82lvre",
          "template_bc09cml",
          templateParams,
          "user_GIBdBagcpQO842DYfWDKO"
      )
      .then(
        (result) => {
          console.log("success");
          setFormData(initialState);
          setIsLoading(false);
          setIsSucess(true);
          setTimeout(() => {
            setIsSucess(false);
          }, 2000);
        },
        (error) => {
          console.log("something went wrong");
          setFormData(initialState);
          setIsLoading(false);
        }
      );
  }

  const renderForm = (
    <div className="forms">
      <p className="content_title">CONTACT US</p>
      <form onSubmit={handleSubmit}>
        <div>
          <Text fontSize="16px">Name *</Text>
          <p>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </p>
        </div>
        <div>
          <Text fontSize="16px">Email Address *</Text>
          <p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </p>
        </div>
        <div>
          <Text fontSize="16px">Contribution amount *</Text>
          <p>
            <input
              type="number"
              name="amount"
              value={formData.amount === 0 ? "" : formData.amount}
              onChange={handleChange}
              placeholder="Enter your contribution amount"
              required
            />
          </p>
        </div>
        <div>
          <Text fontSize="16px">Note</Text>
          <p>
            <textarea
              rows="4"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Enter your notes"
            />
          </p>
        </div>
        <div
          style={{
            margin: "1em auto 0",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Button
            className="primary_btn"
            type="submit"
            disabled={isLoading ? true : false}
          >
            {isLoading
              ? "Loading..."
              : isSucess
              ? "Submitted sucessfully"
              : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  )

  const renderHero = (
    <div
      className="hero"
      style={{ backgroundPositionY: `${pageScroll * 0.5}px` }}
    >
      <img src={down_arrow} alt="arrow" />
      <p className="title">COF TOKEN PRESALE</p>
    </div>
  )

  const renderPresaleGuide = (
    <div className="presale_block">
      <div>
        <p className="content_title">INSTANT PRESALE GUIDE</p>
      </div>
      <div>
        <Text>Total SYMP Token Supply = 500,000,000,000</Text>
      </div>

      <div>
        <Text>PRESALE TERMS</Text>
        <Text>Presale Supply = 100,000,000,000</Text>
        <Text> Minimum Purchase = 0.01 BNB</Text>
        <Text>Maximum Purchase = 10 BNB</Text>
        <Text>Presale Price: 1BNB = 20,000,000 SYMP Tokens</Text>
        <Text>Public Release Price: 1BNB = 10,000,000 SYMP Tokens</Text>
      </div>

      <div>
        <Text>80% of presale will be locked in liquidity for 12months</Text>
        <Text> 20% of presale will be used for marketing the launch</Text>
      </div>

      <Text>How does the presale work?</Text>
      <Text>
        Our presale contract will instantly transfer your SYMP Tokens directly
        to your Trustwallet or Metamask wallet.
      </Text>
    </div>
  )

  const renderMetamaskGuide = (
    <div className="presale_block">
      <div>
        <p className="content_title">Metamask Guide</p>
      </div>
      <div>
        <Text> Step 1:</Text>
        <Text>Download Metamask mobile app or chrome extension.</Text>
      </div>

      <div>
        <Text>Step 2:</Text>
        <Text>Setup BSC on your Metamask.</Text>
        <Text>You can follow this tutorial</Text>
      </div>

      <div>
        <Text>Step 3:</Text>
        <Text>
          Transfer your BNB from an exchange to your Metamask wallet. (BEP20)
        </Text>
      </div>

      <div>
        <Text>Step 4:</Text>
        <Text>Decide the amount of BNB to send based on our terms above.</Text>
      </div>
      <div>
        <Text>Step 5:</Text>
        <Text>When sending, change the "Gas Limit" amount to 299999.</Text>
      </div>

      <div>
        <Text>Step 6:</Text>
        <Text>Send BNB to the SYMP Token Presale Contract address:</Text>
      </div>

      <div>
        <Text>0xCb31101105fbE82D5f18D4CcE84e914Bf628F45E</Text>
        <Text>Step 7:</Text>
        <Text>
          Once your transaction is confirmed, our Presale Contract will
          instantly send your SYMP Tokens to your Metamask wallet which your BNB
          was sent from.
        </Text>
      </div>

      <div>
        <Text>Step 8:</Text>
        <Text>
          In your Metamask wallet click on custom token and add the SYMP Token
          contract address
        </Text>
      </div>

      <div>
        <Text>0x8801638949eaD3B5bF8dBB2E2AAdadCc2fB011de</Text>
        <Text>
          You may need to enter the following details if they are not
          automatically generated
        </Text>
        <Text>Symbol: SYMP</Text>
        <Text>Decimals: 18</Text>
      </div>
    </div>
  );

  const renderTrustWalletGuide = (
    <div className="presale_block">
      <div>
        <p className="content_title">Trust Wallet Guide</p>
      </div>
      <div>
        <Text> Step 1:</Text>
        <Text>Download the Trust Wallet app</Text>
      </div>

      <div>
        <Text>Step 2:</Text>
        <Text>
          Purchase BSC (BEP-20) using TrustWallet or transfer from your existing
          exchange wallet
        </Text>
      </div>

      <div>
        <Text>Step 3:</Text>
        <Text>Decide the amount of BSC to send based on our terms above.</Text>
      </div>

      <div>
        <Text>Step 4:</Text>
        <Text>When sending, change the "Gas Limit" amount to 299999.</Text>
      </div>
      <div>
        <Text>Step 5:</Text>
        <Text>
          Send BSC (BEP-20) to the SYMP Token Presale Contract address:
        </Text>
      </div>

      <div>
        <Text>0xCb31101105fbE82D5f18D4CcE84e914Bf628F45E</Text>
        <Text>Step 6:</Text>
        <Text>
          Once your transaction is confirmed, our Presale Contract will
          instantly send your SYMP Tokens to your Trustwallet which your BSC was
          sent from.
        </Text>
      </div>

      <div>
        <Text>Step 7:</Text>
        <Text>
          In your Trustwallet wallet add a custom token and add the SYMP Token
          contract address
        </Text>
      </div>

      <div>
        <Text>0x8801638949eaD3B5bF8dBB2E2AAdadCc2fB011de</Text>
        <Text>
          You may need to enter the following details if they are not
          automatically generated
        </Text>
        <Text>Symbol: SYMP</Text>
        <Text>Decimals: 18</Text>
      </div>
    </div>
  );

  return (
    <div className="presale">
      {renderHero}
      <div className="presale_block">
        <div>
          <Text>SYMP Token Presale Contract Address:</Text>
        </div>
        <Text>
          0xCb31101105fbE82D5f18D4CcE84e914Bf628F45E Note: When sending, change
          the "Gas Limit" amount to 299999
        </Text>
      </div>
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
      {renderPresaleGuide}
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
      {renderMetamaskGuide}
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
      {renderTrustWalletGuide}
      {renderForm}
    </div>
  );
};

export default PresaleScreen;