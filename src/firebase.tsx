import {initializeApp}  from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAnqWkNynguLfZoctjC5BQ-V4a2VULycpw",
  authDomain: "app-8ea54.firebaseapp.com",
  projectId: "app-8ea54",
  storageBucket: "app-8ea54.firebasestorage.app",
  messagingSenderId: "914342466661",
  appId: "1:914342466661:web:067ef1855df9c5690da28c",
  databaseUrl : "https://app-8ea54-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);