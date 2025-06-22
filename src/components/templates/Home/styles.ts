import styled from 'styled-components';

export const NumberedList = styled.ol`
  list-style-type: decimal;
  text-align: left;
  max-width: 31.25rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  padding-left: 2.5rem;
  list-style-position: outside;

  li {
    line-height: 1.5;
  }
`;
