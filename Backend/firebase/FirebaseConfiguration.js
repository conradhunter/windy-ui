// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAYy2dN11ZM7kER-3LLuf8jXVb0SCjp0pw',
  authDomain: 'windikit-300d6.firebaseapp.com',
  projectId: 'windikit-300d6',
  storageBucket: 'windikit-300d6.appspot.com',
  messagingSenderId: '874575329675',
  appId: '1:874575329675:web:93a0c17f3fd5b83fadd78e',
  measurementId: 'G-5JPE2VFCX4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
