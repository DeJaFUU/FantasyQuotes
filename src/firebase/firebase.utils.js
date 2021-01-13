import firebase from 'firebase/app';
import 'firebase/database'

  const config = {
    apiKey: "AIzaSyCbFsLKu-JyQAZre8d6aOzogY4g5bNM0H8",
    authDomain: "quotemachine-11fb8.firebaseapp.com",
    databaseURL: "https://quotemachine-11fb8.firebaseio.com",
    projectId: "quotemachine-11fb8",
    storageBucket: "quotemachine-11fb8.appspot.com",
    messagingSenderId: "1087004134639",
    appId: "1:1087004134639:web:78d9a6f50980c81796df1a",
    measurementId: "G-1Q8X2M4NNM"
  }
  
  firebase.initializeApp(config);

  export const database = firebase.database();
  
  export default firebase;