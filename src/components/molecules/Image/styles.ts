import styled from 'styled-components';
import type { WithDynamicStyles } from '../../../styles/styled';

export const ContainerDefaultImage = styled.div<WithDynamicStyles>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ $styles }) => $styles?.width};
  height: ${({ $styles }) => $styles?.height};
  padding: 0.25rem;
  background-color: ${({ $styles }) => $styles?.backgroundColor};
  border-radius: ${props => props.theme.borders.radius.md};
  border: ${({ $styles }) => $styles?.border};
  gap: ${({ $styles }) => $styles?.gap};
  margin-bottom: ${({ $styles }) => $styles?.marginBottom};

  p {
    color: ${({ $styles }) => $styles?.color};
    font-size: ${({ $styles }) => $styles?.fontSize};
    text-align: center;
  }
`;

export const Img = styled.img<WithDynamicStyles>`
  width: ${({ $styles }) => $styles?.width};
  height: ${({ $styles }) => $styles?.height};
  object-fit: contain;
  margin-bottom: ${({ $styles }) => $styles?.marginBottom};
`;
