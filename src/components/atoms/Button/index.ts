import styled from 'styled-components';

export const Button = styled.button`
  border: 0.0625rem solid white;
  border-radius: 2.5rem;
  padding: 0.5rem;
  background-color: ${props => props.theme.buttons.primary.background};
`;
