import styled, { type CSSProperties } from 'styled-components';
import type { WithDynamicStyles } from '../../../styles/styled';

interface ContainerProps {
  $containerStyles?: CSSProperties;
  $inputStyles?: CSSProperties;
  $labelStyles?: CSSProperties;
}

export const FormContainer = styled.form<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  align-items: ${({ $containerStyles }) => $containerStyles?.alignItems};
  margin-bottom: ${props =>
    props.$containerStyles?.marginBottom ?? props.theme.spacing.md};
`;

export const Label = styled.label``;

export const Input = styled.input<WithDynamicStyles>`
  font-size: ${props => props.theme.typography.fontSize.xl};
  width: ${props => props.$styles?.width ?? '12ch'};
  text-transform: uppercase;
  background: ${props => props.theme.inputs.backgroundGradient};
  border: ${props => props.theme.inputs.border};
  border-radius: ${props => props.theme.borders.radius.sm};
  padding: 0.5rem;

  &:focus {
    border: ${props => props.theme.inputs.border};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray[500]};
    font-size: ${props => props.theme.typography.fontSize.xl};
    text-align: center;
  }
`;
