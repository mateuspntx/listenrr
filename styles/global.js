import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 62.5%;
    color: ${props => props.theme.colors.text}
    font-family: 'Poppins', Roboto, Segoe UI, sans-serif;
  }

`;