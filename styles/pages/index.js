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
`;

const RowContainer = styled.div`
  margin: 1.5rem 0px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 3.5rem 7%;
  margin-bottom: 10rem;
`;

export { Filters, RowContainer };
