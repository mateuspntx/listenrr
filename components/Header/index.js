import { debounce } from 'lodash';
import { useContext, useRef } from 'react';

import { getRadios } from '../../services/api';
import { searchIcon } from '../../utils/Icons';
import Input from '../Input';
import { MiniplayerContext } from '../Miniplayer/MiniplayerContext';
import ThemeSwitcher from '../ThemeSwitcher';
import { Container, LogoText } from './styles';

const ThemeSwitcherStyles = `
  margin-right: 0px;
  margin-top: 15px;

  @media (max-width: 615px) {
    margin-right: auto;
    margin-top: 30px;
  }
`;

const SearchInputStyles = {
  marginTop: '15px',
  marginLeft: '0px',
  width: '30rem',
  background: `url(${searchIcon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  backgroundOrigin: 'content-box',
  backgroundSize: 'auto'
};

const Header = ({ children }) => {
  const miniplayerData = useContext(MiniplayerContext);

  const { radiosList } = miniplayerData;

  const debounceFetch = useRef(
    debounce(async (value) => {
      radiosList.set(
        await getRadios({
          query: value || 'lofi',
          filter: 'relevance',
          maxResults: 50
        })
      );
      console.log('loaded');
    }, 1000)
  ).current;

  const handleSearch = (e) => {
    console.log('loading...');
    debounceFetch(e.target.value);
  };

  return (
    <>
      <Container>
        <LogoText>Listenrr</LogoText>
        <Input
          type="text"
          style={SearchInputStyles}
          name="search"
          placeholder="What radio are you looking for?"
          onChange={handleSearch}
        />
        <ThemeSwitcher css={ThemeSwitcherStyles} />
      </Container>
      {children}
    </>
  );
};

export default Header;
