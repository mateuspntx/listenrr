import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';
import RadioCard from '../components/RadioCard';
import AppContainer from '../components/AppContainer';

import { useState, useEffect } from 'react';
import { getRadios, getListenersCount } from '../services/api';

const Filters = styled.div`
  margin-top: 6rem;
  /*width: 1582px;*/

  h1 {
    font-size: 2.6rem;
    color: ${props => props.theme.colors.primary };
    transition: color .5s, color .5s;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${props => props.theme.colors.secondary};
    transition: color .5s, color .5s;
  }
`;

const RowContainer = styled.div`
  margin: 1.5rem 0px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 3.5rem 7%;
  margin-bottom: 10rem;
`

const Home = () => {

  const [radiosList, setRadiosList] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function getData (filter, maxResults) {
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
      <RowContainer > 
        {!isLoading ? 
          (
            radiosList.map(radio => {
              return (
                <RadioCard
                  key={radio.id.videoId}
                  videoId={radio.id.videoId}
                  coverUrl={radio.snippet.thumbnails.medium.url}
                  channelTitle={radio.snippet.channelTitle}
                  showListenersCount="true"
                />
              )
            })
          ) : (
            <h2>Loading...</h2>
          )
        }
      </RowContainer>
    </AppContainer>
  )
}


export default Home;