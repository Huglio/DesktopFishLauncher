import styled from 'styled-components';

export const Image = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: contain;
  margin-bottom: 0.5rem;

  &:not([src]),
  &[src=''],
  &[src='#'],
  &[src='null'] {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    border: 1px dashed rgba(255, 255, 255, 0.3);
    text-align: center;
    font-size: 0.75rem;
    padding: 0.5rem;
    word-break: break-word;

    &::before {
      font-size: 2rem;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 6rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }

  span {
    font-weight: 800;
  }
`;

export const TextWrapper = styled.div`
  max-width: 31.25rem;
  text-align: center;
  margin-bottom: 2rem;
`;
