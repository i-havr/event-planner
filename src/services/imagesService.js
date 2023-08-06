import { myStorage } from '../firebase/config';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

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

export const deleteImage = async imageUri => {
  try {
    const imageRef = ref(myStorage, imageUri);
    await deleteObject(imageRef);

    return true;
  } catch (error) {
    console.log('deletePicture: ', error);
  }
};
