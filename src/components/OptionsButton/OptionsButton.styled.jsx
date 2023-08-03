import styled from 'styled-components';

export const OptionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  padding: ${p => p.theme.space[0]};
  font-family: 'Poppins-Medium';
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.normal};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[4]}px;
    width: auto;
    padding: ${p => p.theme.space[4]}px;
  }
`;

export const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  padding: ${p => p.theme.space[0]};
  font-family: 'Poppins-Medium';
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  background-color: ${p => p.theme.colors.secondary};
  box-shadow: ${p => p.theme.shadows.normal};
  transition: background-color 300ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    width: auto;
    padding: ${p => p.theme.space[4]}px;
  }
`;
