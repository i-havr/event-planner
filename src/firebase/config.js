import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCEJzmBGZdpEvEgjmYKG-SRzXzJtAchnQo',
  authDomain: 'event-planner-3df4a.firebaseapp.com',
  databaseURL:
    'https://event-planner-3df4a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'event-planner-3df4a',
  storageBucket: 'event-planner-3df4a.appspot.com',
  messagingSenderId: '403563806083',
  appId: '1:403563806083:web:12fa6eb05059acfd948ab6',
  measurementId: 'G-8YK0D0SGJY',
};

export const app = initializeApp(firebaseConfig);

export const myStorage = getStorage(app);
export const db = getFirestore(app);
