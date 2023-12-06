import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Box = styled.div`
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkBox = styled(Link)<{$iscurrent: boolean}>`
  font-size: 1.5rem;
  text-align: center;
  font-family: "Pretendard Variable";
  font-weight: 500;
  text-decoration: none;
  background-color: ${props => props.$iscurrent ? '#FFFFFF' : '#E7FF54'};
  border-radius: 30px;
  padding: 0.8rem 1.1rem;
  pointer-events: ${props => props.$iscurrent ? 'auto' : 'none'};
`;
const HeaderMenuList: React.FC<{
  children: string;
  link: string;
  currentUrl: string;
}> = (props) => {

  
  return (
    <Box>
      <LinkBox href={props.link} $iscurrent={props.link!==props.currentUrl}>{props.children}</LinkBox>
    </Box>
  );
};

export default HeaderMenuList;
