import ErrorTemplate from '../../../components/templates/Error';
import { useNavigate } from 'react-router-dom';
import ErrorHero from '../../../components/atoms/ErrorHero';

export default function PageNotFound() {
  const navigate = useNavigate();
  const button = {
    buttonText: 'Voltar para Home',
    onClick: () => navigate('/'),
  };

  return (
    <ErrorTemplate
      errorHero={<ErrorHero firstNumber={4} lastNumber={0} />}
      errorMessage="Ops! Está pagina não pode ser encontrada!"
      buttonText={button.buttonText}
      onButtonClick={button.onClick}
    />
  );
}
