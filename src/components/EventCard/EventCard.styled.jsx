import styled from 'styled-components';

export const EventCard = styled.li`
  position: relative;
  width: 272px;
  height: 480px;
  border-radius: ${p => p.theme.radii.card};
  overflow: hidden;
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.normal};
  /* cursor: pointer; */

  &:hover div:nth-child(2) {
    bottom: 0;
  }

  &:focus div:nth-child(2) {
    bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: 332px;
  }

  @media screen and (min-width: 1440px) {
    width: 302px;
  }
`;

export const PictureWrapper = styled.div`
  width: 100%;
  height: 336px;
  overflow: hidden;
`;

export const Picture = styled.img`
  min-height: 100%;
  scale: 1;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: -56px;
  width: 100%;
  height: 240px;
  transition: bottom 300ms ease-out;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 ${p => p.theme.space[4]}px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 1.71;
  color: ${p => p.theme.colors.secondary};
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Date = styled.span``;

export const Location = styled.span``;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px
    ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};

  & button {
    width: 114px;
    height: 40px;
    margin-right: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  max-height: 100%;
  padding-top: ${p => p.theme.space[3]}px;
`;

export const Title = styled.h3`
  padding: ${p => p.theme.space[4]}px 0 ${p => p.theme.space[3]}px 0;
  font-family: 'Poppins-Medium';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  text-transform: capitalize;
  color: ${p => p.theme.colors.titleText};
`;

export const Description = styled.p`
  height: 88px;
  padding: ${p => p.theme.space[3]}px 0 ${p => p.theme.space[4]}px 0;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondaryText};
`;
