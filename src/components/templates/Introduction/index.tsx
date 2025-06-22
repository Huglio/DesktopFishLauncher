import { Button } from '../../atoms/Button';
import Image from '../../molecules/Image';
import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';
import TitleHeader from '../../molecules/TitleHeader';
import type { IntroductionTemplateProps } from './types';
import { theme } from '../../../styles/theme';
import TextWrapper from '../../atoms/TextWrapper';

export default function IntroductionTemplate({
  imageAlt,
  title,
  subtitle,
  paragraphs,
  buttonText,
  onButtonClick,
  imageSrc,
}: IntroductionTemplateProps) {
  return (
    <FlexCenterContainer>
      <Image
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        styles={{
          container: {
            fontSize: theme.typography.fontSize.xs,
            textAlign: 'center',
            border: '1px dashed rgba(255, 255, 255, 0.3);',
            width: '6.25rem',
            height: '6.25rem',
            marginBottom: theme.spacing.sm,
            gap: theme.spacing.xs,
          },
          icon: {
            fontSize: theme.typography.fontSize.xl,
          },
          img: {
            width: '6.25rem',
            height: '6.25rem',
            marginBottom: theme.spacing.sm,
          },
        }}
      />

      <TitleHeader title={title} subtitle={subtitle} />

      {paragraphs.map((paragraph, index) => (
        <TextWrapper as="p" key={index}>
          {paragraph}
        </TextWrapper>
      ))}

      <Button onClick={onButtonClick}>{buttonText}</Button>
    </FlexCenterContainer>
  );
}
