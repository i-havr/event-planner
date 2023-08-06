import { db } from '../firebase/config';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';

import { uploadImageToServer } from './imagesService';

export const uploadEventToServer = async (
  title,
  description,
  date,
  time,
  location,
  category,
  pictureUri,
  priority
) => {
  const uniqueEventId = Date.now().toString();

  try {
    const downloadURL = await uploadImageToServer(pictureUri, 'eventsImages');

    const createEvent = doc(db, 'events', uniqueEventId);

    await setDoc(createEvent, {
      title,
      description,
      date,
      time,
      location,
      category,
      downloadURL,
      priority,
      createdAt: uniqueEventId,
    });

    return true;
  } catch (error) {
    console.log('uploadEventToServer: ', error.message);
  }
};

export const deleteEvent = async eventId => {
  try {
    const eventRef = await doc(db, 'events', eventId);
    await deleteDoc(eventRef);

    return true;
  } catch (error) {
    console.log('deleteEvent: ', error);
  }
};

export const editEvent = async (eventId, newData) => {
  try {
    const eventRef = await doc(db, 'events', eventId);
    await setDoc(eventRef, newData, { merge: true });

    return true;
  } catch (error) {
    console.log('editEvent: ', error);
  }
};
