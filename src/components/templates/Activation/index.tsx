import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';
import Image from '../../molecules/Image';
import TextWrapper from '../../atoms/TextWrapper';
import TitleHeader from '../../molecules/TitleHeader';
import type { ActivationTemplateProps } from './types';
import RealDisplay from '../../atoms/RealDisplay';
import { Button } from '../../atoms/Button';
import { theme } from '../../../styles/theme';

export default function ActivationTemplate({
  title,
  subtitle,
  imageTitle,
  imageSrc,
  imageAlt,
  value,
  buttonText,
  contactUsText,
}: ActivationTemplateProps) {
  return (
    <FlexCenterContainer>
      <TitleHeader title={title} subtitle={subtitle} />

      <TextWrapper
        as="h2"
        styles={{ marginBottom: '0.5rem', maxWidth: '31.25rem' }}
      >
        {imageTitle}
      </TextWrapper>

      <Image imageAlt={imageAlt} imageSrc={imageSrc} />

      <RealDisplay value={value} />

      <Button $styles={{ marginBottom: '8rem' }}>{buttonText}</Button>

      <TextWrapper
        styles={{
          color: theme.colors.text.gray,
          marginBottom: '0',
        }}
      >
        {contactUsText}
      </TextWrapper>
    </FlexCenterContainer>
  );
}
