import { debounce } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';

import { getRadios } from '../../services/api';
import Input from '../Input';
import { MiniplayerContext } from '../Miniplayer/MiniplayerContext';
import ThemeSwitcher from '../ThemeSwitcher';
import {
  AboutButton,
  Container,
  LogoText,
  Menu,
  SearchInputStyles
} from './styles';

const Header = ({ children }) => {
  const router = useRouter();

  const miniplayerData = useContext(MiniplayerContext);

  const { radiosList, isLoading } = miniplayerData;

  const debounceFetch = useRef(
    debounce(async (value) => {
      if (value) {
        router.push(`/?q=${value}`);
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
        <Link href="/">
          <LogoText>Listenrr</LogoText>
        </Link>
        <Input
          type="text"
          css={SearchInputStyles}
          name="search"
          placeholder="What radio are you looking for?"
          onChange={handleSearch}
        />
        <Menu>
          <Link href="/about">
            <AboutButton>About</AboutButton>
          </Link>
          <ThemeSwitcher />
        </Menu>
      </Container>
      {children}
    </>
  );
};

export default Header;
