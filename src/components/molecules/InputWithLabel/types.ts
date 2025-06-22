import type { ReactNode } from 'react';
import type { CSSProperties } from 'styled-components';

export interface InputWithLabelProps {
  labelText: ReactNode;
  inputPlaceHolder: string;
  inputId: string;
  inputType?: InputType;
  inputName?: string;
  footerText?: string;
  styles?: StylesOptions;
}

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'time'
  | 'search'
  | 'color'
  | 'file'
  | 'month'
  | 'range'
  | 'time'
  | 'week';

export interface StylesOptions {
  container?: CSSProperties;
  input?: CSSProperties;
  label?: CSSProperties;
  footerText?: CSSProperties;
}
