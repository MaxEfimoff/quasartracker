import * as firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyClysanwHvZ_uzJM0MjRLtqtK6MRX23OfU",
  authDomain: "quasartodo-0202.firebaseapp.com",
  databaseURL: "https://quasartodo-0202.firebaseio.com",
  projectId: "quasartodo-0202",
  storageBucket: "",
  messagingSenderId: "752501474802",
  appId: "1:752501474802:web:32d849b6ef0df925"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }