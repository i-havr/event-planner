export const formatDate = inputDate => {
  const parts = inputDate.split('/');

  if (parts.length === 3) {
    const day = parts[0];
    const month = parts[1];

    return `${day}.${month}`;
  }

  return inputDate;
};
