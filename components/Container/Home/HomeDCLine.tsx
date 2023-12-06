import HomeDriveCourseData from "@/models/homedrivecoursedata";
import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

const HorizontalFlex = styled.div`
  display: flex;
  height: 30rem;
  justify-content: space-between;
`;

const MainFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
`;

const DriveCourseImage = styled(Image)`
  width: 32rem;
  height: 24rem;
  border-radius: 16px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0; 
`;

const DriveCourseTitle = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 700;
  font-size: 1.5rem;
`;

const DriveCourseDifficulty = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 400;
  font-size: 1.3rem;
`;

const DriveCourseRouteLength = styled.div`
  font-family: "Pretendard Variable";
  font-weight: 400;
  font-size: 1.3rem;
`;

const HomeDCLine: React.FC<{ line: HomeDriveCourseData[] }> = (props) => {

  return (
    <HorizontalFlex>
      {props.line.map((item, index) => (
        <MainFlex key={index}>
          <DriveCourseImage src={item.image} alt=""></DriveCourseImage>
          <TextBox>
            <DriveCourseTitle>{item.title}</DriveCourseTitle>
            <DriveCourseDifficulty>
              {(() => {
                switch (item.difficulty) {
                  case 1:
                    return `${"매우 쉬움"}`;
                  case 2:
                    return `${"쉬움"}`;
                  case 3:
                    return `${"보통"}`
                  case 4:
                    return `${"어려움"}`;
                  case 5:
                    return `${"매우 어려움"}`;
                  default:
                    return `${""}`;
                }            
              })()}
            </DriveCourseDifficulty>
          </TextBox>
          <DriveCourseRouteLength>
            {item.routeLength.toFixed(1)}km 코스
          </DriveCourseRouteLength>
        </MainFlex>
      ))}
    </HorizontalFlex>
  );
};

export default HomeDCLine;
