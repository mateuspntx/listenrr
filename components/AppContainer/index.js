import { useState } from 'react';
import styled from 'styled-components';

const AppContainerStyles = styled.div`
  width: 82vw;
  max-width: 1585px;
`;

const MessageOfTOS = () => {
  const [localStorageMessage, setLocalStorageMessage] = useState(
    localStorage.getItem('LSTNR_MessageOfTOS')
  );

  const divStyle = {
    display: 'flex',
    background: '#232f35e3',
    color: '#fff',
    padding: '10px',
    fontSize: '8px',
    alignItems: 'center'
  };

  const closeButtonStyle = {
    color: '#fff',
    border: 'none',
    background: '#171e21',
    padding: '4px 10px',
    borderRadius: '100%'
  };

  const dismissMessage = () => {
    localStorage.setItem('LSTNR_MessageOfTOS', '1');
    setLocalStorageMessage(1);
  };

  if (!localStorageMessage) {
    return (
      <div style={divStyle}>
        <h1>
          By using our website you agree to Youtube Terms of Service and Privacy
          Policies.
        </h1>
        <button style={closeButtonStyle} onClick={() => dismissMessage()}>
          X
        </button>
      </div>
    );
  } else {
    return false;
  }
};

const AppContainer = ({ props, children }) => {
  return (
    <>
      <MessageOfTOS />
      <AppContainerStyles {...props}>{children}</AppContainerStyles>
    </>
  );
};

export default AppContainer;
