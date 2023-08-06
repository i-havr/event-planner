import styled from 'styled-components';

export const Home = styled.main`
  display: block;
  width: 100%;
  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 40px 0 47px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  font-size: ${p => p.theme.fontSizes.xl}px;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 1280px) {
    display: inline-block;
    min-width: fit-content;
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
