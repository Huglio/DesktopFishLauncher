import type { ErrorHeroProps } from './types';
import FishDead from '../../../assets/FishDeadIcon.svg';
import * as S from './styles';

export default function ErrorHero({ firstNumber, lastNumber }: ErrorHeroProps) {
  return (
    <S.ContainerHero>
      {firstNumber}
      <S.Img src={FishDead} />
      {lastNumber}
    </S.ContainerHero>
  );
}
