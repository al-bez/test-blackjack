import React from "react";
import styled from "styled-components";
import { CurrenciesIcons } from "../currency";

const FooterTop = styled(({ ...props }) => {
  return (
    <div {...props}>
      <div className="left">
        <p>
          Blackjack.fun is fully licensed, owned and operated by Satya Code SRL, registration
          number: 3102813297, registered address: San Jose, Montes De Oca, San Pedro, 400N 25E Los
          Yoses, CR. License nr: GLH-OCCHKTW0701162022
        </p>
      </div>
      <div className="center">
        <div className="grow">
          <p className="currencies">We accpet gambling with the following currencies</p>
          <CurrenciesIcons />
        </div>
        <div className="socials">
          <p>Fallow us on:</p>
          <p>
            <a href="instagramm-link">
              <img src="images/icons/instagramm.png" alt="instagramm icon" />
            </a>
            <a href="facebook-link">
              <img src="images/icons/facebook.png" alt="facebook icon" />
            </a>
            <a href="twitter-link">
              <img src="images/icons/twitter.png" alt="twitter icon" />
            </a>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="grow">
          <p>For more information please contact us at info@blackjack.fun</p>
        </div>
        <p>
          <a href="kyc-policy-link">KYC Policy</a>
          <a href="terms-and-conditions-link">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
})`
  background-color: #191b20;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  font-family: Poppins;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  color: #777a7f;
  height: 100%;

  div {
    flex: 0 0 30%;
  }

  img {
    margin: 0 19px 0 0;
  }

  .right a {
    font-family: Poppins;
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
    color: #d7dce2;
    display: block;
    text-decoration: none;
  }

  .center {
    display: flex;
    flex-direction: column;
    min-height: 230px;
  }

  .right {
    display: flex;
    flex-direction: column;
    min-height: 230px;
  }

  .grow {
    flex: 1 0 auto;
  }

  .socials {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  @media screen and (max-width: 428px) {
    padding: 20px;
    display: block;
    text-align: center;

    .left {
      margin-bottom: 50px;
    }

    .center {
      min-height: auto;
      margin-bottom: 40px;
    }

    .socials {
      display: none;
    }

    .center img {
      width: 23px;
      height: 23px;
    }

    .currencies {
      margin-bottom: 30px;
    }

    .right {
      min-height: auto;
    }

    .right div {
      margin-bottom: 40px;
    }
  }
`;

const FooterBottom = styled(({ ...props }) => {
  return (
    <div {...props}>
      <div id="gc">
        <img src="images/footer/gc.png" alt="gaming curacao" />
      </div>
      <div id="eighteen">
        <img src="images/footer/18.png" alt="18+" />
      </div>
      <div id="rg">
        <img src="images/footer/rg.png" alt="responsible gaming" />
      </div>
      <div id="pf">
        <img src="images/footer/pf.png" alt="provably fair" />
      </div>
      <div id="ss">
        <img src="images/footer/ss.png" alt="safe secured" />
      </div>
      <div id="bit">
        <img src="images/footer/bitcointalk.png" alt="bitcointalk.org" />
      </div>
    </div>
  );
})`
  background-color: #18191e;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 428px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 15px;

    #gc {
      order: 10;
    }
    #eighteen {
    }
    #rg {
    }
    #pf {
    }
    #ss {
    }
    #bit {
    }
  }
`;

const Footer = styled(({ ...props }) => {
  return (
    <div {...props}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
})`
  border-radius: 25px;
  overflow: hidden;
`;

export default Footer;
