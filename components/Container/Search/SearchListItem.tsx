import React from "react";
import styled from "styled-components";
import { SearchListDriveCourse } from "@/models/drivecourse";
import Image from "next/image";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1.5rem 0;
`;
const ImageBox = styled(Image)`
  width: 10rem;
  height: 10rem;
  border-radius: 16px;
`;
const TextBox = styled.div`
  margin-left: 1rem;
`;
const Region = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 400;
  font-size: 1.2rem;
  background-color: #ececec;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 16px;
`;
const Title = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 600;
  font-size: 1.8rem;
  padding: 0.5rem 0;
`;
const RouteLength = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 400;
  font-size: 1.6rem;
`;
const EndBox = styled.div`
  padding: 0.5rem 0;
`;
const HashTag = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 400;
  font-size: 1.35rem;
  color: #6a6b6a;
`;
const Heart = styled.div``;

const SearchListItem: React.FC<{ item: SearchListDriveCourse }> = (props) => {
  return (
    <Box>
      <ImageBox src={props.item.image} alt={props.item.title}></ImageBox>
      <TextBox>
        <Region>{props.item.region}</Region>
        <Title>{props.item.title}</Title>
        <RouteLength>{props.item.routeLength.toFixed(1)}km 코스</RouteLength>
        <EndBox>
          <HashTag>{props.item.hashtag}</HashTag>
          <Heart></Heart>
        </EndBox>
      </TextBox>
    </Box>
  );
};

export default SearchListItem;
