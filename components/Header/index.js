import Input from '../Input';
import ThemeSwitcher from '../ThemeSwitcher'

import { Container, LogoText } from './styles';

const Header = () => {
  return (
    <Container>
      <LogoText>Listenrr</LogoText>
      <Input name="search" placeholder="What radio are you looking for?"/>
      <ThemeSwitcher />
    </Container>
  )
};

export default Header;