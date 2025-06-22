import TextWrapper from '../../atoms/TextWrapper';
import * as S from './styles';
import type { InputWithLabelProps } from './types';

export default function InputWithLabel({
  labelText,
  inputPlaceHolder,
  inputId,
  inputType = 'text',
  inputName,
  styles,
  footerText,
}: InputWithLabelProps) {
  return (
    <S.FormContainer $containerStyles={styles?.container}>
      <S.Label htmlFor={inputId} style={styles?.label}>
        {labelText}
      </S.Label>
      <S.Input
        id={inputId}
        type={inputType}
        name={inputName || inputId}
        placeholder={inputPlaceHolder}
        style={styles?.input}
      />
      {footerText && (
        <TextWrapper as="p" styles={{ marginBottom: 0, ...styles?.footerText }}>
          {footerText}
        </TextWrapper>
      )}
    </S.FormContainer>
  );
}
