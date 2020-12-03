import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import AppContainer from '../components/AppContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useMiniplayer } from '../components/Miniplayer/MiniplayerContext';
import RadioCard from '../components/RadioCard';
import RadioCardSkeleton from '../components/Skeletons/RadioCardSkeleton';
import { getRadios } from '../services/api';
import { Filters, RowContainer } from '../styles/pages/index';

const Home = ({ radiosData }) => {
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
      radiosList.set(radiosData);
      isLoading.set(false);
    } else {
      getData({
        query: searchQuery,
        filter: 'relevance',
        maxResults: 50,
      });
    }
  }, [searchQuery]);

  const setFilter = async (filter) => {
    if (filter == 'relevance') {
      setActiveFilter('trending');
      radiosList.set(radiosData);
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
        {router.isFallback ||
          (isLoading.get && (
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
          ))}

        {radiosList.get.length == 0 && (
          <h1 style={{ fontSize: '2rem' }}>
            Sorry, we did not find any results :(
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
      <Footer />
    </AppContainer>
  );
};

export const getStaticProps = async () => {
  const radiosData = await getRadios({
    query: 'lofi',
    maxResults: 50,
    filter: 'relevance',
  });

  return {
    props: {
      radiosData,
    },
    revalidate: 60 * 60,
  };
};

export default Home;
