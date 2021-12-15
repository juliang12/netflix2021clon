import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3f0tMM39SgBwL4SIsjmY55leRZ9T0TjY",
  authDomain: "netflixapp-1f41d.firebaseapp.com",
  projectId: "netflixapp-1f41d",
  storageBucket: "netflixapp-1f41d.appspot.com",
  messagingSenderId: "1086011001169",
  appId: "1:1086011001169:web:e61217d22b2d2dcb2c6b70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };
