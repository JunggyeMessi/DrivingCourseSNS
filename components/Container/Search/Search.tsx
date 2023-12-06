import React from "react";
import styled from "styled-components";
import SearchMenu from "./SearchMenu";
import SearchMap from "./SearchMap";
import { SearchListDriveCourse } from "@/models/drivecourse";
import DriveCourseExample from "../../../public/assets/images/DriveCourseExample.png";
import DriveCourseExample2 from "../../../public/assets/images/DriveCourseExample2.png";
import DriveCourseExample3 from "../../../public/assets/images/DriveCourseExample3.png";
;

const FlexBox = styled.div`
  display: flex;
  width: 110rem;
  flex-grow: 1;
  margin: 0 auto;
  height: 55rem;
`;

const dummyData: SearchListDriveCourse[] = [
  {
    id: "1",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },
  {
    id: "2",
    image: DriveCourseExample,
    title: "기장군 오시리아",
    routeLength: 23.5,
    hashtag: "#재미 #익스트림 #바다",
    region: "인천/경기"
  },
  {
    id: "3",
    image: DriveCourseExample2,
    title: "제주 세화 해수욕장",
    routeLength: 8.0,
    hashtag: "#감성 #힐링 #강",
    region: "제주"
  },
  {
    id: "4",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },
  {
    id: "5",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },
  {
    id: "6",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },
  {
    id: "7",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },
  {
    id: "8",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },
  {
    id: "9",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },
  {
    id: "10",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },
  {
    id: "11",
    image: DriveCourseExample3,
    title: "영종도 하늘정원",
    routeLength: 5.2,
    hashtag: "#감성 #힐링 #강",
    region: "인천/경기"
  },

];

const Search = () => {
  return (
    <FlexBox>
      <SearchMenu items={dummyData}></SearchMenu>
      <SearchMap></SearchMap>
    </FlexBox>
  );
};

export default Search;
