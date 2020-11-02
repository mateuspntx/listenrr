import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import AppContainer from '../components/AppContainer';
import Header from '../components/Header';
import { MiniplayerContext } from '../components/Miniplayer/MiniplayerContext';
import RadioCard from '../components/RadioCard';
import RadioCardSkeleton from '../components/Skeletons/RadioCardSkeleton';
import { getRadios } from '../services/api';
import { Filters, RowContainer } from '../styles/pages/index';

const Home = () => {
  const miniplayerData = useContext(MiniplayerContext);

  const [activeFilter, setActiveFilter] = useState('trending');

  const { radiosList, isLoading } = miniplayerData;

  async function getData(params) {
    isLoading.set(true);
    radiosList.set(await getRadios(params));
    isLoading.set(false);
  }

  useEffect(() => {
    getData({
      query: 'lofi',
      filter: 'relevance',
      maxResults: 50,
      needCache: true
    });
  }, []);

  const setFilter = (filter) => {
    if (filter == 'relevance') {
      setActiveFilter('trending');
      getData({
        needCache: true
      });
    } else {
      setActiveFilter('explore');
      getData({
        query: 'lofi',
        maxResults: 50,
        filter
      });
    }
  };

  return (
    <AppContainer>
      <Head>
        <title>Listenrr</title>
      </Head>
      <Header>
        <Filters activeFilter={activeFilter}>
          <button onClick={() => setFilter('relevance')}>
            <h1 className="h1">Trending</h1>
          </button>
          <button onClick={() => setFilter('rating')}>
            <h3 className="h3">Explore</h3>
          </button>
        </Filters>
      </Header>
      <RowContainer>
        {!isLoading.get ? (
          radiosList.get.length == 0 ? (
            <h1 style={{ fontSize: '2rem' }}>
              Sorry, we didn't find any results :(
            </h1>
          ) : (
            radiosList.get.map((radio) => (
              <RadioCard
                key={radio.id.videoId}
                videoId={radio.id.videoId}
                coverUrl={radio.snippet.thumbnails.high.url}
                channelTitle={radio.snippet.channelTitle}
              />
            ))
          )
        ) : (
          <>
            <RadioCardSkeleton />
            <RadioCardSkeleton />
            <RadioCardSkeleton />
            <RadioCardSkeleton />
            <RadioCardSkeleton />
            <RadioCardSkeleton />
            <RadioCardSkeleton />
            <RadioCardSkeleton />
          </>
        )}
      </RowContainer>
    </AppContainer>
  );
};

export default Home;
