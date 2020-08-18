import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import GlobalStyle from '../styles/global';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

const Listenrr = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button onClick={darkMode.enable}>DARK MODE</button>
      <button onClick={darkMode.disable}>LIGHT MODE</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default Listenrr;
