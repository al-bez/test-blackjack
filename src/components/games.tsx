import React, { useId } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowDimensions from "../hooks/sizes";
import {
  DEFAULT_POPULAR_GAMES,
  DEFAULT_TOP_WINNING_GAMES,
  DEFAULT_RECENTLY_PLAYED_GAMES,
} from "../constants/constants";

const Price = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 24px;
  color: #eee90e;

  @media screen and (max-width: 428px) {
    font-size: 8px;
    line-height: 14.25px;
  }
`;

const GameTitle = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
  text-transform: uppercase;

  @media screen and (max-width: 428px) {
    font-size: 8px;
    line-height: 14.25px;
  }
`;

const DevStudio = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;

  @media screen and (max-width: 428px) {
    font-size: 8px;
    line-height: 14.25px;
  }
`;

const SmallGameImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 428px) {
    width: 53px;
    height: 53px;
  }
`;

const SmallGameItem = styled(({ gameItem, ...props }) => {
  return (
    <a href={gameItem.link} {...props}>
      <div>
        <SmallGameImage src={gameItem.cover} alt={gameItem.coverAlt} />
      </div>
      <div>
        <GameTitle>{gameItem.description.title}</GameTitle>
        <DevStudio>{gameItem.description.devStudio}</DevStudio>
        <Price>
          {gameItem.description.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 3,
          })}
        </Price>
      </div>
    </a>
  );
})`
  display: flex;
  gap: 30px;
  border-radius: 10px;
  text-decoration: none;
  color: #ffffff;

  :hover {
    background-color: black;
    outline: 15px solid black;
  }

  @media screen and (max-width: 428px) {
    gap: 15px;
  }
`;

const SmallBlockTitle = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 40px;
  font-weight: 300;
  color: #565b6b;
  text-transform: uppercase;
  @media screen and (max-width: 428px) {
    font-size: 12px;
  }
`;

const SmallBlockWithGames = styled(({ games, ...props }) => {
  const { width, height } = useWindowDimensions();
  const id = useId();

  return (
    <div {...props}>
      <SmallBlockTitle>{games.listCategory}</SmallBlockTitle>
      {width <= 428 && <SmallGameItem gameItem={games.list[0]} />}
      {width > 428 &&
        games.list.map((game: any, index: number) => (
          <SmallGameItem key={`${id}-${index}`} gameItem={game} />
        ))}
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  flex: 0 0 auto;

  @media screen and (max-width: 428px) {
    gap: 20px;
  }
`;

const LargeGameImage = styled.img`
  width: 206px;
  height: 204px;
  border-radius: 10px;
  overflow: hidden;
`;

const LargeGameItem = styled(({ gameItem, ...props }) => {
  return (
    <a href={gameItem.link} {...props}>
      <LargeGameImage src={gameItem.cover} alt={gameItem.coverAlt} />
    </a>
  );
})`
  margin: 0 30px 0 0;
`;

const LargeBlockTitle = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 40px;
  font-weight: 300;
  color: #565b6b;
  text-transform: uppercase;
  margin: 0 0 35px 0;
`;

const LargeBlockSliderBtn = styled.div`
  font-size: 20px;
  line-height: 40px;
  background-color: #28292b;
  color: #62f098;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #62f098;
    color: #28292b;
  }
`;

const NextArrow = styled(({ className, style, onClick }) => {
  return (
    <LargeBlockSliderBtn
      className="slick-arrow"
      style={{
        ...style,
        display: "flex",
        position: "absolute",
        right: "0",
        top: "0",
        width: "34px",
        height: "34px",
        zIndex: 1,
        fontFamily: "Poppins",
        fontSize: "20px",
      }}
      onClick={onClick}
    >
      {">"}
    </LargeBlockSliderBtn>
  );
})``;

const PrevArrow = styled(({ className, style, onClick }) => {
  return (
    <LargeBlockSliderBtn
      className="slick-arrow"
      style={{
        ...style,
        display: "flex",
        position: "absolute",
        right: "41px",
        top: "0px",
        width: "34px",
        height: "34px",
        zIndex: 1,
        fontFamily: "Poppins",
        fontSize: "20px",
      }}
      onClick={onClick}
    >
      {"<"}
    </LargeBlockSliderBtn>
  );
})``;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: "large",
};

const LargeBlockWithGames = styled(({ games, ...props }) => {
  const id = useId();
  return (
    <div {...props}>
      <LargeBlockTitle>{games.listCategory}</LargeBlockTitle>
      <Slider {...settings}>
        {games.list.map((game: any, index: number) => (
          <LargeGameItem key={`${id}-${index}`} gameItem={game} />
        ))}
      </Slider>
    </div>
  );
})`
  position: relative;
  width: 442px;

  .large {
    position: static;
  }

  @media screen and (max-width: 428px) {
    display: none;
  }
`;

const Games = styled((props) => {
  return (
    <div {...props}>
      <SmallBlockWithGames games={DEFAULT_TOP_WINNING_GAMES} />
      <SmallBlockWithGames games={DEFAULT_RECENTLY_PLAYED_GAMES} />
      <LargeBlockWithGames games={DEFAULT_POPULAR_GAMES} />
    </div>
  );
})`
  background-color: #18191e;
  border-radius: 25px;
  padding: 45px 65px;
  display: flex;
  gap: 70px;
  margin: 0 0 30px 0;

  @media screen and (max-width: 428px) {
    padding: 19px;
    gap: 30px;

    margin: 0 0 17px 0;
  }
`;

export default Games;
