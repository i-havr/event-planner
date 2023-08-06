import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 42px 24px 136px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px 40px 125px 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 18px 80px 77px 80px;
  }
`;
