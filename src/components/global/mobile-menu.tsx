import React from "react";
import styled from "styled-components";
import Menu from "./menu";
import { Wallet } from "./header";
import { ProfileActivity } from "./profile";
import { Search } from "./header";
import { ChargeIcon } from "./header";
import { ProfileIcon } from "./profile";

const closeMobileMenu = () => {
  document.querySelector("#mobile-menu-container")?.classList.remove("mobile-menu-opened");
  document.querySelector(".close-button")?.classList.remove("show-button");
};

const openMobileMenu = () => {
  document.querySelector("#mobile-menu-container")?.classList.add("mobile-menu-opened");
  document.querySelector(".close-button")?.classList.add("show-button");
};

const MessagesButton = styled.div`
  min-width: 30px;
  min-height: 30px;
  background-color: #242731;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #e92075;
  font-size: 10px;
  border-radius: 27px;
`;

const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

const MobileLogo = styled.a`
  img {
    width: 49px;
    height: 32px;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 12px 0;
`;

const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 12px 0;
  gap: 8px;
`;

const MobileMenu = styled((props) => {
  return (
    <div {...props}>
      <div id="mobile-menu-container">
        <Menu />
        <button onClick={closeMobileMenu} className="close-button">
          close
        </button>
      </div>
      <MenuHeader>
        <BurgerButton onClick={openMobileMenu}>
          <img src="images/icons/burger.svg" alt="burger icon" />
        </BurgerButton>
        <MobileLogo href="home-link">
          <img src="images/logo.png" alt="logo" />
        </MobileLogo>
        <Wallet />
        <ProfileActivity activity={false} />
      </MenuHeader>
      <MenuFooter>
        <Search />
        <ChargeIcon />
        <ProfileIcon enabled={false} src="images/icons/notification.svg" />
        <MessagesButton>+99</MessagesButton>
      </MenuFooter>
    </div>
  );
})`
  display: none;
  font-family: Poppins;

  @media screen and (max-width: 428px) {
    display: block;

    .mobile-menu-opened > * {
      display: flex;
      z-index: 10;
      left: 0;
      width: 100vw;
    }

    .close-button {
      position: fixed;
      z-index: 11;
      top: 0;
      background-color: yellow;
      border: none;
      outline: none;
      font-size: 30px;
      display: none;
    }

    .show-button {
      display: block;
    }
  }
`;

export default MobileMenu;
