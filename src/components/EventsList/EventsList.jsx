import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectEvents } from '../../redux/events/events-selectors';
import { selectFilter } from '../../redux/filter/filter-selectors';

import { db } from '../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

import { EventCard } from '../EventCard';

import { fetchEvents } from '../../redux/events/events-slice';

import * as SC from './EventsList.styled';

export const EventsList = () => {
  const events = useSelector(selectEvents);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const database = await collection(db, 'events');

        onSnapshot(
          database,
          data => {
            const sortedData = data.docs
              .map(doc => ({ id: doc.id, ...doc.data() }))
              .sort((a, b) => b.createdAt - a.createdAt);
            // console.log(sortedData);
            dispatch(fetchEvents(sortedData));
          },
          () => {}
        );
      } catch (error) {
        console.log(error.message);
      }
    };

    getEvents();
  }, [dispatch]);

  const getVisibleEvents = () => {
    const normalizedFilter = filter.toLowerCase();

    return events.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(normalizedFilter) ||
        description.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleEvents = getVisibleEvents();

  if (visibleEvents.length > 0) {
    return (
      <SC.EventsList>
        {visibleEvents.map(event => {
          return (
            <EventCard
              key={event.id}
              event={event}
              // onEditButton={id => dispatch(setModal(id))}
              // onDeleteButton={id => dispatch(deleteContact(id))}
            />
          );
        })}
      </SC.EventsList>
    );
  }
};
