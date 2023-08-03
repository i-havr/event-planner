import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  & > svg {
    position: absolute;
    color: ${p => p.theme.colors.secondary};
  }
`;

export const SearchInput = styled.input`
  width: inherit;
  height: 48px;
  padding: 17px 40px 17px 48px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.normal};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.input};
  outline: none;

  &::placeholder {
    font-family: 'Poppins-Light';
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: 1;
    color: ${p => p.theme.colors.placeholder};
  }

  @media screen and (min-width: 768px) {
    width: 368px;
  }

  @media screen and (min-width: 768px) {
    width: 410px;
  }
`;
