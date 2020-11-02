import styled from 'styled-components';

const AppContainerStyles = styled.div`
  width: 82vw;
  max-width: 1585px;
`;

const AppContainer = ({ props, children }) => {
  return <AppContainerStyles {...props}>{children}</AppContainerStyles>;
};

export default AppContainer;
