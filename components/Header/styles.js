import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const LogoText = styled.div`
  color: ${(props) => props.theme.colors.logoText};
  font-family: 'Pacifico';
  font-size: 70px;
  /*margin-left: 9.50%;*/
  margin-left: 15px;
  transition: color 0.5s, color 0.5s;

  @media (max-width: 615px) {
    margin: 0;
  }
`;
