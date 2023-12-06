import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";

const TilteImage = styled(Image)`
  width: 66rem;
  height: 15rem;
  border-radius: 16px;
`;

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const HorizontalFlex = styled.div`
  display: flex;
  padding: 6rem 5rem;
  justify-content: space-between;
`;

const MainText = styled.div`
  white-space: pre-wrap;
  text-align: right;
  font-family: 'Pretendard Variable';
  font-weight: 700;
  font-size: 3rem;
  line-height: normal;
`;

const SuBText = styled.div`
  white-space: pre-wrap;
  text-align: right;
  font-family: 'Pretendard Variable';
  font-weight: 400;
  font-size: 1.3rem;
  line-height: normal;
  margin-top: 0.5rem;
`;

const HomeDCTitle: React.FC<{
  title: {
    title: string;
    description: string;
    image: StaticImageData;
  };

}> = (props) => {
  return (
    <HorizontalFlex>
      <TilteImage src={props.title.image} alt=""/>
      <VerticalFlex>
        <MainText>{props.title.title}</MainText>
        <SuBText>{props.title.description}</SuBText>
      </VerticalFlex>
    </HorizontalFlex>
  );
};

export default HomeDCTitle;
