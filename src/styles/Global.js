import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;

    ${({ theme }) => theme.media.tablet`
      font-size: 50%;
    `}

    ${({ theme }) => theme.media.mobile`
      font-size: 45%;
    `}
  }

  body {
    position: relative;
    min-height: 100vh;
    font-family: 'Lato', 'Noto Sans KR', serif;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor}
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }


`;

export default Global;
