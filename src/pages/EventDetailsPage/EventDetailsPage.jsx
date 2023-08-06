import { useState, useLayoutEffect } from 'react';
import { Link, Navigate, useParams, useLocation } from 'react-router-dom';
import { deleteEvent, deleteImage } from '../../services';
import { useSelector } from 'react-redux';
import { useWindowWidth } from '../../hooks';
import { selectEvents } from '../../redux/events/events-selectors';

import {
  formatDate,
  colorizePriorityMarker,
  capitalizeFirstLetter,
} from '../../helpers';

import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { HiArrowLeft } from 'react-icons/hi';
import { BackButton } from '../../components/BackButton';

import * as SC from './EventDetailsPage.styled';

export default function EventDetailsPage() {
  const [isEventDeleted, setIsEventDeleted] = useState(false);
  const { eventId: id } = useParams();
  const routerLocation = useLocation();

  const { isScreenMobile } = useWindowWidth();

  const events = useSelector(selectEvents);
  const event = events.find(event => event.id === id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [routerLocation.pathname]);

  if (isEventDeleted) {
    return <Navigate to="/" />;
  }

  if (event) {
    const {
      title,
      description,
      date,
      time,
      location,
      category,
      downloadURL,
      priority,
    } = event;

    const handleDeleteEvent = async () => {
      const isSuccessEventDeleted = await deleteEvent(id);
      const isSuccessImageDeleted = await deleteImage(downloadURL);

      isSuccessEventDeleted && isSuccessImageDeleted && setIsEventDeleted(true);
    };

    return (
      <SC.EventDetailsPage>
        <Section>
          <Container>
            <Link to="/">
              <BackButton aria-label="Back button">
                <HiArrowLeft size={16} />
                {'Back'}
              </BackButton>
            </Link>

            <SC.Title>{title}</SC.Title>

            <SC.Wrapper>
              <SC.ImageWrapper>
                <SC.Image src={downloadURL} alt={title} />
              </SC.ImageWrapper>

              <SC.Description>{description}</SC.Description>
              <SC.MarkersWrapper>
                <SC.Marker>{category}</SC.Marker>
                <SC.Marker style={{ color: colorizePriorityMarker(priority) }}>
                  {priority}
                </SC.Marker>
                <SC.Marker>{capitalizeFirstLetter(location)}</SC.Marker>
                {!isScreenMobile && (
                  <SC.Marker>
                    {formatDate(date)}
                    {' at '}
                    {time}
                  </SC.Marker>
                )}
              </SC.MarkersWrapper>
              {isScreenMobile && (
                <SC.TimeWrapper>
                  <SC.Marker
                    style={{ marginTop: '12px', marginBottom: '40px' }}
                  >
                    {formatDate(date)}
                    {' at '}
                    {time}
                  </SC.Marker>
                </SC.TimeWrapper>
              )}

              <SC.ButtonsGroup>
                <Link to={`/event/${id}/edit`} state={{ from: routerLocation }}>
                  <Button type="button">Edit</Button>
                </Link>
                <Button type="button" actionHandler={handleDeleteEvent}>
                  Delete event
                </Button>
              </SC.ButtonsGroup>
            </SC.Wrapper>
          </Container>
        </Section>
      </SC.EventDetailsPage>
    );
  } else {
    return null;
  }
}
