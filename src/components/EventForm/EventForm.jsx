import PropTypes from 'prop-types';

import { useState, useRef, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEvents } from '../../redux/events/events-selectors';

import { useWindowWidth } from '../../hooks';
import { uploadEventToServer, editEvent } from '../../services';
import { dateConverter, createTimestampFromString } from '../../helpers';
import { OptionsSelector } from '../OptionsSelector';
import { Button } from '../Button';
import { DatePicker } from '../DatePicker';
import { TimePicker } from '../TimePicker';
import { categoryTypes, priorityLevels } from '../../assets';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { ReactComponent as CrossIcon } from '../../assets/icons/cross-icon.svg';
import * as SC from './EventForm.styled';

export const EventForm = ({ editType }) => {
  const { eventId: id } = useParams();
  const events = useSelector(selectEvents);
  const event = events.find(event => event.id === id);

  const [title, setTitle] = useState(editType ? event.title : '');
  const [description, setDescription] = useState(
    editType ? event.description : ''
  );
  const [date, setDate] = useState(
    editType ? createTimestampFromString(event.date) : ''
  );
  const [time, setTime] = useState('');
  const [location, setLocation] = useState(editType ? event.location : '');
  const [category, setCategory] = useState(editType ? event.category : '');
  const [pictureUri, setPictureUri] = useState(
    editType ? event.downloadURL : ''
  );
  const [priority, setPriority] = useState(editType ? event.priority : '');

  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setTimePickerOpen] = useState(false);
  const [isFirstEdit, setIsFirstEdit] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { isLargeScreenDesktop } = useWindowWidth();

  const datePickerRef = useRef(null);
  const timePickerLabelRef = useRef(null);
  const timePickerRef = useRef(null);

  useEffect(() => {
    if (isFirstEdit) {
      setTime('');
    }

    if (datePickerRef.current) {
      datePickerRef.current.setOpen(isDatePickerOpen);
    }
  }, [isDatePickerOpen, isFirstEdit, isTimePickerOpen]);

  const handleBackdropClick = event => {
    if (
      timePickerLabelRef.current &&
      !timePickerLabelRef.current.contains(event.target)
    ) {
      setTimePickerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBackdropClick);
    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  const handleFileInputChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = event => {
      const fileURI = event.target.result;
      setPictureUri(fileURI);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;

      case 'location':
        setLocation(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (editType) {
      const updatedDate = dateConverter(date);

      const isSuccess = await editEvent(id, {
        title,
        description,
        date: updatedDate,
        time,
        location,
        category,
        pictureUri,
        priority,
      });

      isSuccess && setIsFormSubmitted(true);
    } else {
      const isSuccess = await uploadEventToServer(
        title,
        description,
        dateConverter(date),
        time,
        location,
        category,
        pictureUri,
        priority
      );

      isSuccess && setIsFormSubmitted(true);
    }
  };

  if (isFormSubmitted && editType) {
    return <Navigate to={`/event/${id}`} />;
  } else if (isFormSubmitted && !editType) {
    return <Navigate to="/" />;
  }

  const handleCalendarClose = event => {
    if (event.target.textContent === 'Cancel') {
      setDate('');
    }

    if (datePickerRef.current) {
      setDatePickerOpen(false);
    }
  };

  const handleTimePickerToggle = () => {
    if (timePickerLabelRef.current) {
      setTimePickerOpen(true);
    }
  };

  return !isLargeScreenDesktop ? (
    <SC.Form autoComplete="off">
      <SC.GroupsWrapper>
        <SC.TitleGroupWrapper>
          <SC.Label>
            <SC.LabelTitle>Title</SC.LabelTitle>
            <SC.Input
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Input"
            />
            {title && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => setTitle('')}
              />
            )}
          </SC.Label>

          <SC.Label>
            <SC.LabelTitle>Description</SC.LabelTitle>
            <SC.Textarea
              type="text"
              name="description"
              maxLength={100}
              value={description}
              onChange={handleInputChange}
              placeholder="Input"
            />
            {description && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => setDescription('')}
              />
            )}
          </SC.Label>

          <SC.LabelDateTime>
            <SC.LabelTitle>Select date</SC.LabelTitle>

            <DatePicker
              reference={datePickerRef}
              date={date}
              isDatePickerOpen={isDatePickerOpen}
              handleCalendarClose={handleCalendarClose}
              setDate={setDate}
              setDatePickerOpen={setDatePickerOpen}
            >
              <SC.ButtonsGroup>
                <Button type="button" actionHandler={handleCalendarClose}>
                  Cancel
                </Button>
                <Button
                  disabled={date ? false : true}
                  type="button"
                  actionHandler={handleCalendarClose}
                >
                  Choose date
                </Button>
              </SC.ButtonsGroup>
            </DatePicker>

            <HiOutlineChevronDown
              size={18}
              style={
                isDatePickerOpen && {
                  transform: 'rotate(180deg)',
                  color: '#7B61FF',
                }
              }
            />
          </SC.LabelDateTime>

          <SC.LabelDateTime
            ref={timePickerLabelRef}
            onClick={handleTimePickerToggle}
          >
            <SC.LabelTitle>Select time</SC.LabelTitle>
            <SC.Input
              type="text"
              name="time"
              value={editType && isFirstEdit ? event.time : time}
              onChange={handleInputChange}
              placeholder={isTimePickerOpen ? 'Select Time' : 'Input'}
              readOnly
            />
            <HiOutlineChevronDown
              size={18}
              style={
                isTimePickerOpen && {
                  transform: 'rotate(180deg)',
                  color: '#7B61FF',
                }
              }
            />
            <TimePicker
              reference={timePickerRef}
              setTime={setTime}
              isTimePickerOpen={isTimePickerOpen}
              setIsFirstEdit={setIsFirstEdit}
            />
          </SC.LabelDateTime>
        </SC.TitleGroupWrapper>

        <SC.LocationGroupWrapper>
          <SC.Label>
            <SC.LabelTitle>Location</SC.LabelTitle>
            <SC.Input
              type="text"
              name="location"
              value={location}
              onChange={handleInputChange}
              placeholder="Input"
            />
            {location && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => setLocation('')}
              />
            )}
          </SC.Label>

          <OptionsSelector
            editType={editType}
            prevValue={editType && event.category}
            options={categoryTypes}
            title="Category"
            setOption={setCategory}
          />

          <SC.InputFileWrapper>
            <SC.LabelTitle>Add picture</SC.LabelTitle>
            <SC.LabelFile>
              <SC.Input
                type="file"
                name="picture"
                onChange={handleFileInputChange}
                placeholder="Input"
                accept="image/*,.png,.jpg,.jpeg,.webp"
                style={{ display: 'none' }}
              />
              <SC.InputFilePlaceholder
                style={{ color: pictureUri && '#6BD475' }}
              >
                {pictureUri ? 'File downloaded' : 'Select'}
              </SC.InputFilePlaceholder>
            </SC.LabelFile>
            {pictureUri && <CrossIcon onClick={() => setPictureUri('')} />}
          </SC.InputFileWrapper>

          <OptionsSelector
            editType={editType}
            prevValue={editType && event.priority}
            options={priorityLevels}
            title="Priority"
            setOption={setPriority}
          />
        </SC.LocationGroupWrapper>
      </SC.GroupsWrapper>

      <Button actionHandler={handleSubmit}>Add event</Button>
    </SC.Form>
  ) : (
    <SC.Form autoComplete="off">
      <SC.GroupsWrapper>
        <SC.TitleGroupWrapper>
          <SC.Label>
            <SC.LabelTitle>Title</SC.LabelTitle>
            <SC.Input
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Input"
            />
            {title && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => setTitle('')}
              />
            )}
          </SC.Label>

          <SC.Label>
            <SC.LabelTitle>Description</SC.LabelTitle>
            <SC.Textarea
              type="text"
              name="description"
              maxLength={100}
              value={description}
              onChange={handleInputChange}
              placeholder="Input"
            />
            {description && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => setDescription('')}
              />
            )}
          </SC.Label>
        </SC.TitleGroupWrapper>

        <SC.DateGroupWrapper>
          <SC.LabelDateTime>
            <SC.LabelTitle>Select date</SC.LabelTitle>

            <DatePicker
              reference={datePickerRef}
              date={date}
              isDatePickerOpen={isDatePickerOpen}
              handleCalendarClose={handleCalendarClose}
              setDate={setDate}
              setDatePickerOpen={setDatePickerOpen}
            >
              <SC.ButtonsGroup>
                <Button type="button" actionHandler={handleCalendarClose}>
                  Cancel
                </Button>
                <Button
                  disabled={date ? false : true}
                  type="button"
                  actionHandler={handleCalendarClose}
                >
                  Choose date
                </Button>
              </SC.ButtonsGroup>
            </DatePicker>

            <HiOutlineChevronDown
              size={18}
              style={
                isDatePickerOpen && {
                  transform: 'rotate(180deg)',
                  color: '#7B61FF',
                }
              }
            />
          </SC.LabelDateTime>

          <SC.LabelDateTime
            ref={timePickerLabelRef}
            onClick={handleTimePickerToggle}
          >
            <SC.LabelTitle>Select time</SC.LabelTitle>
            <SC.Input
              type="text"
              name="time"
              value={editType && isFirstEdit ? event.time : time}
              onChange={handleInputChange}
              placeholder={isTimePickerOpen ? 'Select Time' : 'Input'}
              readOnly
            />
            <HiOutlineChevronDown
              size={18}
              style={
                isTimePickerOpen && {
                  transform: 'rotate(180deg)',
                  color: '#7B61FF',
                }
              }
            />
            <TimePicker
              reference={timePickerRef}
              setTime={setTime}
              setIsFirstEdit={setIsFirstEdit}
              isTimePickerOpen={isTimePickerOpen}
            />
          </SC.LabelDateTime>

          <SC.Label>
            <SC.LabelTitle>Location</SC.LabelTitle>
            <SC.Input
              type="text"
              name="location"
              value={location}
              onChange={handleInputChange}
              placeholder="Input"
            />
            {location && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => setLocation('')}
              />
            )}
          </SC.Label>
        </SC.DateGroupWrapper>

        <SC.CategoryGroupWrapper>
          <OptionsSelector
            editType={editType}
            prevValue={editType && event.category}
            options={categoryTypes}
            title="Category"
            setOption={setCategory}
          />

          <SC.InputFileWrapper>
            <SC.LabelTitle>Add picture</SC.LabelTitle>
            <SC.LabelFile>
              <SC.Input
                type="file"
                name="picture"
                onChange={handleFileInputChange}
                placeholder="Input"
                accept="image/*,.png,.jpg,.jpeg,.webp"
                style={{ display: 'none' }}
              />
              <SC.InputFilePlaceholder
                style={{ color: pictureUri && '#6BD475' }}
              >
                {pictureUri ? 'File downloaded' : 'Select'}
              </SC.InputFilePlaceholder>
            </SC.LabelFile>
            {pictureUri && <CrossIcon onClick={() => setPictureUri('')} />}
          </SC.InputFileWrapper>

          <OptionsSelector
            editType={editType}
            prevValue={editType && event.priority}
            options={priorityLevels}
            title="Priority"
            setOption={setPriority}
          />
        </SC.CategoryGroupWrapper>
      </SC.GroupsWrapper>

      <Button actionHandler={handleSubmit}>Add event</Button>
    </SC.Form>
  );
};

EventForm.propTypes = {
  editType: PropTypes.bool,
};
