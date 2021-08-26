// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBerb7MPqPrx5vEEpe5ruXAImdN4xfUSDs",
  authDomain: "full-clone-699fe.firebaseapp.com",
  projectId: "full-clone-699fe",
  storageBucket: "full-clone-699fe.appspot.com",
  messagingSenderId: "585708223096",
  appId: "1:585708223096:web:dd3e1c336a175ed487cb8d",
  measurementId: "G-MV2YG6PLS5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};