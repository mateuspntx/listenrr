import styled, { keyframes } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { darkModeIcon, lightModeIcon } from '../../utils/Icons';

const buttonAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(3px);
  }
`;

const Button = styled.img`
  &:hover {
    animation: ${buttonAnimation} 1s ease-in-out infinite;
    animation-direction: alternate;
  }
`;

const ThemeSwitcher = (props) => {
  const darkMode = useDarkMode(true);

  return (
    <>
      {darkMode.value ? (
        <Button {...props} src={lightModeIcon} onClick={darkMode.disable} />
      ) : (
        <Button {...props} src={darkModeIcon} onClick={darkMode.enable} />
      )}
    </>
  );
};

export default ThemeSwitcher;
