import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: end;
  gap: ${p => p.theme.space[5]}px;

  width: 100%;
  padding: 0 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 0 0 24px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }

  & > div:nth-child(1) {
    width: 56px;

    & ul {
      padding-left: 0;
      padding-right: 0;
    }

    &:focus-within svg > path {
      stroke: ${p => p.theme.colors.secondary};
    }
    & > button > svg > path {
      stroke: '#7B61FF';
    }

    @media screen and (min-width: 768px) {
      width: 150px;
    }
  }

  & > div:nth-child(2) {
    width: 56px;

    & ul {
      padding-left: 0;
      padding-right: 0;
    }

    &:focus-within svg > path {
      stroke: ${p => p.theme.colors.secondary};
    }

    @media screen and (min-width: 768px) {
      width: 150px;
    }
  }
`;
