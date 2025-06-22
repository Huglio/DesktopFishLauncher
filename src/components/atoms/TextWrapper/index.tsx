import type { TextWrapperProps } from './types';
import * as S from './styles';

export default function TextWrapper({
  children,
  as = 'div',
  styles,
  ...rest
}: TextWrapperProps) {
  return (
    <S.StyledTextWrapper as={as} $styles={styles} {...rest}>
      {children}
    </S.StyledTextWrapper>
  );
}
