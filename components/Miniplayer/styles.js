import styled from 'styled-components';

export const backgroundGradient = `
  linear-gradient(90deg, #536976 0%, #292E49 100%)
`

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 10px;
  background: ${backgroundGradient};

  display: flex;
`

export const RadioInfo = styled.div`
  h3 {
    color: #FFFFFF;
  }

  h4 {
    color: #8B9CA7;
  }
`

export const PlayerActions = styled.div`

`