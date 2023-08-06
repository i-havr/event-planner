import { priorityLevels } from '../assets';

export const colorizePriorityMarker = marker => {
  let color = '';

  switch (marker) {
    case priorityLevels.list[0]:
      color = '#FF2B77';
      break;

    case priorityLevels.list[1]:
      color = '#E2A300';
      break;

    case priorityLevels.list[2]:
      color = '#6BD475';
      break;

    default:
      return;
  }

  return color;
};
