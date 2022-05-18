import React from "react";
import styled from "styled-components";

const LiveSupport = styled(({ ...props }) => {
  return (
    <div {...props}>
      <div>
        <img src="images/menu/support.png" alt="support icon" />
      </div>
      <div>Live support</div>
    </div>
  );
})`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuFooter = styled(({ ...props }) => {
  return (
    <div {...props}>
      <ul>
        <li>
          <a href="recent-games-link">
            <div className="image">
              <img src="images/menu/recent.png" alt="recent games link" />
            </div>
            Recent Games
          </a>
        </li>
        <li>
          <a href="favourites-link">
            <div className="image">
              <img src="images/menu/favorites.png" alt="favourites link" />
            </div>
            Favourites
          </a>
        </li>
      </ul>

      <LiveSupport />
    </div>
  );
})`
  flex: 0 0 auto;
`;

export const Logo = styled.div`
  margin: 24px 0 80px 54px;

  @media screen and (max-width: 428px) {
    margin: 48px 0 40px 54px;

    img {
      width: 200px;
    }
  }
`;

const Menu = styled((props) => {
  return (
    <div className="kkk" {...props}>
      <div className="MenuWrapper">
        <Logo>
          <a href="home-link">
            <img src="images/logo.png" alt="logo" />
          </a>
        </Logo>
        <ul>
          <li>
            <a href="home-link">
              <div className="image">
                <img src="images/menu/menu01.png" alt="home link" />
              </div>
              Home
            </a>
          </li>
          <li>
            <a className="active-link" href="blackjack-link">
              <div className="image">
                <img src="images/menu/menu02.png" alt="blackjack link" />
              </div>
              BLACKJACK
            </a>
          </li>
          <li>
            <a href="provably-fair-link">
              <div className="image">
                <img src="images/menu/menu03.png" alt="provably fair link" />
              </div>
              Provably Fair
            </a>
          </li>
          <li>
            <a href="live-casinos-link">
              <div className="image">
                <img src="images/menu/menu04.png" alt="live casinos link" />
              </div>
              Live Casinos
            </a>
          </li>
          <li>
            <a href="affiliates-link">
              <div>
                <div className="image">
                  <img src="images/menu/menu05.png" alt="affiliates link" />
                </div>
              </div>
              Affiliates
            </a>
          </li>
          <li>
            <a className="raffle" href="raffle-link">
              <div className="image">
                <img src="images/menu/menu06.png" alt="raffle link" />
              </div>
              The Raffle
            </a>
          </li>
          <li>
            <a className="elite" href="elite-seat-link">
              <div className="image">
                <img src="images/menu/menu07.png" alt="elite seat link" />
              </div>
              ELITE SEAT
            </a>
          </li>
        </ul>
      </div>
      <MenuFooter />
    </div>
  );
})`
  position: fixed;
  width: 237px;
  min-height: 100vh;
  background-color: #191b20;
  display: flex;
  flex-direction: column;

  .image {
    background-color: #28292b;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: Poppins;
    font-size: 14px;
    color: #ffffff;
  }

  li {
    margin: 0 0 12px 0;
  }

  .raffle {
    color: #39a24f;
  }

  .elite {
    font-weight: 900;
    color: #ed1e63;
  }

  .active-link {
    background-color: #28292b;
    width: 100%;
    color: #eeea0f;
  }

  .MenuWrapper {
    flex: 1 0 auto;
  }

  @media screen and (max-width: 428px) {
    display: none;
    min-height: 98vh;
    align-items: center;
    width: 100vw;

    * {
      font-size: 40px !important;
    }
  }
`;

export default Menu;
