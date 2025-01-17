// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-0C2QtVkJSDUYZGw7cikAb9Ane6TW3i4",
  authDomain: "arogya-givinghealth.firebaseapp.com",
  projectId: "arogya-givinghealth",
  storageBucket: "arogya-givinghealth.appspot.com",
  messagingSenderId: "624694382686",
  appId: "1:624694382686:android:c2871fd8a3d50bf563a4cf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
