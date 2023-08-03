import styled from 'styled-components';

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  gap: ${p => p.theme.space[3]}px;

  width: fit-content;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[0]};
  font-family: 'Poppins-Medium';
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  transition: color 300ms ease-out;
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;
