export const convertTimeTo24HourFormat = timeString => {
  const match = timeString.match(/(\d{1,2}):(\d{2})\s?([ap]m)?/i);

  if (!match) {
    return timeString;
  }

  let hour = parseInt(match[1], 10);
  const minute = match[2];
  const amPm = match[3] ? match[3].toLowerCase() : undefined;

  if (hour === 12) {
    hour = amPm === 'am' ? 0 : 12;
  } else {
    hour += amPm === 'pm' ? 12 : 0;
  }

  return `${hour.toString().padStart(2, '0')}:${minute}`;
};
