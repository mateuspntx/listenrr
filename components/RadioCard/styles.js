import styled from 'styled-components';

const playBtnHover = '${RadioCardDiv}:hover img {opacity: 1;}';

export const Cover = styled.div`
  background: ${(props) => props.theme.colors.shimmerEffect};
  background-image: url(${(props) => CSS.escape(props.cover)});
  background-position: center;
  width: 270px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  img {
    opacity: 0;
    width: 3rem;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.555));
    transition: 0.2s;
  }

  @media (max-width: 615px) {
    border-radius: 5px;
    width: 100px;
    height: 85px;
    background-size: 150px;
    align-items: flex-start;
    justify-content: flex-start;

    img {
      display: none;
    }
  }

  ${playBtnHover}
`;

export const Title = styled.h1`
  width: 270px;
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 500;
  transition: color 0.5s;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 615px) {
    margin-top: 0.5rem;
    width: 100px;
    font-size: 15px;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Label = styled.h2`
  font-size: 1.1rem;
  margin-top: -3px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.secondary};
`;

export const RadioCardDiv = styled.div`
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 615px) {
    width: 100px;
    margin-left: 0px;
    margin-right: 0px;

    &:hover {
      transform: scale(1);
    }
  }
`;
