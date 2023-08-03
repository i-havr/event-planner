import styled from 'styled-components';

export const EventsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p => p.theme.space[5]}px;
  justify-content: center;
  justify-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 332px);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 302px);
  }
`;
