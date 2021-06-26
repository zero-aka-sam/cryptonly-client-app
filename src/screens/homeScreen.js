import React from "react";

import { Text, Button } from "../components";

import "../styles/screens/home.css";

//IMPORTING MEDIA ASSETS

import down_arrow from "../assets/icons/down_arrow.svg";
import chevron_down from "../assets/icons/chevron_down.svg";
import check from "../assets/icons/check.svg";
import clock from "../assets/icons/clock.svg";
import cof2 from "../assets/images/cof2.png"
import cof3 from "../assets/images/cof3.png"
import cof4 from "../assets/images/cof4.png"
import cof5 from "../assets/images/cof5.png"
import reward_your_wallet from "../assets/images/reward_your_wallet.png"
import tokenomics_and_statistics from "../assets/images/tokenomics_and_statistics.png"
import roadmap_and_fundraiser from "../assets/images/roadmap_and_fundraiser.png"
import what_is_cof_tokens from "../assets/images/what_is_cof_tokens.png"

const Block = ({ title, image }) => {
  return (
    <div
      className="block_one"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <img src={down_arrow} alt="arrow" />
      <p className="title">{title}</p>
    </div>
  );
};

const TokenCard = ({ titleOne, titleTwo, content, variant }) => {
  const renderOne = (
    <div className="token_card">
      <Text variant="primary">{titleOne}</Text>
      <Text variant="primary">{titleTwo}</Text>
      <Text style={{ textAlign: "start", marginTop: "1em" }}>{content}</Text>
    </div>
  );

  const renderTwo = (
    <div className="token_card_center">
      <Text variant="primary">{titleOne}</Text>
      <Text style={{ marginTop: "1em" }}>{content}</Text>
    </div>
  );

  return variant === "stats" ? renderTwo : renderOne;
};

const HomeScreen = ({ pageScroll }) => {
  const renderHero = (
    <div
      className="hero"
      style={{ backgroundPositionY: `${pageScroll * 0.5}px` }}
    >
      <img src={down_arrow} alt="arrow" />
      <p className="title">What is CRYPTONLYFANZ?</p>
    </div>
  );

  const renderContentOne = (
    <div className="content_block">
      <Text>
        Cryptonlyfanz is a decentralized social network dedicated to providing a platform that connects
        exclusive influencer content and their fanz like never before. Our decentralized platform is
        powered by COF Token; a cryptocurrency with embedded features that sustains a low-cost
        environment where content creators and subscribers can connect with little interference from a
        third party.
        To learn more please reference our “Whitepaper” document listed in the site menu
      </Text>
    </div>
  );

  const renderContentTwo = (
    <div className="content_block">
      <Text>
        As the cryptocurrency of the CRYPTONLYFANZ platform, COF Token will
        COF Token is the preferred cryptocurrency used to pay for content on our platform. We do  
        accept additional leading cryptocurrencies as payment, however its internally converted and
        will be displayed as COF Token in your user account. The demand, utility and transparency of
        processing totals engage a financial system that supports our decentralized platform. This allows
        you the subscriber, the content creator and the investor to be enriched by your interactions
        with cryptonlyfanz.com and your token of choice; COF.

      </Text>
    </div>
  );

  const renderCard = (
    <div className="card_wrapper">
      <p className="content_title">What makes CRYPTONLYFANZ unique?</p>
      <div className="padding_box">
        <TokenCard
          // titleOne="5%"
          titleTwo="Token Rewards"
          content="We care about community and 1% of every transaction distributed to COF holders proportion to there holding."
        />
        <TokenCard
          titleOne="Verified Creator Profiles"
          // titleTwo="Creator Profiles"
          content="We authenticate content creator and subscriber identification for legal age, seamlessly and accurately through our online portal."
        />
          <TokenCard
          titleOne="Instant ID verification"
          // titleTwo="Token Rewards"
          content="No prevent fake profiles and make Cryptonlyfanz fully secure, we provide users Instant ID
verification. Get verified under 5 Minutes.
"
        />
         <TokenCard
          titleOne="VIP Messaging"
          // titleTwo=""
          content="Subscribers can attain VIP status after spending US $500.00 on content. Once you’re a VIP our content creators can identify you quickly in their inbox and give you the treatment you’ve earned."
        />
         <TokenCard
          // titleOne="Premium"
          titleTwo="Video chat"
          content="Requesting paid video chat time is an option and at the discretion of content providers to enable, decline or accept."
        />
        <TokenCard
          titleOne="Fast Payouts and 0% commissions"
          // titleTwo="Lower Commision"
          content="We host creator content free of commissions. Creators that will accept COF as a payment method will have 0% commission on their earnings."
        />
        <TokenCard
          titleOne="Accept all major cryptos"
          // titleTwo="Token Rewards"
          content="Apart from COF token, users/content creators can use BTC, ETH, USDT and DOGE as a payment
method with 15% withdrawal commission. This commission will decrease as the user base on
the platform increases."
        />
         <TokenCard
          titleOne="In-Buit Exchange"
          // titleTwo="Token Rewards"
          content="Content sellers can convert their earnings to major crypto like BTC, ETH, USDT or DOGE using
In-Built exchange.
"
        />
        <TokenCard
          titleOne="Exclusively Made for 18+ only"
          // titleTwo="18+"
          content=" Cryptonlyfanz is exclusively made for 18+ content only. Connect with your favourite creators like
never before.
"
        />
      </div>
    </div>
  );

  const renderCardScreenshot = (
    <div>
      <p className="content_title">
        Our platform is currently in development as shown in the screenshots
        below
      </p>
      <div className="profile_wrapper">
        <div>
          <img src={cof2} alt="model" />
          <img src={cof3} alt="model" />
        </div>
        <div>
          <img src={cof4} alt="model" />
          <img src={cof5} alt="model" />
        </div>
      </div>
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
    </div>
  );

  const renderCofToken = (
    <div>
      <Block title="What is COF Token ?" image={what_is_cof_tokens} />
      {renderContentTwo}
      <div className="card_wrapper">
        <div className="padding_box">
          <TokenCard
            titleOne="Legitimate"
            titleTwo="Use case"
            content="COF will be used throughout our CRYPTONLYFANZ social network. Read our whitepaper to know in depth."
          />
          <TokenCard
            titleOne="Low Cost"
            titleTwo="& High Speed"
            content="COF is a BEP-20 token built on the Binance Smart Chain which is one of the fastest blockchain tech providing lowest fees."
          />
          <TokenCard
            titleOne="Instant"
            titleTwo="Rewards"
            content="1% of each transaction goes to COF holders, proportional to their holdings and their shares in COF"
          />
        </div>
      </div>
    </div>
  );

  const renderRewardWallet = (
    <div>
      <Block title="Reward Your Wallet" image={reward_your_wallet} />
      <div className="rewards_wrapper">
        <div>
          <Text variant="primary">6% Total Tax</Text>
          <Text>
            Just BUY and HOLD COF tokens in your wallet and earn passively.
          </Text>
        </div>
        <div>
          <Text variant="primary">3% Goes to Marketing & Development.</Text>
          <Text>
            3% to a marketing and development wallet. This tax supports further development of the
            platform and the marketing required to fuel the long-term sustainability of this decentralized
            platform and COF Token investment strategy.
          </Text>
        </div>
        <div>
          <Text variant="primary">2% Goes Back to liquidity</Text>
          <Text>
            2% back to the COF liquidity Pool. We aim to keep the speculative market liquid. A balanced
            liquidity pool will aid systemic efficiency and sustainability.
          </Text>
        </div>
        <div>
          <Text variant="primary">1% Goes to Holders</Text>
          <Text>
            1% goes to holders wallet according to there holdings.. The more you hold the more you will earn.
          </Text>
          <Text style={{ marginTop: "1.5em" }}>
            There will be various options the community will vote on such as:
            COF giveaways, Charitable donations, COF burn to lower total supply,
            Competition rewards, Fast track feature requests and many more!
          </Text>
        </div>
      </div>
    </div>
  );

  const renderStatistics = (
    <div>
      <Block title="Tokenomics & Statistics" image={tokenomics_and_statistics} />
      <div className="card_wrapper">
        <div className="padding_box">
          <TokenCard variant="stats" titleOne="COF" content="Token Symbol" />
          <TokenCard
            variant="stats"
            titleOne="BEP-20"
            content="Binance Smart Chain"
          />
          <TokenCard
            variant="stats"
            titleOne="2%"
            content="Added To Liquidity"
          />
          <TokenCard
            variant="stats"
            titleOne="1%"
            content="To Holders"
          />
          <TokenCard
            variant="stats"
            titleOne="10,00,000,0000"
            content="Total Supply"
          />
          <TokenCard variant="stats" titleOne="3%" content="To marketing/development" />
        </div>
      </div>
      <Text>Cryptonlyfanz Contract Address:</Text>
      <Text style={{ marginTop: "1.5em" }}>
        Coming soon
      </Text>
      {/* <center style={{ marginTop: "1.5em" }}>
        <Button className="primary_btn">HOW TO BUY COF</Button>
      </center> */}
    </div>
  );

  const renderRoadMap = (
    <div className="padding_box">
      <Block title="Roadmap & Fundraiser" image={roadmap_and_fundraiser} />
      <div className="roadmap_wrapper">
        <div>
          <Text fontSize="20px" variant="primary">
            CRYPTONLYFANZ Roadmap
          </Text>
          <ul>
            <li>
              <img src={check} alt="check" />
              <Text>Website UI design & development</Text>
            </li>
            <li>
              <img src={check} alt="check" />
              <Text>
                Develop the Cryptonlyfanz social network base features
              </Text>
            </li>
            <li>
              <img src={check} alt="check" />
              <Text>
                Internal testing of features (posting, likes, comments, messaging, profile setup etc.)
              </Text>
            </li>
            <li>
              <img src={check} alt="check" />
v              <Text>Develop the premium bio-links page</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Integration of crypto payment gateways</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text> VIP messaging/Video Calling feature in development</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>COF rewards in development</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Integration with Instant ID verification</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Shecduled launch for mid August</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text> Further expand our influencer network</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Launching COF NFT marketplace V1.0</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Increase our marketing Campaign</Text>
            </li>
          </ul>
        </div>
        <div>
          <Text fontSize="20px" variant="primary">
            COF Token Roadmap
          </Text>
          <ul>
            <li>
              <img src={clock} alt="clock" />
              <Text>COF token deployed to mainnet Audit</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Launched COF BEP-20 Token</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Created Whitepaper</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Launched presale</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Reach 30,000 holders</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Launch Cryptonlyfanz giveaway</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Exchange listings</Text>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="padding_box">
        <div className="disclaimer">
          <div>
            <p className="content_title">Disclaimer</p>
            <img src={chevron_down} alt="arrow" />
          </div>
          <Text
            fontSize="12px"
            style={{ marginTop: "1.5em", textAlign: "start" }}
          >
            Photos used throughout the site are of not affiliation with owner.
            All credit and rights to the photos are to @cindyprado
            https://www.instagram.com/cindyprado/
          </Text>
          <Text
            fontSize="12px"
            style={{ marginTop: "1.5em", textAlign: "start" }}
          >
            The content shared on this website is for informational purposes
            only and, thus, should not be considered as financial advice.
          </Text>
          <Text
            fontSize="12px"
            style={{ marginTop: "1.5em", textAlign: "start" }}
          >
            Trading crypto/digital assets is highly risky and highly volatile,
            and you should never invest more than you can afford to lose. Always
            seek professional advice before making any investment.
          </Text>
          <Text
            fontSize="12px"
            style={{ marginTop: "1.5em", textAlign: "start" }}
          >
            The website visitor alone assume the sole responsibility of
            evaluating the merits and risks associated with the use of any
            information or other content on the website before making any
            decisions based on such information or other content. The website
            visitor indemnifies the website creators and all members of project
            creation and administration, from any responsibility regarding their
            financial decisions.
          </Text>
        </div>
      </div> */}
     </div>
  );

  return (
    <div className="home">
      {renderHero}
      {renderContentOne}
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
      {renderCard}
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
      {renderCardScreenshot}
      {renderCofToken}
      {renderRewardWallet}
      {renderStatistics}
      {renderRoadMap}
    </div>
  );
};

export default HomeScreen;
