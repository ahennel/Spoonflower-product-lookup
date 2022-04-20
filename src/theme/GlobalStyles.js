import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
  }

  button,
  select {
    cursor: pointer;
  }

  select,
  input {
    margin-left: 5px;
  }
`;
