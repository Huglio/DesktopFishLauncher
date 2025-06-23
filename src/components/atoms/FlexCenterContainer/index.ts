import styled from 'styled-components';

export const FlexCenterContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  & > *:first-child {
    margin-top: ${props => props.theme.spacing.lg};
  }
`;
