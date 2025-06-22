import styled from 'styled-components';
import type { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  border: 0.0625rem solid white;
  border-radius: ${props =>
    props.$styles?.marginBottom !== undefined
      ? props.$styles.marginBottom
      : props.theme.borders.radius.xl};
  background-color: ${props =>
    props.theme.buttons[props.$variant ?? 'primary'].background};
  padding: ${props =>
    props.theme.buttons.sizes[props.$size ?? 'medium'].padding};
  font-size: ${props =>
    props.theme.buttons.sizes[props.$size ?? 'medium'].fontSize};
  margin-bottom: ${props =>
    props.$styles?.marginBottom ??
    props.theme.spacing[props.$spacing ?? 'none']};
`;
