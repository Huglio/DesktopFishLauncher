import TextWrapper from '../../atoms/TextWrapper';
import TitleHeader from '../../molecules/TitleHeader';
import type { HomeTemplateProps } from './types';
import * as S from './styles';
import Image from '../../molecules/Image';
import React from 'react';
import { Button } from '../../atoms/Button';
import { useTheme } from 'styled-components';

export default function HomeTemplate({
  title,
  subtitle,
  listTitle,
  listItems,
  imageSrc,
  paragraphs,
  buttonText,
  onButtonClick,
  contactUsText,
}: HomeTemplateProps) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <TitleHeader title={title} subtitle={subtitle} />

      <TextWrapper
        as="h2"
        styles={{
          marginBottom: theme.spacing.md,
          color: theme.colors.text.yellow,
          fontWeight: 800,
        }}
      >
        {listTitle}
      </TextWrapper>

      <S.NumberedList style={{ listStyleType: 'decimal' }}>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </S.NumberedList>

      <Image imageSrc={imageSrc} />

      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>{paragraph}</React.Fragment>
      ))}

      <Button $spacing="xl" onClick={onButtonClick}>
        {buttonText}
      </Button>

      <TextWrapper
        as="p"
        styles={{ color: theme.colors.text.gray, marginBottom: '0' }}
      >
        {contactUsText}
      </TextWrapper>
    </React.Fragment>
  );
}
