import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchCustomFilter from "./SearchCustomFilter";
import { useRouter } from "next/router";

const Window = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RegionFilter = styled.select`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  font-family: "Pretendard Variable";
  border-radius: 30px;
  display: flex;
`;

const region: string[] = [
  "전국",
  "서울",
  "경기/인천",
  "강원",
  "충청/대전/세종",
  "전라/광주",
  "경상/대구/울산",
  "부산",
  "제주",
];

const customAlign: string[] = [
  "✨최신순",
  "💖인기순",
  "↗코스명 오름차순",
  "↘코스명 내림차순",
  "🚗난이도 낮은 순",
  "🚀난이도 높은 순",
];

const SearchFilter = () => {
  const router = useRouter();

  const [currentRegion, setCurrentRegion] = useState<string>(region[0]);
  const [currentAlign, setCurrentAlign] = useState<string>(customAlign[0]);

 

  useEffect(() => {
    try {
      if (currentAlign) {
        router.replace(
          {
            pathname: "/search",
            query: {
              ...router.query,
              align: currentAlign,
              page: 1,
            },
          },
          undefined,
          { shallow: true }
        );
      }
    } catch (e: any) {
      console.error(e.response);
    }
  }, [currentAlign]);

  useEffect(() => {
    try {
      if (currentRegion) {
        router.replace(
          {
            pathname: "/search",
            query: {
              ...router.query,
              region: currentRegion,
              page: 1,
            },
          },
          undefined,
          { shallow: true }
        );
      }
    } catch (e: any) {
      console.error(e.response);
    }
  }, [currentRegion]);

  return (
    <Window>
      <SearchCustomFilter item={region} setvalue={setCurrentRegion} value={currentRegion}></SearchCustomFilter>
      <SearchCustomFilter item={customAlign} setvalue={setCurrentAlign} value={currentAlign}></SearchCustomFilter>
    </Window>
  );
};

export default SearchFilter;
