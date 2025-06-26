import AnimatedFish from '../../../assets/AnimatedFish2.gif';
import { FlexCenterContainer } from '../../atoms/FlexCenterContainer';
import TextWrapper from '../../atoms/TextWrapper';
import * as S from './styles';
import type { LoadingFishProps } from './types';

export default function LoadingFish({ loadingText }: LoadingFishProps) {
  return (
    <FlexCenterContainer $styles={{ justifyContent: 'center' }}>
      <S.LoadingContainer>
        <S.TextAndLoaderContainer>
          <TextWrapper
            as="h1"
            styles={{
              marginBottom: 0,
              fontSize: '3rem',
              fontWeight: 700,
            }}
          >
            {loadingText}
          </TextWrapper>
          <S.Loader />
        </S.TextAndLoaderContainer>
        <S.Img src={AnimatedFish} />
      </S.LoadingContainer>
    </FlexCenterContainer>
  );
}
