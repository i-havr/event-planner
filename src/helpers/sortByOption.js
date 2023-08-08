const parseDate = str => {
  const parts = str.split('/');
  return new Date(parts[2], parts[1] - 1, parts[0]);
};

export const sortByField = field => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

const sortByName = (events, sortOption) => {
  const newEvents = [...events];

  const sortedEvents = newEvents.sort((a, b) => {
    if (sortOption.includes('↓')) {
      return a.title < b.title ? 1 : -1;
    } else {
      return a.title > b.title ? 1 : -1;
    }
  });

  return sortedEvents;
};

const sortByDate = (events, sortOption) => {
  const newEvents = [...events];

  const sortedEvents = newEvents.sort((a, b) => {
    if (sortOption.includes('↓')) {
      return parseDate(b.date) - parseDate(a.date);
    } else {
      return parseDate(a.date) - parseDate(b.date);
    }
  });

  return sortedEvents;
};

const sortByPriority = (events, sortOption) => {
  const newEvents = [...events];

  const sortedEvents = newEvents.sort((a, b) => {
    const priorityOrder = { High: 0, Medium: 1, Low: 2 };

    if (sortOption.includes('↓')) {
      return priorityOrder[a.priority] > priorityOrder[b.priority] ? 1 : -1;
    } else {
      return priorityOrder[a.priority] < priorityOrder[b.priority] ? 1 : -1;
    }
  });

  return sortedEvents;
};

export const sortByOption = (events, sortOption) => {
  if (sortOption?.includes('name')) {
    return sortByName(events, sortOption);
  }

  if (sortOption?.includes('date')) {
    return sortByDate(events, sortOption);
  }

  if (sortOption?.includes('priority')) {
    return sortByPriority(events, sortOption);
  }

  if (!sortOption) {
    return events;
  }
};
