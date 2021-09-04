import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD41ocZYgAojWegeNf6-v-z5hmTVdAKdus",
  authDomain: "nwitter-477fa.firebaseapp.com",
  databaseURL: "https://nwitter-477fa-default-rtdb.firebaseio.com",
  projectId: "nwitter-477fa",
  storageBucket: "nwitter-477fa.appspot.com",
  messagingSenderId: "621862957734",
  appId: "1:621862957734:web:4af243679ad75963317a67"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, auth, db, storage }