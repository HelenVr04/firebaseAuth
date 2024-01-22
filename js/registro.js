import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";


const registroForm = document.querySelector("#formRegistro");

registroForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = registroForm["correo-registro"].value;
    const password = registroForm["contrasena-registro"].value;

    console.log(`Correo: ${email}, Contraseña: ${password}`);

    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Bienvenido "+ userCredentials.user.email);
    }
    catch(error){
        //console.log(error);
        if(error.code === 'auth/email-already-in-use'){
          console.log('Coreo ya existe');
        }else if(error.code === 'auth/invalide-email'){
            console.log('Correo invalido');
        }else if(error.code === 'auth/weak-password'){
            console.log('Contraseña no valida');
        }
    }
})