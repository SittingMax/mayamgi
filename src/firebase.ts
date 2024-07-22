import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA1IfGqbxBxYy24vMJ13xW4aeex9m82_is",
  authDomain: "no-7-data.firebaseapp.com",
  databaseURL: "https://no-7-data-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "no-7-data",
  storageBucket: "no-7-data.appspot.com",
  messagingSenderId: "260141707398",
  appId: "1:260141707398:web:0fb24f4be551e0d85ba107"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
