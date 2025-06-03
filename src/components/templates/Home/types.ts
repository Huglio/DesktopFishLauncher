import type { ReactNode } from 'react';

export interface HomeTemplateProps {
  imageAlt: string;
  title: ReactNode;
  subtitle: string;
  paragraphs: ReactNode[];
  buttonText: string;
  onButtonClick: () => void;
}
