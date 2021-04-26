 import firebase from 'firebase'

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyBLXnvM2l9H9qhYa5lJGZ2Zy7ADh4udP1U",
    authDomain: "login-3d51f.firebaseapp.com",
    projectId: "login-3d51f",
    storageBucket: "login-3d51f.appspot.com",
    messagingSenderId: "274900106702",
    appId: "1:274900106702:web:2d47c29e0936988336bf9f"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;