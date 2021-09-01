import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

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

// export const auth = firebase.auth();
// export const db = firebase.database();
// export default firebase;

const auth = firebase.auth();
const db = firebase.database();

export { firebase, auth }