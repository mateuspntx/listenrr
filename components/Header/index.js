import Input from '../Input';
import ThemeSwitcher from '../ThemeSwitcher'

import { Container, LogoText } from './styles';

const ThemeSwitcherStyles = {
  marginRight: '0px',
  marginTop: '15px'
}

const SearchInputStyles = {
  marginTop: '15px',
  marginLeft: '0px',
  width: '30rem',
  background: 'url(\'./assets/images/search-icon.svg\')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  backgroundOrigin: 'content-box',
  backgroundSize: 'auto',
}

const Header = (props) => {
  return (
    <>
    <Container>
      <LogoText>Listenrr</LogoText>
      <Input type="text" style={SearchInputStyles} name="search" placeholder="What radio are you looking for?"/>
      <ThemeSwitcher style={ThemeSwitcherStyles}/>
    </Container>

    { props.children }

    </>
  )
};

export default Header;