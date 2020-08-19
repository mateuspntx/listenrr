import styled from 'styled-components';

export const InputStyle = styled.input`
  background: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 300;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border-radius: 1px;
  outline: none;

  &:hover {
    background: '#fff';
  }

`;