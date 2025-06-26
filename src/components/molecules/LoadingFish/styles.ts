import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  max-height: 6rem;
`;

export const TextAndLoaderContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Loader = styled.div`
  width: 2.125rem;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #fff 90%, #0000);
  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: l3 1s infinite linear;
  position: absolute;
  right: -14%;
  bottom: 8%;
  flex-shrink: 0;

  @keyframes l3 {
    20% {
      background-position:
        0% 0%,
        50% 50%,
        100% 50%;
    }
    40% {
      background-position:
        0% 100%,
        50% 0%,
        100% 50%;
    }
    60% {
      background-position:
        0% 50%,
        50% 100%,
        100% 0%;
    }
    80% {
      background-position:
        0% 50%,
        50% 50%,
        100% 100%;
    }
  }
`;
