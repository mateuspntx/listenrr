import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import Miniplayer from '../components/Miniplayer';
import { MiniplayerProvider } from '../components/Miniplayer/MiniplayerContext';
import YoutubeIframe from '../components/YoutubeIframe';
import GlobalStyle from '../styles/global';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

const Listenrr = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <script src="https://www.youtube.com/iframe_api"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/images/headphone-icon.png" />
        <meta name="author" content="mateuspl[at]pm.me" />
        <meta id="og:title" name="og:title" content="Listenrr" />
        <meta
          name="description"
          content="Listenrr - YouTube radios in one place"
        />
        <meta
          id="og:description"
          name="og:description"
          content="Listenrr - YouTube radios in one place"
        />
        <meta name="robots" content="index,follow" />
        <meta name="application-name" content="Listenrr" />
        <meta name="og:type" content="website" id="og:type" />
        <meta name="og:site_name" content="Listenrr" id="og:site_name" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="theme-color" content="#0A1A20" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <MiniplayerProvider>
        <YoutubeIframe />
        <ThemeProvider theme={theme}>
          {isMounted && <Component {...pageProps} />}
          <GlobalStyle />
        </ThemeProvider>
        <Miniplayer />
      </MiniplayerProvider>
    </>
  );
};

export default Listenrr;
