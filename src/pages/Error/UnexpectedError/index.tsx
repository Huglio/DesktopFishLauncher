import ErrorTemplate from '../../../components/templates/Error';
import FishDeadIcon from '../../../assets/FishDeadIcon.svg';
import { HighLight } from '../../../components/atoms/Text';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function UnexpectedErrorPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const button = {
    buttonText: 'Voltar para Home',
    onClick: () => navigate('/'),
  };

  return (
    <ErrorTemplate
      errorImage={FishDeadIcon}
      errorMessage="Ocorreu um erro inesperado!"
      contactUsMessage={
        <>
          <HighLight>Recarregue a página</HighLight>. Caso o problema persista,
          entre em contato:{' '}
          <a>
            <HighLight $styles={{ color: theme.colors.text.yellow }}>
              contact@eusolyy.com
            </HighLight>
          </a>
        </>
      }
      buttonText={button.buttonText}
      onButtonClick={button.onClick}
    />
  );
}
