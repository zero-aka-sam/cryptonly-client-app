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
      <p className="title">What is CRYPTONLYFANS?</p>
    </div>
  );

  const renderContentOne = (
    <div className="content_block">
      <Text>
        We are a decentralised social network connecting exclusive influencer
        content to fans like never before. We are reinventing content
        subscriptions by using DeFi to better serve both the influencer and
        fans.
      </Text>
    </div>
  );

  const renderContentTwo = (
    <div className="content_block">
      <Text>
        As the cryptocurrency of the CRYPTONLYFANS platform, COF Token will
        incentivize influencers and their fans by providing additional benefits
        and enhanced user engagement. As the CRYPTONLYFANS user base grows so
        will the demand for COF leading to an active token economy from which
        all holders will benefit.
      </Text>
    </div>
  );

  const renderCard = (
    <div className="card_wrapper">
      <p className="content_title">What makes CRYPTONLYFANS unique?</p>
      <div className="padding_box">
        <TokenCard
          titleOne="5%"
          titleTwo="Token Rewards"
          content="We reward fans with 5% back in SYMP Token on their purchases. This allows them to use their SYMP throughout the site"
        />
        <TokenCard
          titleOne="Verified"
          titleTwo="Creator Profiles"
          content="We reward fans with 5% back in SYMP Token on their purchases. This allows them to use their SYMP throughout the site"
        />
        <TokenCard
          titleOne="Fast Payouts &"
          titleTwo="Lower Commision"
          content="We reward fans with 5% back in SYMP Token on their purchases. This allows them to use their SYMP throughout the site"
        />
        <TokenCard
          titleOne="VIP"
          titleTwo="Messaging"
          content="We reward fans with 5% back in SYMP Token on their purchases. This allows them to use their SYMP throughout the site"
        />
        <TokenCard
          titleOne="Premium"
          titleTwo="BIO-LINK Page"
          content="We reward fans with 5% back in SYMP Token on their purchases. This allows them to use their SYMP throughout the site"
        />
        <TokenCard
          titleOne="Not Just for"
          titleTwo="18+"
          content="We reward fans with 5% back in SYMP Token on their purchases. This allows them to use their SYMP throughout the site"
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
      <Block title="What is COF Tokens?" image={what_is_cof_tokens} />
      {renderContentTwo}
      <div className="card_wrapper">
        <div className="padding_box">
          <TokenCard
            titleOne="Legitimate"
            titleTwo="Use case"
            content="COF will be used throughout our CRYPTONLYFANS social network. Read our whitepaper to know in depth."
          />
          <TokenCard
            titleOne="Low Cost"
            titleTwo="& High Speed"
            content="COF is a BEP-20 token built on the Binance Smart Chain which is one of the fastest blockchain tech providing lowest fees."
          />
          <TokenCard
            titleOne="Instant"
            titleTwo="Rewards"
            content="2% of each transaction goes to COF holders, proportional to their holdings and their shares in COF"
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
            Buy and hold SYMP and you will automatically get more in your
            wallet. No need for farming or staking.
          </Text>
        </div>
        <div>
          <Text variant="primary">2% To Holders</Text>
          <Text>
            The more our SYMP.FANS network expands the more often SYMP will be
            used throughout the site, resulting in a continuous distribution to
            your wallet.
          </Text>
        </div>
        <div>
          <Text variant="primary">2% To Liquidity</Text>
          <Text>
            By distributing 2% back to the SYMP liquidity pool we aim to keep
            the market liquid, the liquidity pool balanced, and the price
            stable.
          </Text>
        </div>
        <div>
          <Text variant="primary">2% To COF Fund</Text>
          <Text>
            COF Fund aims to give back to our community every month in the form
            of COF giveaways and more! This will be a transparent and community
            driven fund that will allow our community to have a say in how the
            COF Fund is allocated.
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
            content="Rewards Per Transaction"
          />
          <TokenCard
            variant="stats"
            titleOne="2%"
            content="Added To Liquidity"
          />
          <TokenCard
            variant="stats"
            titleOne="50,00,000,0000"
            content="Total Supply"
          />
          <TokenCard variant="stats" titleOne="Locked LP" content="12 Months" />
        </div>
      </div>
      <Text>SYMP Contract Address:</Text>
      <Text style={{ marginTop: "1.5em" }}>
        0x8801638949eaD3B5bF8dBB2E2AAdadCc2fB011de
      </Text>
      <center style={{ marginTop: "1.5em" }}>
        <Button className="primary_btn">HOW TO BUY COF</Button>
      </center>
    </div>
  );

  const renderRoadMap = (
    <div className="padding_box">
      <Block title="Roadmap & Fundraiser" image={roadmap_and_fundraiser} />
      <div className="roadmap_wrapper">
        <div>
          <Text fontSize="20px" variant="primary">
            CRYPTONLYFANS Roadmap
          </Text>
          <ul>
            <li>
              <img src={check} alt="check" />
              <Text>Website UI design & development</Text>
            </li>
            <li>
              <img src={check} alt="check" />
              <Text>
                Develop the CRYPTONLYFANS social network base features
              </Text>
            </li>
            <li>
              <img src={check} alt="check" />
              <Text>
                Internal testing of features (posting, likes, comments,
                messaging, profile setup etc.)
              </Text>
            </li>
            <li>
              <img src={check} alt="check" />
              <Text>Develop the premium bio-links page</Text>
            </li>
            <li>
              <img src={check} alt="check" />
              <Text>Integration of crypto payment gateways</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>VIP messaging feature in development</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>COF rewards in development</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>18+ profile filter in development</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Further expand our influencer network</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Commence our marketing strategy</Text>
            </li>
          </ul>
        </div>
        <div>
          <Text fontSize="20px" variant="primary">
            COF Token Roadmap
          </Text>
          <ul>
            <li>
              <img src={check} alt="check" />
              <Text>Launched COF BEP-20 Token</Text>
            </li>
            <li>
              <img src={check} alt="check" />
              <Text>Created Whitepaper</Text>
            </li>
            <li>
              <img src={check} alt="check" />
              <Text>Launched presale</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Reach 10,000 holders</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Launch SYMP giveaway</Text>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <Text>Exchange listings</Text>
            </li>
          </ul>
        </div>
      </div>
      <div className="padding_box">
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
      </div>
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
