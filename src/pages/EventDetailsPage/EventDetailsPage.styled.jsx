import styled from 'styled-components';

export const EventDetailsPage = styled.main`
  display: block;
  height: 100vh;
  min-height: 100vh;

  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    width: 688px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${p => p.theme.fontSizes.xl}px;
  }

  @media screen and (min-width: 1280px) {
    min-width: fit-content;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
  }
`;

export const Wrapper = styled.div`
  width: 272px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;

  overflow: hidden;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.form};
  box-shadow: ${p => p.theme.shadows.normal};

  @media screen and (min-width: 768px) {
    width: 688px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 168px;
  background-color: ${p => p.theme.colors.muted};
  overflow: hidden;
  border-radius: ${p => p.theme.radii.form};

  @media screen and (min-width: 768px) {
    height: 272px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.p`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    padding: ${p => p.theme.space[5]}px;
  }
`;

export const MarkersWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 12px;
  flex-wrap: wrap;
  padding: 0 ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    padding: 0 ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const Marker = styled.span`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 12px;
  font-family: 'Poppins-Medium';
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.form};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    justify-content: end;
    gap: ${p => p.theme.space[4]}px;
    padding: 0 ${p => p.theme.space[5]}px;
  }

  & button {
    width: 108px;
    height: 32px;
    margin: 0;
    padding: ${p => p.theme.space[3]}px 14px;
    font-family: 'Poppins-Medium';
    font-size: ${p => p.theme.fontSizes.xs}px;
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: none;
    line-height: 1.33;

    &:first-child {
      color: ${p => p.theme.colors.secondary};
      border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
      background-color: #fff;

      &:hover {
        outline: 1px solid ${p => p.theme.colors.secondary};
      }

      @media screen and (min-width: 768px) {
        width: auto;
      }
    }
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 ${p => p.theme.space[4]}px;
`;
