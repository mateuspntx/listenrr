import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

const Miniplayer = dynamic(() => import('../components/Miniplayer'));
import { MiniplayerProvider } from '../components/Miniplayer/MiniplayerContext';
import MiniplayerLib from '../libs/MiniplayerLib';
import GlobalStyle from '../styles/global';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

const Listenrr = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    MiniplayerLib.importYTAPI();
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="https://i.ytimg.com/" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />

        <link rel="preconnect" href="https://i.ytimg.com/" crossOrigin="true" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="true"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;500;600&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/images/headphone-icon.png" />
        <meta name="author" content="https://mateuspntx.ml/" />

        <title>Listenrr - Youtube radios in one place</title>
        <meta name="title" content="Listenrr - Youtube radios in one place" />
        <meta
          name="description"
          content="Now you can listen to all livestream radios from Youtube in one place. Become a listenrr!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://listenrr.ml/" />
        <meta
          property="og:title"
          content="Listenrr - Youtube radios in one place"
        />
        <meta
          property="og:description"
          content="Now you can listen to all livestream radios from Youtube in one place. Become a listenrr!"
        />
        <meta
          property="og:image"
          content="/assets/images/meta-background.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://listenrr.ml/" />
        <meta
          property="twitter:title"
          content="Listenrr - Youtube radios in one place"
        />
        <meta
          property="twitter:description"
          content="Now you can listen to all livestream radios from Youtube in one place. Become a listenrr!"
        />
        <meta
          property="twitter:image"
          content="/assets/images/meta-background.png"
        />

        <meta name="robots" content="index,follow" />
        <meta name="application-name" content="Listenrr" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Listenrr" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="theme-color" content="rgba(0,0,0,0)" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <MiniplayerProvider>
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
