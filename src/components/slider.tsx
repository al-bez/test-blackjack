import React, { useId } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DEFAULT_BANNERS } from "../constants/constants";

const SliderBtn = styled.div`
  font-size: 20px;
  line-height: 40px;
  background-color: #28292b;
  color: #62f098;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #62f098;
    color: #28292b;
  }
`;

const NextArrow = styled(({ className, style, onClick }) => {
  return (
    <SliderBtn
      className="slick-arrow"
      style={{
        ...style,
        display: "flex",
        position: "absolute",
        right: "-17px",
        top: "76px",
        width: "34px",
        height: "34px",
        zIndex: 1,
        fontFamily: "Poppins",
        fontSize: "20px",
      }}
      onClick={onClick}
    >
      {">"}
    </SliderBtn>
  );
})``;

const PrevArrow = styled(({ className, style, onClick }) => {
  return (
    <SliderBtn
      className="slick-arrow"
      style={{
        ...style,
        display: "flex",
        position: "absolute",
        left: "-17px",
        top: "76px",
        width: "34px",
        height: "34px",
        zIndex: 1,
        fontFamily: "Poppins",
        fontSize: "20px",
      }}
      onClick={onClick}
    >
      {"<"}
    </SliderBtn>
  );
})``;

const DESKTOP_SLIDER_SETTINGS = {
  dots: false,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 429,
      settings: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
      },
    },
  ],
};

const Banner = styled(({ href, imagePath, ...props }) => {
  return (
    <a href={href} {...props}>
      <img src={imagePath} alt="banner" />
    </a>
  );
})`
  display: block;
  margin: 0 30px 0 0;

  @media screen and (max-width: 428px) {
    margin: 0;

    img {
      width: 333px;
      height: 186px;
    }
  }
`;

const BannerSlider = styled(({ banners = DEFAULT_BANNERS }) => {
  const id = useId();
  return (
    <Slider {...DESKTOP_SLIDER_SETTINGS}>
      {banners.map((banner: any, index: number) => (
        <Banner key={`${id}-${index}`} imagePath={banner.src} href={banner.href} />
      ))}
    </Slider>
  );
})``;

export default BannerSlider;
