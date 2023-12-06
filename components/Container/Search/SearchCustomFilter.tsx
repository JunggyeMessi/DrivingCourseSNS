import styled from "styled-components";
import React, { useState } from "react";
import { DownArrowSvg } from "@/public/assets/svg/svg";

const SelectBox = styled.div`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  font-family: "Pretendard Variable";
  position: relative;
  padding: 1rem 1rem;
  min-width: 10rem;
  border-radius: 30px;
  background-color: #ffffff;
  color: #2d2d2d;
  border: 1px solid #353735;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterSvg = styled.div<{ show: boolean }>`
  transform: rotate(${(props) => (props.show ? "0deg" : "180deg")});
  transform-origin: 50% 45%;
`;

const SelectOptions = styled.ul<{ show: boolean }>`
  position: absolute;
  list-style: none;
  top: 4rem;
  left: 0;
  width: 100%;
  visibility: ${(props) => (props.show ? "hidden" : "none")};
  padding: 2rem 0;
  border-radius: 20px;
  background-color: #ffffff;
  color: #2d2d2d;
  border: 1px solid #353735;
`;
const Option = styled.li`
  padding: 0.8rem 0.8rem;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

const SearchCustomFilter: React.FC<{
  item: string[];
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}> = (props) => {
    const [showOptions, setShowOptions] = useState(true);

  const handleOnChangeSelectValue = (e: any) => {
    props.setvalue(e.target.getAttribute("value"));
  };

  return (
    <SelectBox onClick={() => setShowOptions(() => !showOptions)}>
      <label>{props.value}</label>
      <FilterSvg show={showOptions}>
        <DownArrowSvg />
      </FilterSvg>
      <SelectOptions show={showOptions}>
        {props.item.map((item, index) => (
          <Option
            key={index}
            value={item}
            onClick={(e) => handleOnChangeSelectValue(e)}
          >
            {item}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default SearchCustomFilter;
