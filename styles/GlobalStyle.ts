import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 10px;
    overflow-y: scroll;
    white-space: pre-wrap;
  }

  html::-webkit-scrollbar {
    width: 0.5rem;
    position: absolute;
  }
  html::-webkit-scrollbar-thumb {
    background: #a5a5a5; /* 스크롤바 막대 색상 */
    border-radius: 12px;
  }

  a { text-decoration: none; color: black; }
  a:visited { text-decoration: none; }
  a:hover { text-decoration: none; }
  a:focus { text-decoration: none; }
  a:hover, a:active { text-decoration: none; }


`;

export default GlobalStyle;
