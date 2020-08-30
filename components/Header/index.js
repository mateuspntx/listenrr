import styled from 'styled-components';
import Input from '../Input';
import ThemeSwitcher from '../ThemeSwitcher'

import { Container, LogoText } from './styles';

const Header = (props) => {
  return (
    <>
    <Container>
      <LogoText>Listenrr</LogoText>
      <Input name="search" placeholder="What radio are you looking for?"/>
      <ThemeSwitcher />
    </Container>
    { props.children }
    </>
  )
};

export default Header;