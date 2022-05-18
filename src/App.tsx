import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import BannerSlider from "./components/slider";
import Currency from "./components/currency";
import Games from "./components/games";
import TopPlayers from "./components/topPlayers";
import Header from "./components/global/header";
import Footer from "./components/global/footer";
import Menu from "./components/global/menu";
import Profile from "./components/global/profile";
import Statistics from "./components/statistics";
import TopHeader from "./components/topHeader";
import MobileMenu from "./components/global/mobile-menu";
import { DEFAULT_PROFILE_SETTINGS } from "./constants/constants";
import { DEFAULT_DAILY_WAGER } from "./constants/constants";
import { DEFAULT_WEEKLY_WAGER } from "./constants/constants";
import { DEFAULT_TODAY_HIGHEST_BET } from "./constants/constants";
import { DEFAULT_DAILY_BIGGEST_WIN } from "./constants/constants";
import { DEFAULT_HOURLY_BIGGEST_WIN } from "./constants/constants";

const MainContainer = styled.div`
  max-width: 1268px;
  margin: 0 auto 0 267px;
  padding: 12px 0;

  @media screen and (max-width: 428px) {
    margin: 0;
    padding: 0 12px;
  }
`;

const WhatIsCryptoCasino = styled(({ ...props }) => {
  return (
    <div {...props}>
      <h3>What is crypto casino?</h3>
      <p>
        Bitcoin and other cryptocurrencies have been growing and making a big name for themselves
        over the last few years. When it just started, it was a risk to buy bitcoin and the ones
        taking the risk are the ones benefiting from it now. Crypto has been probable fair income
        from it going up and down in the market, and the best about it all – is that you can do it
        completely anonymously.
      </p>
      <a href="read-all-link">read all</a>
    </div>
  );
})`
  background-color: #191b20;
  padding: 30px;
  border-radius: 25px;
  margin: 0 0 30px 0;

  h3 {
    font-family: Poppins;
    font-size: 20px;
    line-height: 34px;
    font-weight: 900;
    color: #d7dce2;
  }

  p {
    font-family: Poppins;
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
    color: #777a7f;
  }

  a {
    font-family: Poppins;
    font-size: 20px;
    line-height: 34px;
    font-weight: 900;
    color: #d7dce2;
  }

  @media screen and (max-width: 428px) {
    margin: 0 0 15px 0;
  }
`;

const App = styled((props) => {
  return (
    <div {...props}>
      <Menu />
      <Profile profileSettings={DEFAULT_PROFILE_SETTINGS} />
      <MobileMenu />
      <MainContainer>
        <Header />
        <GlobalStyle />
        <BannerSlider />
        <Currency />
        <Games />
        <TopPlayers wager={DEFAULT_DAILY_WAGER} />
        <TopPlayers wager={DEFAULT_WEEKLY_WAGER} />
        <TopHeader {...DEFAULT_TODAY_HIGHEST_BET} />
        <TopPlayers wager={DEFAULT_DAILY_BIGGEST_WIN} />
        <TopPlayers wager={DEFAULT_HOURLY_BIGGEST_WIN} />
        <Statistics />
        <WhatIsCryptoCasino />
        <Footer />
      </MainContainer>
    </div>
  );
})`
  background-color: #202225;
  min-height: 100vh;

  position: relative;

  @media screen and (max-width: 428px) {
    padding: 12px;
  }
`;

export default App;
