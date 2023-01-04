import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA2kL42-YCWeRgE6rATgEMORVAWg_TIy88",
  authDomain: "windy-ui.firebaseapp.com",
  projectId: "windy-ui",
  storageBucket: "windy-ui.appspot.com",
  messagingSenderId: "473907934341",
  appId: "1:473907934341:web:03cb0b26ceff6f73c6a5ec",
  measurementId: "G-4KDWZ2TBZF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, db, storage, analytics };
