import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: ${p => p.theme.space[5]}px;

  width: 100%;
  height: fit-content;
  padding: 0 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 0 0 24px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;
