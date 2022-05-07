import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPBTED_WRM0tjbpta-VUg4nFUCkFGHkLI",
  authDomain: "instapets-a12eb.firebaseapp.com",
  projectId: "instapets-a12eb",
  storageBucket: "instapets-a12eb.appspot.com",
  messagingSenderId: "41406871388",
  appId: "1:41406871388:web:b7dab69953d4e84671b399",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);