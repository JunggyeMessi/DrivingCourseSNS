import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    font-size: 1.1rem;
    text-align: center;
    font-family: 'Pretendard Variable';
    font-weight: 400;
    color: #6A6B6A;
`;

const HeaderLogin = () => {
    return (
      <Text>로그인    |    회원가입</Text>
    );
  }
  
  export default HeaderLogin;