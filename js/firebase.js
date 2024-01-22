import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyB5488VeJdrF2JE-STlGtGBnvYm5MLicb0",
    authDomain: "web40-c4e9e.firebaseapp.com",
    projectId: "web40-c4e9e",
    storageBucket: "web40-c4e9e.appspot.com",
    messagingSenderId: "205014141461",
    appId: "1:205014141461:web:3badf45e5ae7673d3a9c1c",
    measurementId: "G-QYXN4ZYD5K"
};

export const app= initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);