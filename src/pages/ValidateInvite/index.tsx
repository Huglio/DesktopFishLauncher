import { HighLight } from '../../components/atoms/Text';
import ValidateInviteTemplate from '../../components/templates/ValidateInvite';

export default function ValidateInvitePage() {
  return (
    <ValidateInviteTemplate
      title={
        <>
          <HighLight>Seu</HighLight> Convite
        </>
      }
      subtitle="Validação de convite"
      paragraph="O APP só está disponível se você tiver um convite. Qualquer pessoa que já comprou o APP pode gerar e te mandar um"
      labelText="Digite um código de convite: "
      inputPlaceHolder="CÓDIGO"
      buttonText="Validar"
      inputId="invite-code"
    />
  );
}
