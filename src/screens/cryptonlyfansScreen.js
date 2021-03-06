import React from "react";

import { Text } from "../components";

import "../styles/screens/crypto.css";

//IMPORTING MEDIA ASSETS

import down_arrow from "../assets/icons/down_arrow.svg";

import symp_rewards from "../assets/images/symp_rewards.png"
import not_just from "../assets/images/not_just.png"
import premium_bio from "../assets/images/premium_bio.png"
import fast_payouts from "../assets/images/fast_payouts.png"
import vip_messaging from "../assets/images/vip_messaging.png"

import cof2 from "../assets/images/cof2.png"
import cof3 from "../assets/images/cof3.png"
import cof4 from "../assets/images/cof4.png"
import cof5 from "../assets/images/cof5.png"

import "../styles/screens/contactus.css";

const Block = ({ title, image }) => {
  return (
    <div
      className="block_one"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        marginBottom: "28px",
      }}
    >
      <img src={down_arrow} alt="arrow" />
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
        CRYPTONLYFANZ is an exclusive creator network. We manually verify every
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
    <div >
      <Block  image={premium_bio} />
      <center className="content_title">EXCLUSIVE ACCESS</center>
      <Text>
        Every influencer will receive access to an Exclusive bio-link
        page at no cost!
      </Text>
      {/* <Text style={{ marginTop: "1em" }}>
        Play the video below to see an example that showcases our premium link
        options
      </Text> */}
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
    </div>
  );

  const renderFatsPayouts = (
    <div>
      <Block title="FAST PAYOUTS & LOWER COMMISSION" image={fast_payouts} />
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
    <div >
      <Block title="Video chat" image={symp_rewards} />
      {/* <center className="content_title">REWARD ACTIVE FANS</center> */}
      <Text>
        Requesting paid video chat time is an option and at the discretion of content providers to
enable, decline or accept.

      </Text>
      <div className="arrow">
        <img src={down_arrow} alt="arrow" />
      </div>
    </div>
  );

  const renderNotFor18 = (
    <div >
      <Block title="Exclusively for 18+ Users" image={not_just} />
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
    <div>
      <Block title="VIP MESSAGING" image={vip_messaging} />
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
      {/* {renderNotFor18} */}
      {renderVipMesaage}
    </div>
  );
};

export default CryptonlyfansScreen;
