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
  };

  const renderForm = (
    <div className="forms">
      <p className="content_title">PRE SALE Sign Up</p>
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
  );

  const renderHero = (
    <div
      className="hero"
      style={{ backgroundPositionY: `${pageScroll * 0.5}px` }}
    >
      <img src={down_arrow} alt="arrow" />
      <p className="title">COF TOKEN PRESALE</p>
    </div>
  );

  const renderPresaleGuide = (
    <div className="presale_block">
      <div>
        <p className="content_title">OurPRE-SALE 08/JULY/2021</p>
      </div>
      {/* <div>
        <Text>Total SYMP Token Supply = 500,000,000,000</Text>
      </div> */}

      <div>
        <Text>Similar to our grass-roots realization</Text>
        <Text>
          from the moment of the original idea to the official start to
          CRYPTONLYFANZ project,
        </Text>
        <Text>
          we recognized that the best way to start any successful initiative was
          to do it organically;
        </Text>
        <Text>
          ensuring a strong foundation that will provide sustainability and
          longevity.
        </Text>
        <Text>
          We realized that the best and fairest way of achieving this would be
          to hold a pre-sale prior to launching to the public,
        </Text>
        <Text>
          effectively protecting the integrity of the project’s mission
          statement, while also providing an all-inclusive forum to promote and
          provide camaraderie for all.
        </Text>
      </div>
      {/* 
      <div>
        <Text>80% of presale will be locked in liquidity for 12months</Text>
        <Text> 20% of presale will be used for marketing the launch</Text>
      </div> */}

      <Text>How does the presale work?</Text>
      <Text>
        Our presale contract will instantly transfer your SYMP Tokens directly
        to your Trustwallet or Metamask wallet.
      </Text>
    </div>
  );

  const renderMetamaskGuide = (
    <div className="presale_block">
      <div>
        <p className="content_title">3 Waves of PRE-SALE</p>
      </div>
      <div>
        <Text> Wave 1:</Text>
        <Text>
          Max $50k for celebrity/high profile buyers up to $1MM At $.00142 per
          Token,
        </Text>
        <Text>vesting 25% per month with 25% unlocked immediately</Text>
      </div>

      <div>
        <Text> Wave 2:</Text>
        <Text>
          Max 70 BNB wave up to $1MM for $.00154 per Token vesting 25%
        </Text>
        <Text>per month with 25% unlocked immediately</Text>
      </div>

      <div>
        <Text>Wave 3:</Text>
        <Text>Max 5 BNB wave up to $1MM for $.00154 per Token</Text>
      </div>

      {/* <div>
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
      </div> */}
    </div>
  );

  const renderTrustWalletGuide = (
    <div className="presale_block">
      <div>
        <p className="content_title">SIGN UP Steps</p>
      </div>
      <div>
        <Text> Step 1:</Text>
        <Text>Complete Sign up form below</Text>
      </div>

      <div>
        <Text>Step 2:</Text>
        <Text>
          An e-mail and/or text confirmation with proper verification on our end
          will occur quickly
        </Text>
      </div>

      <div>
        <Text>Step 3:</Text>
        <Text>
          After the information is provided you’ll be sent a wallet address to
          provide the funds to
        </Text>
      </div>

      <div>
        <Text>Step 4:</Text>
        <Text>
          Once the funds are received you’ll be manually air dropped the tokens
          into your wallet
        </Text>
        <Text>based on the above wave you’ve opted in to</Text>
      </div>
      {/* <div>
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
      </div> */}
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
    </div>
  );

  return (
    <div className="presale">
      {renderHero}
      {/* <div className="presale_block">
        <div>
          <Text>SYMP Token Presale Contract Address:</Text>
        </div>
        <Text>
          0xCb31101105fbE82D5f18D4CcE84e914Bf628F45E Note: When sending, change
          the "Gas Limit" amount to 299999
        </Text>
      </div> */}
      {/* <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div> */}
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
