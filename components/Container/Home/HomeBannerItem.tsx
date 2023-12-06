import React from "react";
import styled from "styled-components";
import { HomeBannerModel } from "@/models/drivecourse";
import Image, { StaticImageData } from "next/image";

const Banner = styled.div`
  width: 110rem;
  height: 100%;
  position: relative;
  background: linear-gradient(90deg, #2e5f9a 0%, rgba(46, 95, 154, 0) 40%);
`;

const BannerImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const Title = styled.div`
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 400;
  font-family: "Pretendard Variable";
  color: #fff;
  line-height: 6rem;
  position: absolute;
  top: 17%;
  left: 7%;
`;

const Button = styled.button`
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  font-family: "Pretendard Variable";
  background-color: #fff;
  border: 0;
  position: absolute;
  bottom: 35%;
  left: 7%;
  padding: 1rem 2rem;
  border-radius: 43px;
`;

const HomeBannerItem: React.FC<{ item: HomeBannerModel }> = (props) => {
  return (
    <Banner>
      <BannerImage src={props.item.image} alt={props.item.title}></BannerImage>
      <Title>{props.item.title}</Title>
      <Button>{props.item.button}</Button>
    </Banner>
  );
};

export default HomeBannerItem;
