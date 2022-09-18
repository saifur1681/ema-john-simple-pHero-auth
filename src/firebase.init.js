// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIU18zB3Vw1GMR0CQGjQ6V-fceO35LiTI",
    authDomain: "ema-john-simple-phero-53.firebaseapp.com",
    projectId: "ema-john-simple-phero-53",
    storageBucket: "ema-john-simple-phero-53.appspot.com",
    messagingSenderId: "874170851072",
    appId: "1:874170851072:web:febbc0599c966f9e391de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;