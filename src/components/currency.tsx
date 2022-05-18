import React, { useId } from "react";
import styled from "styled-components";
import { DEFAULT_ICONS } from "../constants/constants";

const CurrenciesText = styled.div`
  font-family: Poppins;
  font-size: 20px;
  color: #565b6b;
  margin: 0 50px 0 0;

  @media screen and (max-width: 428px) {
    font-size: 12px;
  }
`;

export const CurrenciesIcons = styled(({ icons = DEFAULT_ICONS, ...props }) => {
  const id = useId();
  return (
    <div {...props}>
      {icons.map((icon: any, index: number) => (
        <img key={`${id}-${index}`} src={icon.src} alt={icon.alt} />
      ))}
    </div>
  );
})`
  img {
    margin: 0 22px;
  }

  @media screen and (max-width: 428px) {
    img {
      margin: 0 7px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Currency = styled((props) => {
  return (
    <div {...props}>
      <CurrenciesText>ACCEPTED CURRENCIES</CurrenciesText>
      <CurrenciesIcons />
    </div>
  );
})`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px 0 36px;

  @media screen and (max-width: 428px) {
    margin: 17px 0;
  }
`;

export default Currency;
