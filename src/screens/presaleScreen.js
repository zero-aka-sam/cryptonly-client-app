import React from "react";

import { Text } from "../components";

import "../styles/screens/presale.css";

import down_arrow from "../assets/icons/down_arrow.svg";


const PresaleScreen = ({ pageScroll }) => {

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
        <p className="content_title">INSTANT PRESALE GUIDE</p>
      </div>
      <div>
        <Text>Total CRYPTONLYFANZ Token Supply = 100,000,000,000</Text>
      </div>

      <div>
        <Text>PRESALE TERMS</Text>
        <Text>Presale Supply = 100,000,000,000</Text>
        <Text> Minimum Purchase = 0.01 BNB</Text>
        <Text>Maximum Purchase = 10 BNB</Text>
        <Text>Presale Price: 1BNB = 20,000,000 CRYPTONLYFANZ Tokens</Text>
        <Text>Public Release Price: 1BNB = 10,000,000 CRYPTONLYFANZ Tokens</Text>
      </div>

      <div>
        <Text>80% of presale will be locked in liquidity for 12months</Text>
        <Text> 20% of presale will be used for marketing the launch</Text>
      </div>

      <Text>How does the presale work?</Text>
      <Text>
        Our presale contract will instantly transfer your CRYPTONLYFANZ Tokens directly
        to your Trustwallet or Metamask wallet.
      </Text>
    </div>
  );

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
        <Text>Send BNB to the CRYPTONLYFANZ Token Presale Contract address:</Text>
      </div>

      <div>
        <Text>0xCb31101105fbE82D5f18D4CcE84e914Bf628F45E</Text>
        <Text>Step 7:</Text>
        <Text>
          Once your transaction is confirmed, our Presale Contract will
          instantly send your CRYPTONLYFANZ Tokens to your Metamask wallet which your BNB
          was sent from.
        </Text>
      </div>

      <div>
        <Text>Step 8:</Text>
        <Text>
          In your Metamask wallet click on custom token and add the CRYPTONLYFANZ Token
          contract address
        </Text>
      </div>

      <div>
        <Text>0x8801638949eaD3B5bF8dBB2E2AAdadCc2fB011de</Text>
        <Text>
          You may need to enter the following details if they are not
          automatically generated
        </Text>
        <Text>Symbol: CRYPTONLYFANZ</Text>
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
          Send BSC (BEP-20) to the CRYPTONLYFANZ Token Presale Contract address:
        </Text>
      </div>

      <div>
        <Text>0xCb31101105fbE82D5f18D4CcE84e914Bf628F45E</Text>
        <Text>Step 6:</Text>
        <Text>
          Once your transaction is confirmed, our Presale Contract will
          instantly send your CRYPTONLYFANZ Tokens to your Trustwallet which your BSC was
          sent from.
        </Text>
      </div>

      <div>
        <Text>Step 7:</Text>
        <Text>
          In your Trustwallet wallet add a custom token and add the CRYPTONLYFANZ Token
          contract address
        </Text>
      </div>

      <div>
        <Text>0x8801638949eaD3B5bF8dBB2E2AAdadCc2fB011de</Text>
        <Text>
          You may need to enter the following details if they are not
          automatically generated
        </Text>
        <Text>Symbol: CRYPTONLYFANZ</Text>
        <Text>Decimals: 18</Text>
      </div>
    </div>
  );

  const Block = ({ title, image }) => {
  return (
    <div
      className="block_content"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <p className="title">{title}</p>
    </div>
  );
};

  const renderImageOne = (
    <div className='sale'>
      <h1 className='upcome'>COMING SOON</h1>
       <div className="heero">
    </div>
   </div>
  );




  return (
    <div className="presale">
      {renderHero}
      {renderImageOne}
      {/* <div className="presale_block">
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
      </div> */}
      {/* {renderTrustWalletGuide} */}
    </div>
  );
};

export default PresaleScreen;
