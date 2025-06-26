import { useNavigate } from 'react-router-dom';
import IntroductionTemplate from '../../../components/templates/Introduction';
import DesktopFishImage from '../../assets/DesktopFishPolished.png';
import { HighLight } from '../../../components/atoms/Text';

export default function IntroductionPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/validate-invite');
  }

  return (
    <IntroductionTemplate
      imageSrc={DesktopFishImage}
      imageAlt="Desktop Fish Icon"
      title={
        <>
          <HighLight>Desktop</HighLight> Fish
        </>
      }
      subtitle="Aquário virtual interativo"
      paragraphs={[
        <>
          Muito obrigado por baixar o Desktop Fish!
          <br />
          Seu apoio é de extrema importância para mim!
        </>,
        <>
          Como não sou a favor de fazer vaquinhas, criei esse APP com o objetivo
          de arrecadar fundos para o meu projeto principal, divulgado no
          instagram: <a>@eusolyy</a>
        </>,
      ]}
      buttonText="Continuar"
      onButtonClick={handleClick}
    />
  );
}
