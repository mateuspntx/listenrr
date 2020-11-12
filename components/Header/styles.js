import styled, { css } from 'styled-components';

import { searchIcon } from '../../utils/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Menu = styled.div`
  display: flex;
  margin-right: 0px;
`;

export const SearchInputStyles = css`
  margin-top: 20px;
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
  margin-left: 0px;
  transition: color 0.5s, color 0.5s;
  cursor: pointer;

  @media (max-width: 615px) {
    position: relative;
    margin-left: 1px;
    font-size: 40px;
  }
`;

export const AboutButton = styled.button`
  margin-right: 1.5rem;
  margin-top: 15px;
  font-size: 1.2rem;
  background: none;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #848484;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  @media (max-width: 615px) {
    position: relative;
    right: -20px;
    top: -80px;
    margin-top: -20px;
    border-bottom: unset;
  }
`;
