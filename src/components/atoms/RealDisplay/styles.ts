import styled from 'styled-components';
import type { WithDynamicStyles } from '../../../styles/styled';

export const Paragraph = styled.p<WithDynamicStyles>`
  font-size: ${props =>
    props.$styles?.fontSize ?? props.theme.typography.fontSize.md};
  margin-bottom: ${props =>
    props.$styles?.marginBottom ?? props.theme.spacing.md};
  color: ${props => props.$styles?.color ?? props.theme.colors.green};
`;
