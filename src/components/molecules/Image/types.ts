import type { IconBaseProps } from 'react-icons';
import type { CSSProperties } from 'styled-components';

export interface ImageProps {
  imageAlt?: string;
  imageSrc: string;
  styles?: StylesOptions;
}

export interface StylesOptions {
  container?: CSSProperties;
  img?: CSSProperties;
  icon?: IconBaseProps;
}
