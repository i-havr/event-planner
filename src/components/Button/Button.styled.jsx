import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 240px;
  height: 56px;

  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[0]};

  font-family: 'Poppins-Medium';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  background-color: ${p => p.theme.colors.secondary};
  box-shadow: ${p => p.theme.shadows.normal};
  transition: background-color 300ms ease-out;
  cursor: pointer;

  &:disabled {
    background-color: ${p => p.theme.colors.muted};
    &:hover {
      background-color: ${p => p.theme.colors.muted};
      cursor: default;
    }
  }

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    width: auto;
    padding: ${p => p.theme.space[4]}px;
  }
`;
