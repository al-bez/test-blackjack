import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";

const Info = styled(({ ...props }) => {
  return (
    <div {...props}>
      <img src="images/icons/i.png" alt="info icon" />
    </div>
  );
})`
  width: 30px;
  height: 30px;
  opacity: 0.3;
  position: absolute;
  left: 18px;
  top: 18px;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  @media screen and (max-width: 428px) {
    left: auto;
    right: 18px;
  }
`;

const TopHeaderImage = styled(({ image, ...props }) => {
  return (
    <div {...props}>
      <img src={image} alt="Spaceman" />
    </div>
  );
})`
  overflow: hidden;

  @media screen and (max-width: 428px) {
    img {
      width: 150px;
    }
  }
`;

const TimeLeftTitle = styled.div`
  font-family: Poppins;
  font-size: 20px;
  line-height: 40px;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: 428px) {
    line-height: normal;
    flex: 0 0 105px;
  }
`;

const calculateTimeLeft = (endDate: any) => {
  let eventTime = endDate;
  let currentTime = Math.floor(Date.now() / 1000);
  let leftTime = eventTime - currentTime;
  let duration = moment.duration(leftTime, "seconds");
  let interval = 1000;
  if (duration.asSeconds() <= 0) {
    clearInterval(interval);
  }
  duration = moment.duration(duration.asSeconds() - 1, "seconds");
  return {
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
};

const TimerContainer = styled.div`
  display: flex;
  gap: 13px;

  @media screen and (max-width: 428px) {
  }
`;

const Number = styled.div`
  width: 56px;
  height: 47px;
  border-radius: 13px;
  background-color: white;
  font-family: Poppins;
  font-size: 20px;
  line-height: 40px;
  font-weight: 400;
  text-transform: uppercase;
  color: #565b6b;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 428px) {
    width: 44px;
    height: 37px;
  }
`;

const Measure = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 40px;
  font-weight: 400;
  color: #565b6b;
  text-align: center;
`;

const TimerDigit = styled(({ number, measure, ...props }) => {
  return (
    <div {...props}>
      <Number>{number}</Number>
      <Measure>{measure}</Measure>
    </div>
  );
})``;

const TimeLeft = styled(({ endDate, startDate, ...props }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);
  });

  return (
    <div {...props}>
      <TimeLeftTitle>Time remaining</TimeLeftTitle>
      <TimerContainer>
        {timeLeft.days ? <TimerDigit number={timeLeft.days} measure="days" /> : null}
        {timeLeft.days || timeLeft.hours ? (
          <TimerDigit number={timeLeft.hours} measure="hours" />
        ) : null}
        <TimerDigit number={timeLeft.minutes} measure="min" />
        <TimerDigit number={timeLeft.seconds} measure="sec" />
      </TimerContainer>
    </div>
  );
})`
  align-self: center;

  @media screen and (max-width: 428px) {
    display: flex;
    justify-content: space-between;
    justify-self: end;
  }
`;

const WagerTitle = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #30bd73;

  @media screen and (max-width: 428px) {
  }
`;

const WagerSubtitle = styled.div`
  font-family: Poppins;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: 428px) {
  }
`;

const PricePoolBtc = styled.div`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 400;
  color: #eee90e;

  @media screen and (max-width: 428px) {
  }
`;

const PricePoolMoney = styled.div`
  font-family: Poppins;
  font-size: 20px;
  color: #565b6b;
`;

const TopHeaderWagerInfo = styled(({ wagerType, pricePoolBtc, pricePoolMoney, ...props }) => {
  return (
    <div {...props}>
      <WagerTitle>{wagerType}</WagerTitle>
      <WagerSubtitle>Contest prize pool</WagerSubtitle>
      <PricePoolBtc>{pricePoolBtc}</PricePoolBtc>
      <PricePoolMoney>{pricePoolMoney}</PricePoolMoney>
    </div>
  );
})`
  align-self: center;

  @media screen and (max-width: 428px) {
    flex: 0 0 50%;
  }
`;

const Stats = styled(({ wagerToday, wagerTop20Daily, wagerTop20Weekly, ...props }) => {
  return (
    <div {...props}>
      <ul>
        <li>
          You wagered today <span>{wagerToday}</span>
        </li>
        <li>
          Wager <span>${wagerTop20Daily}</span> for TOP 20 Daily
        </li>
        <li>
          Wager <span>${wagerTop20Weekly}</span> for TOP 20 Weekly
        </li>
      </ul>
    </div>
  );
})`
  background-color: #232429;
  padding: 30px;
  border-radius: 25px;
  font-family: Poppins;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  align-self: center;

  span {
    color: #30bd73;
  }

  ul {
    list-style: none;
  }

  ul li::before {
    content: "•";
    color: yellow;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    width: 15px;
    margin-left: 5px;
  }

  @media screen and (max-width: 428px) {
    padding: 25px;
    margin: 0 auto 50px;
  }
`;

const WinnerProfile = styled(({ avatar, username, ...props }) => {
  return (
    <div {...props}>
      <img src={avatar} alt="winners avatar" />
      <p>{username}</p>
    </div>
  );
})`
  text-align: center;
  p {
    font-family: Poppins;
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
    color: #ffffff;
  }
`;

const PreviousWinner = styled(({ totalWager, prize, ...props }) => {
  return (
    <div {...props}>
      <p>{prize ? "Prize won " : "Previous winner"}</p>
      <span>{prize ? prize : totalWager + " wagered"}</span>
    </div>
  );
})`
  text-align: center;
  background-color: #1c1c20;
  border-radius: 27px;
  padding: 5px 50px;
  line-height: 18px;

  p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
  }

  span {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    color: #30bd73;
  }
`;

const WinnerPrize = styled(({ prize, ...props }) => {
  return (
    <div {...props}>
      Prize won: <span>{prize}</span>
    </div>
  );
})`
  font-family: Poppins;
  font-size: 14px;
  line-height: 40px;
  font-weight: 400;
  color: #ffffff;
`;

const WinnerInfo = styled(({ previusWinner, totalWager, prize, ...props }) => {
  return (
    <div {...props}>
      {previusWinner ? (
        <PreviousWinner totalWager={totalWager} prize={prize} />
      ) : (
        <WinnerPrize prize={prize} />
      )}
    </div>
  );
})``;

const Winner = styled(({ winner, ...props }) => {
  return (
    <div {...props}>
      <WinnerProfile avatar={winner.avatar} username={winner.username} />
      <WinnerInfo
        previusWinner={winner.previusWinner}
        totalWager={winner.totalWager}
        prize={winner.prize}
      />
    </div>
  );
})`
  background-color: #24252a;
  padding: 18px;
  border-radius: 13px;
  align-self: center;

  @media screen and (max-width: 428px) {
    margin: 0 auto 50px;
  }
`;

const TopHeader = styled(
  ({
    imageSrc,
    wagerType,
    pricePoolBtc,
    pricePoolMoney,
    startDate,
    endDate,
    winner,
    wagerToday,
    wagerTop20Daily,
    wagerTop20Weekly,
    ...props
  }) => {
    return (
      <div {...props}>
        <Info />
        <TopHeaderImage image={imageSrc} />
        <TopHeaderWagerInfo
          wagerType={wagerType}
          pricePoolBtc={pricePoolBtc}
          pricePoolMoney={pricePoolMoney}
        />
        <TimeLeft endDate={endDate} startDate={startDate} />
        {winner ? (
          <Winner winner={winner} />
        ) : (
          <Stats
            wagerToday={wagerToday}
            wagerTop20Daily={wagerTop20Daily}
            wagerTop20Weekly={wagerTop20Weekly}
          />
        )}
      </div>
    );
  }
)`
  position: relative;
  padding: 0 16px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 0;
  background-color: #18191e;
  border-radius: 25px;

  @media screen and (max-width: 428px) {
    flex-wrap: wrap;
    padding: 20px 16px;
  }
`;

export default TopHeader;
