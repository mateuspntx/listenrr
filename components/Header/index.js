import { debounce } from 'lodash';
import { useContext, useRef } from 'react';

import { getRadios } from '../../services/api';
import Input from '../Input';
import { MiniplayerContext } from '../Miniplayer/MiniplayerContext';
import ThemeSwitcher from '../ThemeSwitcher';
import {
  Container,
  LogoText,
  SearchInputStyles,
  ThemeSwitcherStyles
} from './styles';

const Header = ({ children }) => {
  const miniplayerData = useContext(MiniplayerContext);

  const { radiosList, isLoading } = miniplayerData;

  const debounceFetch = useRef(
    debounce(async (value) => {
      if (value) {
        radiosList.set(
          await getRadios({
            query: value,
            filter: 'relevance',
            maxResults: 50
          })
        );
      } else {
        radiosList.set(
          await getRadios({
            needCache: true
          })
        );
      }

      isLoading.set(false);
    }, 500)
  ).current;

  const handleSearch = (e) => {
    isLoading.set(true);
    debounceFetch(e.target.value);
  };

  return (
    <>
      <Container>
        <LogoText>Listenrr</LogoText>
        <Input
          type="text"
          css={SearchInputStyles}
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
