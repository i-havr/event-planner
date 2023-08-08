import PropTypes from 'prop-types';

import { useState, useRef, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEvents } from '../../redux/events/events-selectors';

import { useInput } from '../../hooks';

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
  const [isFirstEdit, setIsFirstEdit] = useState(true);
  const [isFormDataValid, setIsFormDataValid] = useState(false);

  const { eventId: id } = useParams();
  const events = useSelector(selectEvents);
  const event = events.find(event => event.id === id);

  const title = useInput(editType ? event.title : '', { isTitle: true });
  const description = useInput(editType ? event.description : '', {
    isDescription: true,
  });
  const [date, setDate] = useState(
    editType ? createTimestampFromString(event.date) : ''
  );
  const [time, setTime] = useState(editType ? event.time : '');
  const location = useInput(editType ? event.location : '', {
    isLocation: true,
  });
  const [category, setCategory] = useState(editType ? event.category : '');
  const [pictureUri, setPictureUri] = useState(
    editType ? event.downloadURL : ''
  );
  const [priority, setPriority] = useState(editType ? event.priority : '');

  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setTimePickerOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { isLargeScreenDesktop } = useWindowWidth();

  const datePickerRef = useRef(null);
  const timePickerLabelRef = useRef(null);
  const timePickerRef = useRef(null);

  useEffect(() => {
    const isFormValid =
      title.validForm && description.validForm && location.validForm;

    const areFieldsFilled =
      title.value &&
      description.value &&
      date &&
      time &&
      location.value &&
      category &&
      pictureUri &&
      priority;

    if (areFieldsFilled && isFormValid) {
      setIsFormDataValid(true);
    } else {
      setIsFormDataValid(false);
    }
  }, [
    category,
    date,
    description,
    location,
    pictureUri,
    priority,
    time,
    title,
  ]);

  useEffect(() => {
    if (isFirstEdit) {
      editType ? setTime(event.time) : setTime('');
    }

    if (datePickerRef.current) {
      datePickerRef.current.setOpen(isDatePickerOpen);
    }
  }, [editType, event?.time, isDatePickerOpen, isFirstEdit]);

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

  const handleSubmit = async event => {
    event.preventDefault();

    if (editType) {
      const updatedDate = dateConverter(date);

      if (isFormDataValid) {
        const isSuccess = await editEvent(id, {
          title: title.value,
          description: description.value,
          date: updatedDate,
          time,
          location: location.value,
          category,
          downloadURL: pictureUri,
          priority,
        });

        isSuccess && setIsFormSubmitted(true);
      }
    } else {
      if (isFormDataValid) {
        const isSuccess = await uploadEventToServer(
          title.value,
          description.value,
          dateConverter(date),
          time,
          location.value,
          category,
          pictureUri,
          priority
        );

        isSuccess && setIsFormSubmitted(true);
      }
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
          <SC.Label $dirtyfield={title.isDirty && title.titleError.toString()}>
            <SC.LabelTitle>Title</SC.LabelTitle>
            <SC.Input
              type="text"
              name="title"
              value={title.value}
              style={{
                border:
                  title.value &&
                  title.isDirty &&
                  title.titleError &&
                  '1px solid #FF2B77',
              }}
              onChange={title.onChange}
              onBlur={title.onBlur}
              placeholder="Input"
            />
            {title.value && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => title.setValue('')}
              />
            )}

            <SC.ErrorMessage
              style={{
                display:
                  title.value && title.isDirty && title.titleError && 'block',
              }}
            >
              Invalid input
            </SC.ErrorMessage>
          </SC.Label>

          <SC.Label
            $dirtyfield={
              description.isDirty && description.descriptionError.toString()
            }
          >
            <SC.LabelTitle>Description</SC.LabelTitle>
            <SC.Textarea
              type="text"
              name="description"
              maxLength={100}
              value={description.value}
              style={{
                border:
                  description.value &&
                  description.isDirty &&
                  description.descriptionError &&
                  '1px solid #FF2B77',
              }}
              onChange={description.onChange}
              onBlur={description.onBlur}
              placeholder="Input"
            />
            {description.value && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => description.setValue('')}
              />
            )}

            <SC.ErrorMessage
              style={{
                display:
                  description.value &&
                  description.isDirty &&
                  description.descriptionError &&
                  'block',
              }}
            >
              Invalid input
            </SC.ErrorMessage>
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
          <SC.Label
            $dirtyfield={location.isDirty && location.locationError.toString()}
          >
            <SC.LabelTitle>Location</SC.LabelTitle>
            <SC.Input
              type="text"
              name="location"
              value={location.value}
              style={{
                border:
                  location.value &&
                  location.isDirty &&
                  location.locationError &&
                  '1px solid #FF2B77',
              }}
              onChange={location.onChange}
              onBlur={location.onBlur}
              placeholder="Input"
            />
            {location.value && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => location.setValue('')}
              />
            )}

            <SC.ErrorMessage
              style={{
                display:
                  location.value &&
                  location.isDirty &&
                  location.locationError &&
                  'block',
              }}
            >
              Invalid input
            </SC.ErrorMessage>
          </SC.Label>

          <OptionsSelector
            editType={editType}
            prevValue={editType && event.category}
            options={categoryTypes}
            title="Category"
            setOption={setCategory}
          />

          <SC.InputFileWrapper>
            <SC.LabelTitle style={{ marginTop: '20px' }}>
              Add picture
            </SC.LabelTitle>
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

      <Button disabled={!isFormDataValid} actionHandler={handleSubmit}>
        {editType ? 'Save' : 'Add event'}
      </Button>
    </SC.Form>
  ) : (
    <SC.Form autoComplete="off">
      <SC.GroupsWrapper>
        <SC.TitleGroupWrapper>
          <SC.Label $dirtyfield={title.isDirty && title.titleError.toString()}>
            <SC.LabelTitle>Title</SC.LabelTitle>
            <SC.Input
              type="text"
              name="title"
              value={title.value}
              style={{
                border:
                  title.value &&
                  title.isDirty &&
                  title.titleError &&
                  '1px solid #FF2B77',
              }}
              onChange={title.onChange}
              onBlur={title.onBlur}
              placeholder="Input"
            />
            {title.value && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => title.setValue('')}
              />
            )}
            <SC.ErrorMessage
              style={{
                display:
                  title.value && title.isDirty && title.titleError && 'block',
              }}
            >
              Invalid input
            </SC.ErrorMessage>
          </SC.Label>

          <SC.Label
            $dirtyfield={
              description.isDirty && description.descriptionError.toString()
            }
          >
            <SC.LabelTitle>Description</SC.LabelTitle>
            <SC.Textarea
              type="text"
              name="description"
              maxLength={100}
              value={description.value}
              style={{
                border:
                  description.value &&
                  description.isDirty &&
                  description.descriptionError &&
                  '1px solid #FF2B77',
              }}
              onChange={description.onChange}
              onBlur={description.onBlur}
              placeholder="Input"
            />
            {description.value && (
              <CrossIcon
                style={{ right: '12px', top: '40px', cursor: 'pointer' }}
                onClick={() => description.setValue('')}
              />
            )}

            <SC.ErrorMessage
              style={{
                display:
                  description.value &&
                  description.isDirty &&
                  description.descriptionError &&
                  'block',
              }}
            >
              Invalid input
            </SC.ErrorMessage>
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

          <SC.Label
            $dirtyfield={location.isDirty && location.locationError.toString()}
          >
            <SC.LabelTitle>Location</SC.LabelTitle>
            <SC.Input
              type="text"
              name="location"
              value={location.value}
              style={{
                border:
                  location.value &&
                  location.isDirty &&
                  location.locationError &&
                  '1px solid #FF2B77',
              }}
              onChange={location.onChange}
              onBlur={location.onBlur}
              placeholder="Input"
            />
            {location.value && (
              <CrossIcon
                style={{
                  right: '12px',
                  top: '40px',
                  cursor: 'pointer',
                  color:
                    location.isDirty &&
                    location.locationError &&
                    '1px solid #FF2B77',
                }}
                onClick={() => location.setValue('')}
              />
            )}

            <SC.ErrorMessage
              style={{
                display:
                  location.value &&
                  location.isDirty &&
                  location.locationError &&
                  'block',
              }}
            >
              Invalid input
            </SC.ErrorMessage>
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
            <SC.LabelTitle style={{ marginTop: '20px' }}>
              Add picture
            </SC.LabelTitle>
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

      <Button disabled={!isFormDataValid} actionHandler={handleSubmit}>
        {editType ? 'Save' : 'Add event'}
      </Button>
    </SC.Form>
  );
};

EventForm.propTypes = {
  editType: PropTypes.bool,
};
