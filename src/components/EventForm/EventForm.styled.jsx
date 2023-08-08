import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 272px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 16px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.form};
  box-shadow: ${p => p.theme.shadows.normal};

  @media screen and (min-width: 768px) {
    max-width: 688px;
    padding: 40px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
    padding: 40px;
  }

  & > button {
    margin-top: 20px;

    @media screen and (min-width: 768px) {
      width: 193px;
      margin-top: 40px;
      margin-right: 0;
    }
  }
`;

export const GroupsWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    gap: 42px;
  }
`;
export const TitleGroupWrapper = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 308px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 372px;
  }
`;

export const LocationGroupWrapper = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 308px;
  }
`;

export const DateGroupWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    min-width: 372px;
  }
`;

export const CategoryGroupWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    min-width: 372px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > svg {
    position: absolute;
    & > path {
      stroke: ${props =>
        props.$dirtyfield === 'true' ? '#FF2B77' : '#7B61FF'};
    }
  }
`;

export const ErrorMessage = styled.span`
  display: none;
  position: absolute;
  top: calc(100% + 4px);
  right: ${p => p.theme.space[4]}px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.xs}px;
  line-height: 1.33;
  color: ${p => p.theme.colors.red};
`;

export const LabelDateTime = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > svg {
    position: absolute;
    right: 15px;
    top: 44px;
    transition: transform ease-out 300ms;
    pointer-events: none;
  }

  & input:focus {
    &::placeholder {
      color: ${p => p.theme.colors.secondary};
    }
  }
`;

export const InputFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > svg {
    position: absolute;
    width: 44px;
    height: 84px;
    right: 2px;
    top: 30px;
    padding: 10px;
    z-index: 9;
    cursor: pointer;
  }
`;

export const LabelFile = styled.label`
  height: 56px;
  margin-bottom: 20px;
  padding: ${p => p.theme.space[4]}px 32px ${p => p.theme.space[4]}px 12px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};
  cursor: pointer;
`;

export const InputFilePlaceholder = styled.span`
  position: absolute;
  top: 60px;
  left: 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.black};
  z-index: 0;
`;

export const LabelTitle = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1;
  letter-spacing: 0.4px;
  color: ${p => p.theme.colors.secondary};
`;

export const Input = styled.input`
  height: 56px;
  padding: ${p => p.theme.space[4]}px 32px ${p => p.theme.space[4]}px 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};
  outline: none;

  &::placeholder {
    font-family: 'Poppins-Regular';
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: ${p => p.theme.lineHeights.secondary};
    color: ${p => p.theme.colors.black};
  }

  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }
`;

export const Textarea = styled.textarea`
  height: 156px;
  padding: ${p => p.theme.space[4]}px 32px ${p => p.theme.space[4]}px 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};
  outline: none;
  resize: none;

  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }

  &::placeholder {
    font-family: 'Poppins-Regular';
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.black};
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 56px;
  padding: ${p => p.theme.space[4]}px 32px ${p => p.theme.space[4]}px 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};
  outline: none;

  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: end;
    gap: ${p => p.theme.space[4]}px;
  }

  & > button {
    width: auto;
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
    }
  }
`;
