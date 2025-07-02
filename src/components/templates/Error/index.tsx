import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';
import TextWrapper from '../../atoms/TextWrapper';
import type { ErrorTemplateProps } from './types';
import * as S from './styles';
import { Button } from '../../atoms/Button';
import FishDead from '../../../assets/FishDeadIcon.svg';

export default function ErrorTemplate({
  errorImage = FishDead,
  errorHero,
  errorMessage,
  contactUsMessage,
  buttonText,
  onButtonClick,
}: ErrorTemplateProps) {
  return (
    <FlexCenterContainer $withMarginTop $styles={{ justifyContent: 'center' }}>
      {errorHero ? errorHero : <S.Img src={errorImage} />}

      <TextWrapper as="h1" styles={{ fontSize: '3rem', fontWeight: 600 }}>
        {errorMessage}
      </TextWrapper>

      {contactUsMessage && <TextWrapper as="p">{contactUsMessage}</TextWrapper>}

      <Button onClick={onButtonClick}>{buttonText}</Button>
    </FlexCenterContainer>
  );
}
