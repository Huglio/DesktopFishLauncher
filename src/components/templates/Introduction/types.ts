import type { ReactNode } from 'react';
import type { ImageProps } from '../../molecules/Image/types';
import type { TitleHeaderProps } from '../../molecules/TitleHeader/types';

export type IntroductionTemplateProps = ImageProps &
  TitleHeaderProps & {
    paragraphs: ReactNode[];
    buttonText: string;
    onButtonClick: () => void;
  };
