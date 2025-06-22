import { useNavigate } from 'react-router-dom';
import { HighLight } from '../../components/atoms/Text';
import TextWrapper from '../../components/atoms/TextWrapper';
import HomeTemplate from '../../components/templates/Home';
import { theme } from '../../styles/theme';

export default function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/create-invite');
  }

  return (
    <HomeTemplate
      title={
        <>
          <HighLight>Desktop</HighLight> Fish
        </>
      }
      subtitle="Já está funcionando!"
      listTitle="COMO CUIDAR DO SEU PEIXINHO:"
      listItems={[
        'Não passe o mouse em cima do peixinho, isso vai estressá-lo',
        'Deixar o mouse perto do peixinho deixa ele curioso',
        'Interaja diariamente com o pexinho para ele se familiarizar com você',
        'Seu peixinho vai crescer com o tempo',
      ]}
      imageSrc=""
      paragraphs={[
        <TextWrapper as="p" styles={{ marginBottom: theme.spacing.sm }}>
          Seja um{' '}
          <HighLight
            $styles={{
              fontSize: theme.typography.fontSize.lg,
            }}
          >
            Afiliado!
          </HighLight>
        </TextWrapper>,
        <TextWrapper
          as="p"
          styles={{
            color: theme.colors.text.yellow,
            fontWeight: 500,
            fontSize: theme.typography.fontSize.sm,
            marginBottom: theme.spacing.md,
          }}
        >
          Ganhe{' '}
          <HighLight
            $styles={{
              fontWeight: 800,
              fontSize: theme.typography.fontSize.lg,
            }}
          >
            50%
          </HighLight>{' '}
          de comissão em cada venda
        </TextWrapper>,
      ]}
      buttonText="Criar convite"
      onButtonClick={handleClick}
      contactUsText={
        <>
          Qualquer problema com o aplicativo, contato em:{' '}
          <a>
            <HighLight $styles={{ color: theme.colors.text.yellow }}>
              contact@eusolyy.com
            </HighLight>
          </a>
        </>
      }
    />
  );
}
