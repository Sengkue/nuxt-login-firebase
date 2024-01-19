// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBu6ucEWU8788LO7PLLr4vvELqNkiyURiU",
  authDomain: "save-money-every-day.firebaseapp.com",
  databaseURL: "https://save-money-every-day-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "save-money-every-day",
  storageBucket: "save-money-every-day.appspot.com",
  messagingSenderId: "813033211842",
  appId: "1:813033211842:web:c6bedfb8ce772395ac785b",
  measurementId: "G-9R1YLH7MQR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, sendPasswordResetEmail };
