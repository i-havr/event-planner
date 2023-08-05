import { useState, useRef, useEffect } from 'react';
import { uploadEventToServer } from '../../services';
import { OptionsSelector } from '../OptionsSelector';
import { Button } from '../Button';
import { TimePicker } from '../TimePicker';
import { categoryTypes, priorityLevels } from '../../assets';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { ReactComponent as CrossIcon } from '../../assets/icons/cross-icon.svg';
import * as SC from './CreateNewEventForm.styled';

export const CreateNewEventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [pictureUri, setPictureUri] = useState('');
  const [priority, setPriority] = useState('');
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setTimePickerOpen] = useState(false);

  const datePickerRef = useRef(null);
  const timePickerLabelRef = useRef(null);
  const timePickerRef = useRef(null);

  useEffect(() => {
    console.log(isTimePickerOpen);

    if (datePickerRef.current) {
      datePickerRef.current.setOpen(isDatePickerOpen);
    }
  }, [isDatePickerOpen, isTimePickerOpen]);

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

      case 'time':
        setTime(value);
        break;

      case 'location':
        setLocation(value);
        break;

      case 'category':
        setCategory(value);
        break;

      case 'priority':
        setPriority(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    uploadEventToServer(
      title,
      description,
      date,
      time,
      location,
      category,
      pictureUri,
      priority
    );
  };

  const handleCalendarClose = event => {
    if (event.target.textContent === 'Cancel') {
      setDate('');
    }

    if (datePickerRef.current) {
      setDatePickerOpen(false);
    }
  };

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

  const handleTimePickerToggle = () => {
    if (timePickerLabelRef.current) {
      setTimePickerOpen(true);
    }
  };

  return (
    <SC.Form autoComplete="off">
      <SC.Label>
        <SC.LabelTitle>Title</SC.LabelTitle>
        <SC.Input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder="Input"
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
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
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
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
        <SC.DatePickerWrapper>
          <SC.DatePick
            ref={datePickerRef}
            type="text"
            name="date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            placeholderText={!isDatePickerOpen ? 'Input' : 'Select Date'}
            input={true}
            onChange={date => setDate(new Date(date))}
            onCalendarClose={() => setDatePickerOpen(false)}
            onCalendarOpen={() => setDatePickerOpen(true)}
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
          </SC.DatePick>
        </SC.DatePickerWrapper>
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
          value={time}
          onChange={handleInputChange}
          placeholder="Input"
          readOnly
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
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
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
        />
        {location && (
          <CrossIcon
            style={{ right: '12px', top: '40px', cursor: 'pointer' }}
            onClick={() => setLocation('')}
          />
        )}
      </SC.Label>

      <OptionsSelector
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
          <SC.InputFilePlaceholder style={{ color: pictureUri && '#6BD475' }}>
            {pictureUri ? 'File has been chosen' : 'Select'}
          </SC.InputFilePlaceholder>
        </SC.LabelFile>
        {pictureUri && <CrossIcon onClick={() => setPictureUri('')} />}
      </SC.InputFileWrapper>

      <OptionsSelector
        options={priorityLevels}
        title="Priority"
        setOption={setPriority}
      />

      <Button actionHandler={handleSubmit}>Add event</Button>
    </SC.Form>
  );
};
