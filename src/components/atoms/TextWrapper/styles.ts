import styled from 'styled-components';
import type { WithDynamicStyles } from '../../../styles/styled';

export const StyledTextWrapper = styled.div<WithDynamicStyles>`
  max-width: ${({ $styles }) => $styles?.maxWidth ?? '32rem'};
  text-align: ${({ $styles }) => $styles?.textAlign ?? 'center'};
  margin-bottom: ${props =>
    props.$styles?.marginBottom ?? props.theme.spacing.xl};
  font-size: ${props => props.$styles?.fontSize};
  font-weight: ${props => props.$styles?.fontWeight ?? 'normal'};
  color: ${props => props.$styles?.color ?? props.theme.colors.text.primary};
`;
