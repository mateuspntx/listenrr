import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LogoText = styled.div`
  color: ${props => props.theme.colors.logoText};
  font-family: 'Pacifico';
  font-size: 70px;
`;