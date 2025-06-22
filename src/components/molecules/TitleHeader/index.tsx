import type { TitleHeaderProps } from './types';
import TextWrapper from '../../atoms/TextWrapper';
import { Title } from '../../atoms/Text';

export default function TitleHeader({ title, subtitle }: TitleHeaderProps) {
  return (
    <TextWrapper styles={{ marginBottom: '6rem' }}>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </TextWrapper>
  );
}
