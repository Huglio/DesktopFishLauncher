import { HighLight } from '../../../components/atoms/Text';
import CreateInviteTemplate from '../../../components/templates/CreateInvite';

export default function CreateInvitePage() {
  return (
    <CreateInviteTemplate
      title={
        <>
          <HighLight>Desktop</HighLight> Fish
        </>
      }
      paragraph="Você ganha 50% de comissão por venda! E o dinheiro cai na hora! Você só precisa registrar sua chave PIX e compartilhar seu convite"
      inputPixKey={{
        inputId: 'create-pix-key',
        labelText: 'Sua Chave Pix',
        inputPlaceHolder: 'SUA CHAVE PIX',
      }}
      inputCreateCode={{
        inputId: 'create-code',
        labelText: 'Crie seu código',
        inputPlaceHolder: 'SEU CÓDIGO',
        footerText: 'clique para editar seu código',
      }}
      buttonText="Salvar"
    />
  );
}
