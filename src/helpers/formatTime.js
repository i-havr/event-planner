export const formatTime = inputTime => {
  const parts = inputTime.split(' ');

  if (parts.length === 2) {
    const time = parts[0];

    return time;
  }

  return inputTime;
};
