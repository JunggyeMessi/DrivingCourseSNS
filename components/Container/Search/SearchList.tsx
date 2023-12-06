import React from "react";
import styled from "styled-components";
import { SearchListDriveCourse } from "@/models/drivecourse";
import SearchListItem from "./SearchListItem";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 2rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #a5a5a5; /* 스크롤바 막대 색상 */
    border-radius: 12px;
  }
`;

const SearchList: React.FC<{ items: SearchListDriveCourse[] }> = (props) => {
  return (
    <Box>
      {props.items.map((item, index) => (
        <SearchListItem key={index} item={item}></SearchListItem>
      ))}
    </Box>
  );
};

export default SearchList;
