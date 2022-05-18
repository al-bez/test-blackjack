import React from "react";
import styled from "styled-components";

const CoinCurrency = styled.div`
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 700;

  @media screen and (max-width: 428px) {
    font-size: 8px;
  }
`;

const MoneyCyrrency = styled.div`
  color: #808191;
  font-family: Poppins;
  font-size: 14px;

  @media screen and (max-width: 428px) {
    font-size: 8px;
  }
`;

const WalletBtn = styled(({ ...props }) => {
  return (
    <a href="link-to-wallet" {...props}>
      <div>
        <img src="images/icons/wallet.svg" alt="wallet icon" />
      </div>
      <div>Wallet</div>
    </a>
  );
})`
  border-radius: 26px;
  background-image: linear-gradient(-34deg, #33c854 0%, #2fb08d 100%);
  padding: 18px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;

  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 700;
  @media screen and (max-width: 428px) {
    font-size: 8px;
    padding: 10px;
    gap: 8px;

    img {
      width: 13px;
      height: 10px;
    }
  }
`;

export const Wallet = styled(
  ({ coinCurrency = "0.00002626 LTC", moneyCurrency = "0.00276780 USD", ...props }) => {
    return (
      <div {...props}>
        <div className="wallet-currency">
          <img src="images/icons/ltc.png" alt="ltc icon" />
        </div>
        <div>
          <CoinCurrency>{coinCurrency}</CoinCurrency>
          <MoneyCyrrency>{moneyCurrency}</MoneyCyrrency>
        </div>
        <div>
          <WalletBtn />
        </div>
      </div>
    );
  }
)`
  border-radius: 26px;
  border: 1px solid #1b1d24;
  background-color: #14161d;
  padding: 0px 0 0 8px;

  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 428px) {
    display: inline-flex;

    .wallet-currency {
      img {
        width: 21px;
        height: 21px;
      }
    }
  }
`;

export const Search = styled(({ ...props }) => {
  return (
    <div {...props}>
      <input type="search" name="search" id="search" placeholder="Search everything here" />
      <img src="images/header/search.png" alt="" />
    </div>
  );
})`
  background-color: #0b0c0f;
  width: 545px;
  height: 53px;
  border: 0.5px solid #1b1d24;
  border-radius: 26px;
  position: relative;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #28292b;

  input {
    background-color: inherit;
    width: 100%;
    height: 100%;
    border-radius: 26px;
    border: none;
    padding: 0 0 0 25px;
    color: white;
    -webkit-appearance: none;
  }

  img {
    position: absolute;
    right: 9px;
    top: 7px;
  }

  @media screen and (max-width: 428px) {
    font-size: 9px;
    height: 30px;

    input {
      padding: 0 0 0 12px;
    }

    img {
      width: 23px;
      height: 24px;

      top: 3px;
      right: 3px;
    }
  }
`;

export const ChargeIcon = styled(({ ...props }) => {
  return (
    <div {...props}>
      <img src="images/header/charge.png" alt="charge icon" />
    </div>
  );
})`
  border-radius: 50%;
  background-color: #28292b;
  min-width: 38px;
  min-height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 428px) {
    min-width: 30px;
    min-height: 30px;
  }
`;

const ChargedLine = styled(({ percent, ...props }) => {
  return <div {...props}></div>;
})`
  width: ${(props: any) => props.percent}%;
  height: 100%;
  background-image: linear-gradient(to top, #20ffc3 0%, #81e068 100%);
`;

const ChargeLine = styled(({ ...props }) => {
  return (
    <div {...props}>
      <ChargedLine percent={55} />
    </div>
  );
})`
  width: 90%;
  height: 8px;
  border-radius: 4px;
  background-color: #11514e;
  overflow: hidden;
`;

const Charge = styled(({ ...props }) => {
  return (
    <div {...props}>
      <ChargeLine />
      <ChargeIcon />
    </div>
  );
})`
  background-color: #0b0c0f;
  display: flex;
  align-items: center;
  color: white;
  gap: 20px;
  border-radius: 26px;
  padding: 8px;

  width: 350px;
`;

const Header = styled(({ ...props }) => {
  return (
    <div {...props}>
      <Charge />
      <Search />
      <Wallet />
    </div>
  );
})`
  background-color: #191b20;
  border-radius: 26px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 12px 0;

  @media screen and (max-width: 428px) {
    display: none;
  }
`;

export default Header;
