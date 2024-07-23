import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXGq8qllTiK87fVvJ9j42kp6t7xm1j9jE",
  authDomain: "whatsapp-clone-2f58e.firebaseapp.com",
  projectId: "whatsapp-clone-2f58e",
  storageBucket: "whatsapp-clone-2f58e.appspot.com",
  messagingSenderId: "135349736346",
  appId: "1:135349736346:web:84f00a34aa83d3f089e023",
  measurementId: "G-3ZB64HTB29"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider()
  
export default db;
export {auth,provider}
  