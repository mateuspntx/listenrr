import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  font-size: 1.3rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const AboutHeader = styled.div`
  margin-top: 6rem;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 615px) {
    margin-top: 20px;
  }
`;

export const Info = styled.div`
  font-weight: 300;

  .footer {
    margin-top: 3rem;
    display: flex;
    padding: 1rem;
    flex-wrap: wrap;

    a {
      margin-bottom: 1rem;
      text-decoration: none;
      border-bottom: 2px solid;
      color: #5b727f;
      text-shadow: 0px 0px 10px #5b727faa;
    }
  }
`;
