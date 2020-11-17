import styled from 'styled-components';

const Filters = styled.div`
  margin-top: 6rem;
  height: 7rem;

  button {
    background: none;
    border: none;
    display: flex;
    margin: 0;
    outline: none;
    cursor: pointer;
  }

  .h1 {
    font-size: ${(props) =>
      props.activeFilter == 'trending' ? '2.6rem' : '1.5rem'};
    color: ${(props) =>
      props.activeFilter == 'trending'
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    transition: all ease 0.5s;
  }

  .h3 {
    font-size: ${(props) =>
      props.activeFilter == 'explore' ? '2.6rem' : '1.5rem'};
    font-weight: 400;
    color: ${(props) =>
      props.activeFilter == 'explore'
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    transition: all ease 0.5s;
  }

  @media (max-width: 615px) {
    margin-top: 20px;

    .h1 {
      font-size: ${(props) =>
        props.activeFilter == 'trending' ? '1.8rem' : '1.5rem'};
      font-weight: ${(props) =>
        props.activeFilter == 'trending' ? '400' : '300'};
    }

    .h3 {
      font-size: ${(props) =>
        props.activeFilter == 'explore' ? '1.8rem' : '1.3rem'};
      font-weight: ${(props) =>
        props.activeFilter == 'explore' ? '400' : '300'};
    }
  }
`;

const RowContainer = styled.div`
  margin: 1.5rem 0px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 3.5rem 7%;
  margin-bottom: 5rem;

  @media (max-width: 615px) {
    justify-content: center;
    margin: 0;
    margin-bottom: 5rem;
    grid-gap: 2rem 3%;
  }
`;

export { Filters, RowContainer };
