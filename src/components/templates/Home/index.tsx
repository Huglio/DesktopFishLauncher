import { Button } from '../../atoms/Button';
import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';
import * as S from './styles';
import type { HomeTemplateProps } from './types';

export default function HomeTemplate({
  imageAlt,
  title,
  subtitle,
  paragraphs,
  buttonText,
  onButtonClick,
}: HomeTemplateProps) {
  return (
    <FlexCenterContainer>
      <S.Image alt={imageAlt} />

      <S.Title>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </S.Title>

      {paragraphs.map((paragraph, index) => (
        <S.TextWrapper key={index}>{paragraph}</S.TextWrapper>
      ))}

      <Button
        onClick={onButtonClick}
        style={{
          minWidth: '8.75rem',
        }}
      >
        {buttonText}
      </Button>
    </FlexCenterContainer>
  );
}
