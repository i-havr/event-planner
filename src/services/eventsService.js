import { db } from '../firebase/config';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

import { uploadImageToServer } from './imagesService';

// export const getCurrentUserComment = async (
//   userId,
//   postId,
//   commentId,
//   setIsCurrentUserComment
// ) => {
//   try {
//     const commentRef = doc(db, 'posts', postId, 'comments', commentId);
//     const commentSnap = await getDoc(commentRef);

//     if (commentSnap.data().userId === userId) {
//       setIsCurrentUserComment(true);
//     } else {
//       setIsCurrentUserComment(false);
//     }
//   } catch (error) {
//     console.log('getCurrentUserComment', error);
//   }
// };

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
  } catch (error) {
    console.log('uploadEventToServer: ', error.message);
  }
};
