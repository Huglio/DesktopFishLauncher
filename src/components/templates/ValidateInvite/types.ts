import type { ReactNode } from 'react';
import type { TitleHeaderProps } from '../../molecules/TitleHeader/types';
import type { InputWithLabelProps } from '../../molecules/InputWithLabel/types';

export type ValidateInviteTemplateProps = TitleHeaderProps &
  InputWithLabelProps & {
    paragraph: ReactNode;
    buttonText: string;
  };
