import React from "react";
import styled from "styled-components";
import titleLogo from "../../public/assets/images/titleLogo.svg";
import Image from "next/image";
import Link from "next/link";

const HeaderTitleImg = styled(Image)`
  width: 9rem;
`;

const LinkBox = styled(Link)<{$iscurrent: boolean}>`
  pointer-events: ${props => props.$iscurrent ? 'auto' : 'none'};
`;

const HeaderTitle: React.FC<{currentUrl: string}> = (props) => {
  return (
    <LinkBox href="/" $iscurrent={props.currentUrl!=="/"}>
      <HeaderTitleImg src={titleLogo} alt="car+ing 홈" />
    </LinkBox>
  );
};
export default HeaderTitle;
