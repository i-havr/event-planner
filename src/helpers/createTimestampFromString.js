export const createTimestampFromString = dateString => {
  const [day, month, year] = dateString.split('/');
  const dateObject = new Date(year, month - 1, day);

  return dateObject;
};
