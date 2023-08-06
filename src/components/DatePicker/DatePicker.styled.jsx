import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    /* background-color: black; */
    border: ${p => p.theme.borders.none};
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);

    @media screen and (min-width: 768px) {
      width: 308px;
    }

    @media screen and (min-width: 1440px) {
      width: 372px;
    }
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

    @media screen and (min-width: 768px) {
      width: 95%;
      margin-left: auto;
      margin-right: auto;
    }
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
    @media screen and (min-width: 768px) {
      padding: 0px;
    }
  }

  & .react-datepicker__week {
    margin: 0px;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    @media screen and (min-width: 1440px) {
      margin: 10px 0px;
    }
  }

  & .react-datepicker__day {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 29px;
    height: 32px;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    /* background-color: black; */
    /* padding: 8px 0 8px 12px; */
    font-family: 'Inter-Regular';
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: 1.33;
    color: rgba(60, 60, 60, 0.5);

    &:hover {
      font-family: 'Inter-SemiBold';
      background-color: transparent;
      color: ${p => p.theme.colors.secondary};
    }

    @media screen and (min-width: 768px) {
      width: 38px;
    }

    @media screen and (min-width: 1440px) {
      width: 47px;
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
