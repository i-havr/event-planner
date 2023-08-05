import styled from 'styled-components';

export const CreateEventPage = styled.main`
  display: block;
  min-height: 100vh;
  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 42px 24px 136px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px 40px 308px 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 60px 80px 298px 80px;
  }
`;

// export const   = styled.div``

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  line-height: ${p => p.theme.lineHeights.secondary};
  font-size: ${p => p.theme.fontSizes.l}px;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 1280px) {
    min-width: fit-content;
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
