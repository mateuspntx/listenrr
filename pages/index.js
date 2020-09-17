import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AppContainer from '../components/AppContainer';
import Header from '../components/Header';
import RadioCard from '../components/RadioCard';
import RadioCardSkeleton from '../components/Skeletons/RadioCardSkeleton';
import { getRadios } from '../services/api';

const Filters = styled.div`
  margin-top: 6rem;
  /*width: 1582px;*/

  h1 {
    font-size: 2.6rem;
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.5s, color 0.5s;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary};
    transition: color 0.5s, color 0.5s;
  }
`;

const RowContainer = styled.div`
  margin: 1.5rem 0px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 3.5rem 7%;
  margin-bottom: 10rem;
`;

const Home = () => {
  const [radiosList, setRadiosList] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function getData(filter, maxResults) {
    setRadiosList(await getRadios(filter, maxResults));
    setIsLoading(false);
  }

  useEffect(() => {
    getData('relevance', 50);
  }, []);

  return (
    <AppContainer>
      <Head>
        <title>Listenrr</title>
      </Head>
      <Header>
        <Filters>
          <h1>Trending</h1>
          <h3>Explore</h3>
        </Filters>
      </Header>
      <RowContainer>
        {!isLoading ? (
          radiosList.map((radio) => (
            <RadioCard
              key={radio.id.videoId}
              videoId={radio.id.videoId}
              coverUrl={radio.snippet.thumbnails.medium.url}
              channelTitle={radio.snippet.channelTitle}
            />
          ))
        ) : (
          <>
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
