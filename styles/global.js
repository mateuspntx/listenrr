import { createGlobalStyle, keyframes } from 'styled-components';

export const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export default createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  input,
  div,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 62.5%;
    color: ${(props) => props.theme.colors.primary};
    height: 100vh;
    transition: background-color .5s, color .5s,
                color .5s, color .5s;
    animation: 0.5s ease 0s 1 ${FadeInAnimation};
  }

  @media (min-width: 1920px) {
    body {

    }
}
`;
