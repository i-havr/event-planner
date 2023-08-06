export const dateConverter = timestamp => {
  const date = new Date(timestamp);

  const day = date.getDate();

  const month = date.getMonth();

  const formatDateItem = (date_item, isMonth = false) => {
    if (date_item < 10) {
      return `0${isMonth ? date_item + 1 : date_item}`;
    }
    return `${isMonth ? date_item + 1 : date_item}`;
  };

  const formatDay = day => {
    if (day < 10) {
      return `0${day}`;
    }
    return `${day}`;
  };

  const formatMonth = month => {
    if (month + 1 < 10) {
      return `0${month + 1}`;
    }
    return `${month + 1}`;
  };

  const formattedDay = formatDay(day);
  const formattedMonth = formatMonth(month);
  const year = date.getFullYear();

  return `${formattedDay}/${formattedMonth}/${year}`;
};
