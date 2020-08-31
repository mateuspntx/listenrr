import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';

const Filters = styled.div`
  color: ${props => props.theme.colors.primary };
  margin-top: 6rem;
  width: 1582px;

  h1 {
    font-size: 2.6rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Listenrr</title>
      </Head>
      <Header>
        <Filters>
          <h1>Trending</h1>
          <h3>Explore</h3>
        </Filters>
      </Header>
    </>
  )
}


export default Home;