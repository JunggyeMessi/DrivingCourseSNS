import React from "react";
import styled from "styled-components";
import SearchWindow from "./SearchWindow";
import SearchList from "./SearchList";
import { SearchListDriveCourse } from "@/models/drivecourse";

const Menu = styled.div`
  flex-grow: 1;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
`;

const CenterAlign = styled.div`
    width: 26rem;
    display: flex;
    flex-direction: column;   
`;

const SearchMenu: React.FC<{ items: SearchListDriveCourse[]}> = (props) => {
  return (
    <Menu>
      <CenterAlign>
        <SearchWindow></SearchWindow>
        <SearchList items={props.items}></SearchList>
      </CenterAlign>
    </Menu>
  );
};

export default SearchMenu;
