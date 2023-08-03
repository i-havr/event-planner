import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${p => p.theme.space[5]}px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 92px;
    padding: 26px 40px 18px 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 22px 80px 22px 87px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${p => p.theme.space[5]}px;

  @media screen and (min-width: 768px) {
    width: auto;
    justify-content: end;
    gap: 24px;
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Logo = styled.span`
  font-family: 'Alata-Regular';
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: ${p => p.theme.lineHeights.logo};
  color: ${p => p.theme.colors.secondary};
`;
