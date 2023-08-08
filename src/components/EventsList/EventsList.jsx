import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectEvents } from '../../redux/events/events-selectors';
import {
  selectSearchFilter,
  selectCategoryFilter,
  selectSortEventsOption,
} from '../../redux/filter/filter-selectors';
import { fetchEvents } from '../../redux/events/events-slice';

import { db } from '../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { sortByOption } from '../../helpers';
import { EventCard } from '../EventCard';
import * as SC from './EventsList.styled';

export const EventsList = () => {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const events = useSelector(selectEvents);
  const searchFilter = useSelector(selectSearchFilter);
  const categoryFilter = useSelector(selectCategoryFilter);
  const sortEventsOption = useSelector(selectSortEventsOption);

  const dispatch = useDispatch();

  useEffect(() => {}, [visibleEvents]);

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

  useEffect(() => {
    if (events) {
      const getVisibleEvents = () => {
        const normalizedFilter = searchFilter.toLowerCase();

        const filteredBySearchEvents = events.filter(
          ({ title, description }) =>
            title.toLowerCase().includes(normalizedFilter) ||
            description.toLowerCase().includes(normalizedFilter)
        );

        if (categoryFilter) {
          const filteredByCategoryEvents = filteredBySearchEvents.filter(
            ({ category }) => category === categoryFilter.slice(0, -1).trim()
          );

          setVisibleEvents(
            sortByOption(filteredByCategoryEvents, sortEventsOption)
          );
        } else {
          setVisibleEvents(
            sortByOption(filteredBySearchEvents, sortEventsOption)
          );
        }
      };

      getVisibleEvents();
    }
  }, [categoryFilter, events, searchFilter, sortEventsOption]);

  if (visibleEvents.length > 0) {
    return (
      <SC.EventsList>
        {visibleEvents.map(event => {
          return <EventCard key={event.id} event={event} />;
        })}
      </SC.EventsList>
    );
  }
};
