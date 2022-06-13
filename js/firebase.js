// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADagITjhBFpQD0c__coRoscTbgxpF0iu8",
    authDomain: "videojuegocesde.firebaseapp.com",
    projectId: "videojuegocesde",
    storageBucket: "videojuegocesde.appspot.com",
    messagingSenderId: "694736016453",
    appId: "1:694736016453:web:160088b7c08ea62ebb3f2c",
    measurementId: "G-6BNE5EFCNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);