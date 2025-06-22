import type { ReactNode } from 'react';
import type { TitleHeaderProps } from '../../molecules/TitleHeader/types';
import type { ImageProps } from '../../molecules/Image/types';

export type HomeTemplateProps = TitleHeaderProps &
  ImageProps & {
    listTitle: ReactNode;
    listItems: string[];
    paragraphs: ReactNode[];
    contactUsText: ReactNode;
    buttonText: string;
    onButtonClick: () => void;
  };
