import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Text = styled.div`
  font-size: 1.1rem;
  text-align: center;
  font-family: "Pretendard Variable";
  font-weight: 400;
  color: #6a6b6a;
`;

const LinkBox = styled(Link)<{ $iscurrent: boolean }>`
  text-decoration: none;
  margin: 0.8rem 1.1rem;
  pointer-events: ${(props) => (props.$iscurrent ? "auto" : "none")};
`;

const Span = styled.span`
  margin: 0.8rem 1.1rem;
  cursor: pointer;
`;

const HeaderLogin: React.FC<{
  currentUrl: string;
}> = (props) => {
  const { data: session, status } = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <Text>
      {status === "authenticated" ? (
        <LinkBox href="/profile" $iscurrent={"/profile" !== props.currentUrl}>
          프로필
        </LinkBox>
      ) : (
        <LinkBox href="/login" $iscurrent={"/login" !== props.currentUrl}>
          로그인
        </LinkBox>
      )}
      |
      {status === "authenticated" ? (
        <Span onClick={logoutHandler}>
          로그아웃
        </Span>
      ) : (
        <LinkBox href="/login" $iscurrent={"/login" !== props.currentUrl}>
          회원가입
        </LinkBox>
      )}
    </Text>
  );
};

export default HeaderLogin;
