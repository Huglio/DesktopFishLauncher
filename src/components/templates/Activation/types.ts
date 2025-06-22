import type { ReactNode } from 'react';
import type { TitleHeaderProps } from '../../molecules/TitleHeader/types';
import type { ImageProps } from '../../molecules/Image/types';
import type { RealDisplayProps } from '../../atoms/RealDisplay/types';

export type ActivationTemplateProps = TitleHeaderProps &
  ImageProps &
  RealDisplayProps & {
    imageTitle: ReactNode;
    contactUsText: ReactNode;
    buttonText: string;
  };
