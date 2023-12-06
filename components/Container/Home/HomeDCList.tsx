import HomeDriveCourseData from "@/models/homedrivecoursedata";
import React from "react";
import styled from "styled-components";
import HomeDCLine from "./HomeDCLine";

const VerticalFlex = styled.div`
  display: flex;
  padding: 0 5rem;
  flex-direction: column;
`;

const HomeDCList: React.FC<{ data: HomeDriveCourseData[][] }> = (props) => {
  return (
    <VerticalFlex>
      {props.data.map((item, index) => (
        <HomeDCLine line={item} key={index}></HomeDCLine>
      ))}
    </VerticalFlex>
  );
};

export default HomeDCList;
