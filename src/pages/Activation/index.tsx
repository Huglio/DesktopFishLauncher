import { HighLight } from '../../components/atoms/Text';
import ActivationTemplate from '../../components/templates/Activation';
import { theme } from '../../styles/theme';

export default function ActivationPage() {
  return (
    <ActivationTemplate
      title={<HighLight>Ativação</HighLight>}
      subtitle="Quase lá! A próxima etapa é fazer o pagamento para ativar a sua conta!"
      imageTitle={<HighLight>PIX QRCode</HighLight>}
      value=""
      imageSrc=""
      buttonText="Link pagamento externo"
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
