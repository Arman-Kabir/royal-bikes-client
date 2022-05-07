import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBZjLKMwHBc59e5GMAIceZI79wgxIu10lA",
    authDomain: "royalbikes-76899.firebaseapp.com",
    projectId: "royalbikes-76899",
    storageBucket: "royalbikes-76899.appspot.com",
    messagingSenderId: "439669096254",
    appId: "1:439669096254:web:51c089c0eb5ba4f812b66f"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  export default auth;