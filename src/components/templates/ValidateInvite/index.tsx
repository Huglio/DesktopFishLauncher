import { Button } from '../../atoms/Button';
import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';
import InputWithLabel from '../../molecules/InputWithLabel';
import TextWrapper from '../../atoms/TextWrapper';
import TitleHeader from '../../molecules/TitleHeader';
import type { ValidateInviteTemplateProps } from './types';

export default function ValidateInviteTemplate({
  title,
  subtitle,
  paragraph,
  labelText,
  inputPlaceHolder,
  buttonText,
  inputId,
}: ValidateInviteTemplateProps) {
  return (
    <FlexCenterContainer>
      <TitleHeader title={title} subtitle={subtitle} />

      <TextWrapper as="p" styles={{ marginBottom: '6rem' }}>
        {paragraph}
      </TextWrapper>

      <InputWithLabel
        inputId={inputId}
        labelText={labelText}
        inputPlaceHolder={inputPlaceHolder}
        styles={{ container: { alignItems: 'center' } }}
      />

      <Button>{buttonText}</Button>
    </FlexCenterContainer>
  );
}
