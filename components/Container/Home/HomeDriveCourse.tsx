import React from "react";
import styled from "styled-components";
import HomeDCList from "./HomeDCList";
import HomeDCTitle from "./HomeDCTitle";
import DCTitleImg from "../../../public/assets/images/HomeDCImg.png";
import DCListSample from "../../../public/assets/images/HomeDCList.png";
import HomeDriveCourseData from "@/models/homedrivecoursedata";

const Box = styled.div`
  width: 110rem;
`;

const HomeDriveCourse = () => {
  const data1 = {
    title: "이번 여름\n노을 맛집\n드라이브 코스",
    description:
      "수평선 위 붉은 노을이 일렁이는 아름다운\n해안 드라이브 코스를 만나보세요.",
    image: DCTitleImg,
  };

  const driveCourseList: HomeDriveCourseData[][] = [
    [
      {
        id: "1",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 1,
        routeLength: 8,
      },
      {
        id: "2",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 1,
        routeLength: 8,
      },
      {
        id: "3",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 3,
        routeLength: 8,
      }
    ]
    ,
    [
      {
        id: "4",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 1,
        routeLength: 8,
      },
      {
        id: "5",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 4,
        routeLength: 3.5,
      },
      {
        id: "6",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 4,
        routeLength: 8,
      }
    ],
    [
      {
        id: "7",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 5,
        routeLength: 8,
      },
      {
        id: "7",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 5,
        routeLength: 8,
      },
      {
        id: "7",
        image: DCListSample,
        title: "제주 세화 해수욕장",
        difficulty: 5,
        routeLength: 8,
      }
    ]
  ];

  return (
    <Box>
      <HomeDCTitle title={data1} />
      <HomeDCList data={driveCourseList}/>
    </Box>
  );
};

export default HomeDriveCourse;
