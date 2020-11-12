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

const Button = styled.button`
  background: none;
  margin-top: 15px;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #848484;
  cursor: pointer;
  outline: none;

  &:hover {
    animation: ${buttonAnimation} 1s ease-in-out infinite;
    animation-direction: alternate;
  }

  @media (max-width: 615px) {
    position: relative;
    right: 0px;
    top: -75px;
    margin-top: -20px;
    border-bottom: unset;
  }
`;

const ThemeSwitcher = (props) => {
  const darkMode = useDarkMode(true);

  return (
    <>
      {darkMode.value ? (
        <Button {...props} onClick={darkMode.disable}>
          <img src={lightModeIcon} alt="Disable dark mode" />
        </Button>
      ) : (
        <Button {...props} onClick={darkMode.enable}>
          <img src={darkModeIcon} alt="Enable dark mode" />
        </Button>
      )}
    </>
  );
};

export default ThemeSwitcher;
