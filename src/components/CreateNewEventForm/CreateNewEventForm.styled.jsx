import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 272px;
  /* min-height: 100vh; */
  margin-left: auto;
  margin-right: auto;
  padding: 40px 16px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.form};
  box-shadow: ${p => p.theme.shadows.normal};

  & > button {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > svg {
    position: absolute;
  }
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
`;

export const InputFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > svg {
    position: absolute;
    width: 44px;
    height: 44px;
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
  top: 40px;
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

export const DatePickerWrapper = styled.div`
  & .react-datepicker-wrapper {
    width: 100%;
  }

  & .react-datepicker__triangle {
    display: none;
  }

  & .react-datepicker {
    display: flex;
    flex-direction: column;
    width: 240px;
    min-height: 348px;
    padding: 20px;
    border-radius: 11px;
    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.none};
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);
  }

  & .react-datepicker__current-month {
    font-family: 'Poppins-Medium';
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.text};
  }

  & .react-datepicker__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 56px;
    padding: 0;
    background-color: ${p => p.theme.colors.white};
    border-bottom: ${p => p.theme.borders.none};
  }

  & .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    color: ${p => p.theme.colors.text};
  }

  & .react-datepicker__day-name {
    width: 16px;
    font-family: 'Poppins-Regular';
    font-size: ${p => p.theme.fontSizes.xs}px;
    line-height: 1.33;

    &:first-child {
      color: ${p => p.theme.colors.red};
    }

    &:last-child {
      color: ${p => p.theme.colors.red};
    }
  }

  & .react-datepicker__navigation {
    top: 16px;
  }

  & .react-datepicker__navigation--previous {
    left: 16px;
  }

  & .react-datepicker__navigation--next {
    right: 16px;
  }

  & .react-datepicker__navigation-icon::before {
    border-color: black;
    border-width: 2px 2px 0 0;
  }

  & .react-datepicker__month {
    margin: 32px 0px 16px 0px;
  }

  & .react-datepicker__week {
    margin: 12px 0px;
  }

  & .react-datepicker__day {
    margin: 0;
    padding: 4px;
    font-family: 'Inter-Regular';
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: 1.33;
    color: rgba(60, 60, 60, 0.5);

    &:hover {
      font-family: 'Inter-SemiBold';
      background-color: transparent;
      color: ${p => p.theme.colors.secondary};
    }
  }

  & .react-datepicker__day--selected {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.none};
  }

  & .react-datepicker__day--outside-month {
    color: ${p => p.theme.colors.blue};
    opacity: 0;
    visibility: hidden;
  }

  & .react-datepicker__day--keyboard-selected {
    background-color: transparent;
  }

  & .react-datepicker__children-container {
    bottom: 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DatePick = styled(DatePicker)`
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
    &::placeholder {
      color: ${p => p.theme.colors.secondary};
    }
  }

  &::placeholder {
    color: ${p => p.theme.colors.black};
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;

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

export const TimePickerWrapper = styled.div``;

export const TimePick = styled(DatePicker)``;
