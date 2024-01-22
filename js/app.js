import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

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
    }
    catch(error){
        console.log(error);
        if(error.code === 'auth/invalid-login-credentials'){
          console.log('DATOS INCORRECTOOOOS toco soportar :v');
        }
    }
})
/*
  var email = document.getElementById("correo").value;
  var password = document.getElementById("contrasena").value;

  console.log(`correo: ${email}, contraseña: ${password}`);

  auth.signInWithEmailAndPassword(email, password)
    .then((success) => {
      console.log("Inicio de sesión exitoso");
    })
    .catch((error) => {
      console.error("Error al iniciar sesión", error.message);
    });
//}

// Función para cerrar sesión
function logoutUser() {
  firebase.auth().signOut()
    .then(() => {
      // Se cerró sesión exitosamente
      alert('Cerrar sesión')
      console.log("Cierre de sesión exitoso");
      window.location.replace("/index.html");
    })
    .catch((error) => {
      // Si hay un error, manejarlo adecuadamente
      console.error("Error al cerrar sesión", error.message);
      // Puedes mostrar un mensaje de error al usuario aquí
    });
}*/



