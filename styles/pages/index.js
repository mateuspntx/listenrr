import styled from 'styled-components';

const Filters = styled.div`
  margin-top: 6rem;

  button {
    background: none;
    border: none;
    display: flex;
    margin: 0;
    outline: none;
    cursor: pointer;
  }

  .h1 {
    font-size: 2.6rem;
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.5s, color 0.5s;
  }

  .h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.secondary};
    transition: color 0.5s, color 0.5s;
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
