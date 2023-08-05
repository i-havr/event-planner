import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate, formatTime, capitalizeFirstLetter } from '../../helpers';
import { Button } from '../Button';

import * as SC from './EventCard.styled';

export const EventCard = ({ event, onFollowButton, isFollowed }) => {
  if (event) {
    // const { id, user: name, avatar, tweets, followers } = event;
    const {
      id,
      title,
      description,
      date,
      time,
      location,
      category,
      downloadURL,
      priority,
    } = event;

    return (
      <SC.EventCard>
        <SC.PictureWrapper>
          <SC.Picture src={downloadURL} alt={title} />
        </SC.PictureWrapper>
        <SC.InfoWrapper>
          <SC.DateWrapper>
            <div>
              <SC.Date>{formatDate(date)}</SC.Date>
              {' at '}
              <SC.Time>{formatTime(time)}</SC.Time>
            </div>

            <SC.Location>{capitalizeFirstLetter(location)}</SC.Location>
          </SC.DateWrapper>
          <SC.DescriptionWrapper>
            <SC.Title>{title}</SC.Title>
            <SC.Description>{description}</SC.Description>
            <SC.ButtonWrapper>
              <Link to={`/event/${id}`}>
                <Button type="button">More info</Button>
              </Link>
            </SC.ButtonWrapper>
          </SC.DescriptionWrapper>
        </SC.InfoWrapper>
      </SC.EventCard>
    );
  }
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    downloadURL: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }),
  onFollowButton: PropTypes.func,
  isFollowed: PropTypes.func,
};
