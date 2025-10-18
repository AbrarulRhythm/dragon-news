// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKjuiNYa6jkXgzeu08B7GiHD3FkjWK3HE",
    authDomain: "dragon-news-breaking-fbbd7.firebaseapp.com",
    projectId: "dragon-news-breaking-fbbd7",
    storageBucket: "dragon-news-breaking-fbbd7.firebasestorage.app",
    messagingSenderId: "362910746191",
    appId: "1:362910746191:web:1ca61a7ad2834dad210c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;