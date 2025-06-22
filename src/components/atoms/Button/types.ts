import type { WithDynamicStyles } from '../../../styles/styled';

export type ButtonProps = WithDynamicStyles & {
  $variant?: 'primary';
  $size?: 'small' | 'medium' | 'large';
  $spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
