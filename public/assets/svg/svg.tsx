import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const SearchImage = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="10" cy="10" r="8" stroke="#2D2E2D" />
      <rect
        x="15.0156"
        y="15.8721"
        width="1.21066"
        height="8.66614"
        transform="rotate(-45 15.0156 15.8721)"
        fill="#2D2E2D"
      />
    </svg>
  );
};

const CleanButton = styled.button<{ search: string }>`
  background-color: #ffffff;
  border: 0;
  visibility: ${(props) => props.search === "" && "hidden"};
`;

export const CloseImage: React.FC<{
  onClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  search: string;
}> = (props) => {
  return (
    <CleanButton onClick={props.onClick} search={props.search}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke="#2D2E2D"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Menu / Close_LG">
            {" "}
            <path
              id="Vector"
              d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </CleanButton>
  );
};

export const DownArrowSvg = () => {
  return (
    <svg
      width="15px"
      height="15px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      transform="rotate(180)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#2D2E2D"
          d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z"
        ></path>
      </g>
    </svg>
  );
};
