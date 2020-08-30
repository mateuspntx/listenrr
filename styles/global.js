import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 62.5%;
    color: ${props => props.theme.colors.primary};
    width: 82.5%;
    max-width: 1920px;
    height: 100vh;
  }

  .FadeInAnimation05s {
    animation: FadeIn 0.5s ease-in-out;
  }
  
  @keyframes FadeIn {
    from {
      opacity: 0;
    }
  }

  @media (min-width: 1920px) {
    body {
      width: 1920px;
    }

`;