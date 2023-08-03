import { useState } from 'react';
import { uploadEventToServer } from '../../services';
import { Button } from '../Button';
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

      case 'date':
        setDate(value);
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

    console.log('click handleSubmit');

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
          required
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
          required
        />
        {description && (
          <CrossIcon
            style={{ right: '12px', top: '40px', cursor: 'pointer' }}
            onClick={() => setDescription('')}
          />
        )}
      </SC.Label>

      <SC.Label>
        <SC.LabelTitle>Select date</SC.LabelTitle>
        <SC.Input
          type="text"
          name="date"
          value={date}
          onChange={handleInputChange}
          placeholder="Input"
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
          required
        />
      </SC.Label>

      <SC.Label>
        <SC.LabelTitle>Select time</SC.LabelTitle>
        <SC.Input
          type="text"
          name="time"
          value={time}
          onChange={handleInputChange}
          placeholder="Input"
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
          required
        />
      </SC.Label>

      <SC.Label>
        <SC.LabelTitle>Location</SC.LabelTitle>
        <SC.Input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Input"
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
          required
        />
        {location && (
          <CrossIcon
            style={{ right: '12px', top: '40px', cursor: 'pointer' }}
            onClick={() => setLocation('')}
          />
        )}
      </SC.Label>

      <SC.Label>
        <SC.LabelTitle>Category</SC.LabelTitle>
        <SC.Input
          type="text"
          name="category"
          value={category}
          onChange={handleInputChange}
          placeholder="Input"
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
          required
        />
      </SC.Label>

      <SC.InputFileWrapper>
        <SC.LabelTitle>Add picture</SC.LabelTitle>
        <SC.LabelFile>
          <SC.Input
            type="file"
            name="picture"
            onChange={handleFileInputChange}
            placeholder="Input"
            accept="image/*,.png,.jpg,.jpeg,.webp"
            required
            style={{ display: 'none' }}
          />
          <SC.InputFilePlaceholder style={{ color: pictureUri && '#6BD475' }}>
            {pictureUri ? 'The file has been chosen' : 'Input'}
          </SC.InputFilePlaceholder>
        </SC.LabelFile>
        {pictureUri && <CrossIcon onClick={() => setPictureUri('')} />}
      </SC.InputFileWrapper>

      <SC.Label style={{ marginBottom: '40px' }}>
        <SC.LabelTitle>Priority</SC.LabelTitle>
        <SC.Input
          type="text"
          name="priority"
          value={priority}
          onChange={handleInputChange}
          placeholder="Input"
          pattern="^[a-zA-Zа-яА-Я0-9]+(?:[ ,-](?:[a-zA-Zа-яА-Я0-9]+['’]?[a-zA-Zа-яА-Я0-9]*)*)*$"
          required
        />
      </SC.Label>
      <Button actionHandler={handleSubmit}>Add event</Button>
    </SC.Form>
  );
};
