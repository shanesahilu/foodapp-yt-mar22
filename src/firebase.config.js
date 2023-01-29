import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAYgQprnJ_vet-vIDAYnEguXddYK7otpJ8",
    authDomain: "mlrit-canteen.firebaseapp.com",
    databaseURL: "https://mlrit-canteen-default-rtdb.firebaseio.com",
    projectId: "mlrit-canteen",
    storageBucket: "mlrit-canteen.appspot.com",
    messagingSenderId: "995509731407",
    appId: "1:995509731407:web:1f9a7af79e9ae22855ea3a",
    measurementId: "G-CZ7543VE0M"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };