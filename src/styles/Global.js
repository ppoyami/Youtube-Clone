import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    height: 100vh;
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
