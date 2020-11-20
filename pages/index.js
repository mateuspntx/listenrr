import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import AppContainer from '../components/AppContainer';
import Header from '../components/Header';
import { useMiniplayer } from '../components/Miniplayer/MiniplayerContext';
import RadioCard from '../components/RadioCard';
import RadioCardSkeleton from '../components/Skeletons/RadioCardSkeleton';
import { getRadios } from '../services/api';
import { Filters, RowContainer } from '../styles/pages/index';

const Home = () => {
  const router = useRouter();
  const searchQuery = router.query.q;

  const { radiosList, isLoading } = useMiniplayer();

  const [activeFilter, setActiveFilter] = useState('trending');

  async function getData(params) {
    isLoading.set(true);
    radiosList.set(await getRadios(params));
    isLoading.set(false);
  }

  useEffect(() => {
    if (!searchQuery) {
      getData({
        query: 'lofi',
        filter: 'relevance',
        maxResults: 50,
        needCache: true,
      });
    } else {
      getData({
        query: searchQuery,
        filter: 'relevance',
        maxResults: 50,
      });
    }
  }, [searchQuery]);

  const setFilter = (filter) => {
    if (filter == 'relevance') {
      setActiveFilter('trending');
      getData({
        needCache: true,
      });
    } else {
      setActiveFilter('explore');
      getData({
        query: 'lofi',
        maxResults: 50,
        filter,
      });
    }
  };

  return (
    <AppContainer>
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
        {isLoading.get && (
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

        {radiosList.get.length == 0 && (
          <h1 style={{ fontSize: '2rem' }}>
            Sorry, we didn't find any results :(
          </h1>
        )}

        {radiosList.get.map((radio) => (
          <RadioCard
            key={radio.id.videoId}
            videoId={radio.id.videoId}
            coverUrl={radio.snippet.thumbnails.high.url}
            channelTitle={radio.snippet.channelTitle}
          />
        ))}
      </RowContainer>
    </AppContainer>
  );
};

export default Home;
