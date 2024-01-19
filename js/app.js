// app.js

// Importar el módulo de autenticación de Firebase
const auth = firebase.auth();

// Función para iniciar sesión
function loginUser() {
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
}

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
}

