import type { InputWithLabelProps } from '../../molecules/InputWithLabel/types';
import type { TitleHeaderProps } from '../../molecules/TitleHeader/types';

export type CreateInviteTemplateProps = TitleHeaderProps & {
  paragraph: string;
  inputPixKey: InputWithLabelProps;
  inputCreateCode: InputWithLabelProps;
  buttonText: string;
};
