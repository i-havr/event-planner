import styled from 'styled-components';

export const OptionsSelector = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  font-family: 'Poppins-Medium';
`;

export const LanguageSelector = styled.div`
  position: relative;
  width: 69px;
  font-family: 'Poppins-Medium';
`;

export const ButtonLanguages = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  padding: 15px 12px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1;
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.normal};

  &:hover {
    cursor: pointer;
  }

  & > svg {
    transition: transform ease-out 300ms;
  }
`;

export const Title = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1;
  letter-spacing: 0.4px;
  color: ${p => p.theme.colors.secondary};
`;

export const ButtonOptions = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  padding: 15px 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};
  background-color: ${p => p.theme.colors.white};

  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }

  & > svg {
    transition: transform ease-out 300ms;
  }
`;

export const LanguagesMenu = styled.ul`
  position: absolute;
  top: 50px;
  width: inherit;
  padding: 15px 12px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.normal};
  z-index: 10;
`;

export const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  width: inherit;
  padding: 0 16px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.normal};
  z-index: 10;
`;

export const Language = styled.li`
  padding: 2px 0;
  line-height: 1.25;
  color: ${p => p.theme.colors.muted};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    color: ${p => p.theme.colors.black};
    border-bottom: 1px solid ${p => p.theme.colors.black};
    cursor: pointer;
  }
`;

export const Option = styled.li`
  padding: 16px 0;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.text};

  &:not(:last-child) {
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  }

  &:hover {
    color: ${p => p.theme.colors.secondary};
    cursor: pointer;
  }
`;
