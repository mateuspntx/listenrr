import styled, { css } from 'styled-components';

import { FadeInAnimation } from '../../styles/global';

export const backgroundGradient = `
  linear-gradient(90deg,#232f35e3 0%,#15161fc4 100%)
`;

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${(props) => (props.expandMiniplayer ? '100vh' : '50px')};
  padding: 10px;
  background: ${backgroundGradient};
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: 0px 22px 20px 20px rgb(0 0 0 / 73%);
  display: ${(props) => (props.expandMiniplayer ? 'grid' : 'flex')};
  align-items: center;
  transition: height 0.5s ease;
  animation: 0.2s ease 0s 1 ${FadeInAnimation};
  overflow: ${(props) => (props.expandMiniplayer ? 'auto' : 'hidden')};

  @media (max-width: 615px) {
    padding-left: 0;
    padding-right: 0;
    bottom: -1px;
  }
`;

export const ExpandedContainer = styled.div`
  ${(props) =>
    props.expandMiniplayer
      ? css`
          margin-top: -15rem;
          display: flex;
          height: 600px;
          align-items: center;
          flex-wrap: wrap;
          grid-gap: 3rem 2rem;
        `
      : css`
          display: none;
        `}
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;

  .pointer {
    cursor: pointer;
  }
`;

export const RadioInfo = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 3rem);
  grid-gap: 0 10px;
  align-items: center;

  h3 {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 400;

    display: flex;
    flex-direction: column;
  }

  span {
    color: #8b9ca7;
    font-size: 0.8rem;
    margin: 0;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  height: 25px;
  width: 0px;
  align-items: center;
  margin-left: -15px;
  background: #252f35;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 0px 0px 10px #0000002b;
  opacity: 0;
  transition: opacity 0.2s, width 0.5s, margin-left 0.5s;
`;

export const Slider = styled.input`
  appearance: none;
  width: 100%;
  height: 3px;
  background: #4e6673;
  outline: none;
  transition: box-shadow 0.2s;
  border-radius: 10px;

  &:hover {
    box-shadow: 0px 0px 5px #ffffff33;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0px 0px 10px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 11px;
    height: 11px;
    background: #fff;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;

  &:hover ${SliderContainer} {
    transition: opacity 0.5s, width 0.7s, margin-left 0.7s;
    margin-left: 10px;
    width: 100px;
    opacity: 1;
  }
`;

export const PlayerActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.expandMiniplayer ? '-15rem' : '0px')};

  img {
    padding-left: 15px;
    width: 2.4rem;
  }

  @media (max-width: 615px) {
    img {
      padding-left: 10px;
    }
  }
`;
