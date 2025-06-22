import { CiImageOff } from 'react-icons/ci';
import * as S from './styles';
import type { ImageProps } from './types';
import { theme } from '../../../styles/theme';
import { useState } from 'react';

const defaultStyles = {
  container: {
    width: '20rem',
    height: '20rem',
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.backgrounds.defaultImage,
  },
  icon: {
    fontSize: '8rem',
    color: theme.colors.gray[500],
  },
  img: {
    width: '6.25rem',
    height: '6.25rem',
    marginBottom: theme.spacing.md,
  },
};

export default function Image({
  imageAlt,
  styles = defaultStyles,
  imageSrc,
}: ImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!imageSrc || hasError) {
    return (
      <S.ContainerDefaultImage $styles={styles?.container}>
        <CiImageOff
          fontSize={styles?.icon?.fontSize}
          color={styles?.icon?.color}
        />
        {imageAlt && <p>{imageAlt}</p>}
      </S.ContainerDefaultImage>
    );
  }

  return (
    <S.Img
      src={imageSrc}
      alt={imageAlt}
      $styles={styles?.img}
      onError={() => setHasError(true)}
    />
  );
}
