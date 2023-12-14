import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";
import HeaderLogin from "./HeaderLogIn";
import CenterAlign from "../UI/CenterAlign";
import { useRouter } from "next/router";

const HeaderBox = styled(CenterAlign)`
  display: flex;
  justify-content: center;
  height: 7rem;
  width: 110rem;
`;

const PortionBox1 = styled.div`
  width: 20rem;
  text-align: center;
`;
const PortionBox2 = styled.div`
  flex: 1 0 auto;
`;
const PortionBox3 = styled.div`
  width: 20rem;
`;

const Header = () => {
  const currentUrl: string = useRouter().pathname;

  return (
    <header>
      <HeaderBox>
        <PortionBox1>
          <HeaderTitle currentUrl={currentUrl} />
        </PortionBox1>
        <PortionBox2>
          <HeaderMenu currentUrl={currentUrl} />
        </PortionBox2>
        <PortionBox3>
          <HeaderLogin currentUrl={currentUrl} />
        </PortionBox3>
      </HeaderBox>
    </header>
  );
};

export default Header;
