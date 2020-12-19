import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDRxGbj_q9-aEjfJgKWj9JMOc8GSETppw0",
  authDomain: "userdata-93db6.firebaseapp.com",
  databaseURL: "https://userdata-93db6-default-rtdb.firebaseio.com",
  projectId: "userdata-93db6",
  storageBucket: "userdata-93db6.appspot.com",
  messagingSenderId: "362929802825",
  appId: "1:362929802825:web:99ec5e5b0bd5135e183998",
};

// Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
