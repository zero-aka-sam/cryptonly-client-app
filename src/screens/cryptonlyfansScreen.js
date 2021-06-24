import React from "react";

import { Text } from "../components";

import "../styles/screens/crypto.css";

//IMPORTING MEDIA ASSETS

import down_arrow from "../assets/icons/down_arrow.svg";

import reward_your_wallet from "../assets/images/reward_your_wallet.png"
import tokenomics_and_statistics from "../assets/images/tokenomics_and_statistics.png"
import roadmap_and_fundraiser from "../assets/images/roadmap_and_fundraiser.png"
import what_is_cof_tokens from "../assets/images/what_is_cof_tokens.png"
import what_is_cryptonlyfans from "../assets/images/what_is_cryptonlyfans.png"

import cof2 from "../assets/images/cof2.png"
import cof3 from "../assets/images/cof3.png"
import cof4 from "../assets/images/cof4.png"
import cof5 from "../assets/images/cof5.png"

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

const CryptonlyfansScreen = (pageScroll) => {
  const renderHero = (
    <div
      className="hero"
      style={{ backgroundPositionY: `${pageScroll * 0.5}px` }}
    >
      <img src={down_arrow} alt="arrow" />
      <p className="title">VERIFIED CREATOR PROFILES</p>
    </div>
  );

  const renderProfiles = (
    <div className="profile">
      <center className="content_title" style={{ marginBottom: "1.5em" }}>
        NO MORE FAKE PROFILES
      </center>
      <Text>
        SYMP.FANS is an exclusive creator network. We manually verify every
        creator profile on signup. No more fake profiles!
      </Text>
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
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

  const renderPremiumBioLinkPage = (
    <div className="block">
      <Block title="PREMIUM BIO-LINK PAGE" image={reward_your_wallet} />
      <center className="content_title">EXCLUSIVE ACCESS</center>
      <Text>
        Every influencer will receive access to an exclusive premium bio-link
        page at no cost!
      </Text>
      <Text style={{ marginTop: "1em" }}>
        Play the video below to see an example that showcases our premium link
        options
      </Text>
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
    </div>
  );

  const renderFatsPayouts = (
    <div className="block">
      <Block title="FAST PAYOUTS & LOWER COMMISSION" image={tokenomics_and_statistics} />
      <center className="content_title">MORE MONEY FASTER</center>
      <Text>
        We provide a lower threshold and commission charge for influencer
        withdrawals ensuring they can keep more of their funds and receive them
        faster
      </Text>
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
    </div>
  );

  const renderTokenRewards = (
    <div className="block">
      <Block title="5% SYMP TOKEN REWARDS" image={roadmap_and_fundraiser} />
      <center className="content_title">REWARD ACTIVE FANS</center>
      <Text>
        We reward fans with 5% back in SYMP on their purchases. This allows them
        to use their SYMP throughout the site
      </Text>
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
    </div>
  );

  const renderNotFor18 = (
    <div className="block">
      <Block title="NOT JUST FOR 18+" image={what_is_cof_tokens} />
      <center className="content_title">SUITED FOR ALL CREATORS</center>
      <Text>
        Our platform is open to all categories of influencers. Fans will have an
        option to show or hide 18+ profiles. This opens up our network to
        endless possibilities of content creation
      </Text>
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
    </div>
  );

  const renderVipMesaage = (
    <div className="block">
      <Block title="VIP MESSAGING" image={what_is_cryptonlyfans} />
      <center className="content_title">GET PERSONAL</center>
      <Text>
        Influencers can set a fee for priority messaging allowing fans to send
        VIP messages for a set duration. This provides a closer connection for
        fans
      </Text>
    </div>
  );

  return (
    <div className="crypto">
      {renderHero}
      {renderProfiles}
      {renderPremiumBioLinkPage}
      {renderFatsPayouts}
      {renderTokenRewards}
      {renderNotFor18}
      {renderVipMesaage}
    </div>
  );
};

export default CryptonlyfansScreen;
