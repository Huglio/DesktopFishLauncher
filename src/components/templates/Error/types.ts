import type React from 'react';

export type ErrorTemplateProps = {
  errorHero?: React.ReactNode;
  errorImage?: string;
  errorMessage: React.ReactNode;
  contactUsMessage?: React.ReactNode;
  buttonText: string;
  onButtonClick: () => void;
};
