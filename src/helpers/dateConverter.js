export const dateConverter = timestamp => {
  const date = new Date(timestamp);

  const day = date.getDate();

  const month = date.getMonth();

  const formatDateItem = date_item => {
    if (date_item < 10) {
      return `0${date_item}`;
    }
    return `${date_item}`;
  };

  const formattedDay = formatDateItem(day);

  const formatteMonth = formatDateItem(month);
  const year = date.getFullYear();

  return `${formattedDay}/${formatteMonth}/${year}`;
};
