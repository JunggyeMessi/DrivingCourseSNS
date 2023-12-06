import Search from "@/components/Container/Search/Search";
import Header from "@/components/Header/Header";
import React from "react";
import styled from "styled-components";

const FullScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function SearchPage() {
  return (
    <div>
      <FullScreen>
        <Header />
        <Search />
      </FullScreen>
    </div>
  );
}

export default SearchPage;
