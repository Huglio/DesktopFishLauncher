import { useNavigate } from 'react-router-dom';
import HomeTemplate from '../../components/templates/Home';

export default function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/invite');
  }

  return (
    <HomeTemplate
      imageAlt="Desktop Fish Icon"
      title={
        <>
          <span>Desktop</span> Fish
        </>
      }
      subtitle="Aquário virtual interativo"
      paragraphs={[
        <>
          <p>Muito obrigado por baixar o Desktop Fish!</p>
          <p>Seu apoio é de extrema importância para mim!</p>
        </>,
        <>
          <p>
            Como não sou a favor de fazer vaquinhas, criei esse APP com o
            objetivo de arrecadar fundos para o meu projeto principal, divulgado
            no instagram: <a>@eusolyy</a>
          </p>
        </>,
      ]}
      buttonText="Continuar"
      onButtonClick={handleClick}
    />
  );
}
