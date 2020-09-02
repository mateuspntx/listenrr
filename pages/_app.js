import Head from 'next/head';
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
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        {isMounted && <Component {...pageProps} />}
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default Listenrr;
