import styled from 'styled-components';
import type { WithDynamicStyles } from '../../../styles/styled';

export const Title = styled.h1`
  font-size: ${props => props.theme.typography.fontSize.xl};
  line-height: 1.5;
`;

export const HighLight = styled.span<WithDynamicStyles>`
  color: ${props => props.$styles?.color ?? 'inherit'};
  font-weight: ${({ $styles }) => $styles?.fontWeight ?? 800};
  font-size: ${({ $styles }) => $styles?.fontSize ?? 'inherit'};
`;
