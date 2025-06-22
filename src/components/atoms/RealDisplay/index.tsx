import type { RealDisplayProps } from './types';
import * as S from './styles';

export default function RealDisplay({ value, styles }: RealDisplayProps) {
  return (
    <S.Paragraph $styles={styles}>R$ {value ? value : '--,--'}</S.Paragraph>
  );
}
