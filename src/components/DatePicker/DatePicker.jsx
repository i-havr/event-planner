import PropTypes from 'prop-types';

import * as SC from './DatePicker.styled';

export const DatePicker = ({
  children,
  reference,
  date,
  isDatePickerOpen,
  setDate,
  setDatePickerOpen,
}) => {
  return (
    <SC.DatePickerWrapper>
      <SC.DatePick
        ref={reference}
        type="text"
        name="date"
        selected={date}
        dateFormat="dd/MM/yyyy"
        placeholderText={!isDatePickerOpen ? 'Input' : 'Select Date'}
        input={true}
        onChange={date => setDate(date)}
        onCalendarClose={() => setDatePickerOpen(false)}
        onCalendarOpen={() => setDatePickerOpen(true)}
      >
        {children}
      </SC.DatePick>
    </SC.DatePickerWrapper>
  );
};

DatePicker.propTypes = {
  children: PropTypes.node,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  reference: PropTypes.object,
  isDatePickerOpen: PropTypes.bool.isRequired,
  setDate: PropTypes.func.isRequired,
  setDatePickerOpen: PropTypes.func.isRequired,
};
