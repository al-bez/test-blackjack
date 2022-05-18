import React from "react";
import styled from "styled-components";
import TopHeader from "./topHeader";
import WinnersList from "./winnersList";

const TopPlayers = styled(({ wager, ...props }) => {
  return (
    <div {...props}>
      <TopHeader
        imageSrc={wager.imageSrc}
        wagerType={wager.wagerType}
        pricePoolBtc={wager.pricePoolBtc}
        pricePoolMoney={wager.pricePoolMoney}
        startDate={wager.startDate}
        endDate={wager.endDate}
        winner={wager.winner}
        wagerToday={wager.wagerToday}
        wagerTop20Daily={wager.wagerTop20Daily}
        wagerTop20Weekly={wager.wagerTop20Weekly}
      />
      <WinnersList list={wager.playersList} />
    </div>
  );
})`
  background-color: #18191e;
  border-radius: 25px;
  overflow: hidden;
  margin: 30px 0;

  @media screen and (max-width: 428px) {
    margin: 17px 0;
  }
`;

export default TopPlayers;
