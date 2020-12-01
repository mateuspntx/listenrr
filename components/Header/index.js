import { debounce } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import Input from '../Input';
import { useMiniplayer } from '../Miniplayer/MiniplayerContext';
import ThemeSwitcher from '../ThemeSwitcher';
import {
  AboutButton,
  Container,
  LogoText,
  Menu,
  SearchInputStyles,
} from './styles';

const Header = ({ children }) => {
  const router = useRouter();

  const { isLoading } = useMiniplayer();

  const debounceFetch = useRef(
    debounce((value) => {
      if (value) {
        router.push(`/search/${value}`);
      } else {
        router.push('/');
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
