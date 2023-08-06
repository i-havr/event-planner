import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import * as SC from './TimePicker.styled';
import 'keen-slider/keen-slider.min.css';

export const TimePicker = ({
  reference,
  setTime,
  isTimePickerOpen,
  setIsFirstEdit,
}) => {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  const [amPm, setAmPm] = useState('AM');

  const [selectedHourIndex, setSelectedHourIndex] = useState(0);
  const [selectedMinuteIndex, setSelectedMinuteIndex] = useState(0);
  const [selectedAmPmIndex, setSelectedAmPmIndex] = useState(0);

  const hourValues = [...Array(12).keys()].map(i => i + 1);
  const minuteValues = [...Array(60).keys()];
  const amPmValues = ['AM', 'PM'];

  useEffect(() => {
    if (!hour || minute === undefined || !amPm) {
      return;
    }

    setTime(
      `${hour}:${minute < 10 ? `0${minute}` : minute} ${amPm.toLowerCase()}`
    );
  }, [amPm, hour, minute, setTime]);

  const [hourSliderRef] = useKeenSlider({
    loop: true,
    initial: -1,
    vertical: true,
    mode: 'free-snap',
    slides: { perView: 3, spacing: 0 },

    slideChanged(s) {
      s.track.details.rel === 11
        ? setHour(hourValues[0])
        : setHour(hourValues[s.track.details.rel + 1]);

      s.track.details.rel === 11
        ? setSelectedHourIndex(0)
        : setSelectedHourIndex(s.track.details.rel + 1);

      setIsFirstEdit(false);
    },
  });

  const [minuteSliderRef] = useKeenSlider({
    loop: true,
    initial: -1,
    vertical: true,

    mode: 'free-snap',
    slides: { perView: 3, spacing: 0 },

    slideChanged(s) {
      s.track.details.rel === 59
        ? setMinute(minuteValues[0])
        : setMinute(minuteValues[s.track.details.rel + 1]);

      s.track.details.rel === 59
        ? setSelectedMinuteIndex(0)
        : setSelectedMinuteIndex(s.track.details.rel + 1);

      setIsFirstEdit(false);
    },
  });

  const [amPmSliderRef] = useKeenSlider({
    loop: true,
    initial: 1,
    vertical: true,
    mode: 'free-snap',
    slides: { perView: 3, spacing: 2 },

    slideChanged(s) {
      if (s.track.details.rel === 1) {
        setAmPm(amPmValues[0]);
      } else {
        setAmPm(amPmValues[1]);
      }

      s.track.details.rel === 1
        ? setSelectedAmPmIndex(0)
        : setSelectedAmPmIndex(1);

      setIsFirstEdit(false);
    },
  });

  if (isTimePickerOpen) {
    return (
      <SC.TimePickerWrapper ref={reference}>
        <SC.SlidersWrapper>
          <div id="keen-slider" className="keen-slider" ref={hourSliderRef}>
            {hourValues.map((value, idx) => (
              <div
                key={value}
                className={`keen-slider__slide number-slide-hour${value} ${
                  idx === selectedHourIndex ? 'selected' : ''
                }`}
              >
                {value}
              </div>
            ))}
          </div>

          <div id="keen-slider" className="keen-slider " ref={minuteSliderRef}>
            {minuteValues.map((value, idx) => (
              <div
                key={value}
                className={`keen-slider__slide number-slide-minute${value} ${
                  idx === selectedMinuteIndex ? 'selected' : ''
                }`}
              >
                {value < 10 ? `0${value}` : value}
              </div>
            ))}
          </div>

          <div
            id="keen-slider"
            className="keen-slider keen-slider_am-pm"
            ref={amPmSliderRef}
          >
            {amPmValues.map((value, idx) => (
              <div
                key={idx}
                className={`keen-slider__slide number-slide-${value.toLowerCase()} ${
                  idx === selectedAmPmIndex ? 'selected' : ''
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        </SC.SlidersWrapper>
      </SC.TimePickerWrapper>
    );
  }
};

TimePicker.propTypes = {
  setTime: PropTypes.func.isRequired,
  reference: PropTypes.object,
  isTimePickerOpen: PropTypes.bool.isRequired,
  setIsFirstEdit: PropTypes.func.isRequired,
};
