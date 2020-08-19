import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 62.5%;
    color: ${props => props.theme.colors.text};
    width: 100vw;
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

`;