import styled from 'styled-components';
import type { FlexCenterContainerProps } from './types';

export const FlexCenterContainer = styled.main<FlexCenterContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: ${props => props.$styles?.justifyContent};
  min-height: 18.75rem;

  ${({ $withMarginTop, theme }) =>
    $withMarginTop &&
    `
      & > *:first-child {
        margin-top: ${theme.spacing.lg};
      }
    `}
`;
