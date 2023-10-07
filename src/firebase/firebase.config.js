// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfaFWo0CnYJygATK-R3VabbyD0RpDjLGo",
  authDomain: "react-event-manager-9a950.firebaseapp.com",
  projectId: "react-event-manager-9a950",
  storageBucket: "react-event-manager-9a950.appspot.com",
  messagingSenderId: "891640810070",
  appId: "1:891640810070:web:4134d72c38bf565aff89f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
