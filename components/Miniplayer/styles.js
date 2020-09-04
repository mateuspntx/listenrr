import styled from 'styled-components';

export const backgroundGradient = `
  linear-gradient(90deg,#232f35e3 0%,#15161fc4 100%)
`

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 10px;
  background: ${backgroundGradient};
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: 0px 22px 20px 20px rgb(0 0 0 / 73%);
  display: flex;
  align-items: center;

  @media (max-width: 615px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const RadioInfo = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 3rem);
  grid-gap: 0 10px;
  align-items: center;
    

  h3 {
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 400;

    display: flex;
    flex-direction: column;
  }

  span {
    color: #8B9CA7;
    font-size: .8rem;
  }

`

export const PlayerActions = styled.div`
  img {
    padding-left: 15px;
  }

  @media (max-width: 615px) {
    img {
      padding-left: 10px;
    }
  }
`
export const Thumb = `
  width: 35px;
  height: 35px;
  background: url('/assets/images/cover.jpg'), #232f35;
  background-size: cover;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
`