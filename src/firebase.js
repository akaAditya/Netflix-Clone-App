import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
require('dotenv').config()

// const firebaseConfig = {
//     apiKey: "AIzaSyAQfz6fyyCIgVwuVAAgRHZXhSOjg-IJaMw",
//     authDomain: "netflix-clone-app-b2664.firebaseapp.com",
//     projectId: "netflix-clone-app-b2664",
//     storageBucket: "netflix-clone-app-b2664.appspot.com",
//     messagingSenderId: "1020769500787",
//     appId: "1:1020769500787:web:e2b62c45ff1fc2dd3fb406"
//   };

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-clone-app-tst.firebaseapp.com",
  projectId: "netflix-clone-app-tst",
  storageBucket: "netflix-clone-app-tst.appspot.com",
  messagingSenderId: "1062231454290",
  appId: "1:1062231454290:web:83ab7a4362a8445d00a58b"
};


  const firbaseApp = firebase.initializeApp(firebaseConfig);
  const db = firbaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;