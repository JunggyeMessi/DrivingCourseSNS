import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { SearchImage, CloseImage } from "@/public/assets/svg/svg";

const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25.5rem;
  border-radius: 30px;
  border: 1px solid #353735;
  background-color: #ffffff;
  padding: 0.6rem 0.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  > :first-of-type {
    transition: color 0.2s;
    :hover {
      color: gray;
    }
  }
  > input {
    width: 18rem;
    border: none;
    outline: none;
    color: #888a88;
    font-family: "Pretendard Variable";
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    margin-left: 0.2rem;
  }

  > svg {
    padding: 0.5rem 0.7rem;
    color: #2d2d2d;
  }
`;

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      if (search) {
        router.replace(
          {
            pathname: "/search",
            query: {
              ...router.query,
              search: search,
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
  }, [search]);

  // const clickSearchImg = () => setClick(click => !click);

  const backPage = () => {
    setSearch("");
    router.replace(
      {
        pathname: "/search",
        query: {
          ...router.query,
          search: "",
          page: 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(() => e.target.value);
      console.log(e.target.value);
    },
    [search]
  );

  return (
    <Bar>
      <SearchImage />
      <input
        type="text"
        placeholder="드라이브, 어디로 떠날까요?"
        autoFocus
        autoComplete="off"
        value={search}
        onChange={handleSearchValue}
      />
      <CloseImage onClick={backPage} search={search} />
    </Bar>
  );
};

export default SearchBar;
