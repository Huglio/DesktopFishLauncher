import { theme } from '../../../styles/theme';
import { Button } from '../../atoms/Button';
import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';
import TextWrapper from '../../atoms/TextWrapper';
import InputWithLabel from '../../molecules/InputWithLabel';
import TitleHeader from '../../molecules/TitleHeader';
import type { CreateInviteTemplateProps } from './types';

export default function CreateInviteTemplate({
  title,
  subtitle,
  inputPixKey,
  inputCreateCode,
  paragraph,
  buttonText,
}: CreateInviteTemplateProps) {
  return (
    <FlexCenterContainer>
      <TitleHeader title={title} subtitle={subtitle} />

      <TextWrapper>{paragraph}</TextWrapper>

      <InputWithLabel
        inputId={inputPixKey.inputId}
        inputPlaceHolder={inputPixKey.inputPlaceHolder}
        labelText={inputPixKey.labelText}
        styles={{
          input: { width: '16ch' },
          container: { marginBottom: theme.spacing.lg },
        }}
      />

      <InputWithLabel
        inputId={inputCreateCode.inputId}
        inputPlaceHolder={inputCreateCode.inputPlaceHolder}
        labelText={inputCreateCode.labelText}
        footerText={inputCreateCode.footerText}
        styles={{
          input: { width: '16ch' },
          container: { marginBottom: theme.spacing.lg },
          footerText: {
            fontSize: theme.typography.fontSize.xs,
            color: theme.colors.text.gray,
          },
        }}
      />

      <Button>{buttonText}</Button>
    </FlexCenterContainer>
  );
}
