import styled, { css } from 'styled-components';

import { searchIcon } from '../../utils/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ThemeSwitcherStyles = css`
  margin-right: 0px;
  margin-top: 15px;

  @media (max-width: 615px) {
    position: relative;
    right: 0px;
    top: -70px;
    margin-top: -20px;
  }
`;

export const SearchInputStyles = css`
  margin-top: 15px;
  margin-left: 0px;
  width: 30rem;
  background: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right;
  background-origin: content-box;
  background-size: auto;

  @media (max-width: 615px) {
    margin-top: 5px;
  }
`;

export const LogoText = styled.div`
  color: ${(props) => props.theme.colors.logoText};
  font-family: 'Pacifico';
  font-size: 70px;
  margin-left: 15px;
  transition: color 0.5s, color 0.5s;

  @media (max-width: 615px) {
    position: relative;
    margin-left: 1px;
    font-size: 40px;
  }
`;
