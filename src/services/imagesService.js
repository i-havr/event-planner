import { myStorage } from '../firebase/config';
import { updateProfile } from 'firebase/auth';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

export const handleDeleteAvatar = async (
  avatarUri,
  setIsLoading,
  setAvatarUri
) => {
  try {
    setIsLoading(true);
    if (avatarUri.startsWith('https')) {
      await updateProfile(auth.currentUser, {
        photoURL: '',
      });

      const avatarRef = ref(myStorage, avatarUri);
      await deleteObject(avatarRef);
    }
    setAvatarUri(null);
  } catch (error) {
    console.log('handleDeleteAvatar: ', error);
  } finally {
    setIsLoading(false);
  }
};

export const uploadImageToServer = async (imageUri, prefixFolder) => {
  const uniqueImageId = Date.now().toString();

  if (imageUri) {
    try {
      const response = await fetch(imageUri);

      const file = await response.blob();

      const imageRef = await ref(myStorage, `${prefixFolder}/${uniqueImageId}`);

      await uploadBytes(imageRef, file);

      const downloadURL = await getDownloadURL(imageRef);

      return downloadURL;
    } catch (error) {
      console.log('uploadImageToServer: ', error);
    }
  }
};
