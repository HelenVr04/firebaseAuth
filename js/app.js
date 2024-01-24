import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
//import { getAuth } from "./firebase.js";

const loginForm = document.querySelector("#formLogin");

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = loginForm["correo"].value;
    const password = loginForm["contrasena"].value;

    console.log(`Correo: ${email}, Contraseña: ${password}`);

    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log("Bienvenido "+ userCredentials.user.email);
        window.location.href = "principal.html";
    }
    catch(error){
        console.log(error);
        if(error.code === 'auth/invalid-login-credentials'){
          console.log('DATOS INCORRECTOOOOS:v');
        }
        
    }
})

document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
      window.location.href = 'principal.html';
  }
});

/*import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const loginForm = document.querySelector("#formLogin");

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = loginForm["correo"].value;
    const password = loginForm["contrasena"].value;

    console.log(`Correo: ${email}, Contraseña: ${password}`);

    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log("Bienvenido "+ userCredentials.user.email);
        window.location.href = "principal.html";
    }
    catch(error){
        console.log(error);
        if(error.code === 'auth/invalid-login-credentials'){
          console.log('DATOS INCORRECTOOOOS toco soportar :v');
        }
        
    }
})

// Function for cerrar sesión
function logoutUser() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Signed out successfully");
      sessionStorage.removeItem('lastLogin'); // Remove the last login timestamp from session storage
      window.location.href = "/index.html"; // Redirect to homepage
    })
    .catch((error) => {
      // An error happened.
      console.error("Error signing out: ", error);
    });
}

// Wait for the HTML document to finish loading before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", logoutUser);
});

*/
/*import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
//import { getAuth, signOut } from "./firebase.js";

//function loginUser(){

const loginForm = document.querySelector("#formLogin");

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = loginForm["correo"].value;
    const password = loginForm["contrasena"].value;

    console.log(`Correo: ${email}, Contraseña: ${password}`);

    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log("Bienvenido "+ userCredentials.user.email);
        window.location.href = "principal.html";
    }
    catch(error){
        console.log(error);
        if(error.code === 'auth/invalid-login-credentials'){
          console.log('DATOS INCORRECTOOOOS toco soportar :v');
        }
        
    }
})


// Función para cerrar sesión
function logoutUser() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Signed out successfully");
      window.location.href = "/index.html"; // Redirect to homepage
    })
    .catch((error) => {
      // An error happened.
      console.error("Error signing out: ", error);
    });
}

const logoutButton = document.querySelector("#logout-button");
logoutButton.addEventListener("click", logoutUser);*/