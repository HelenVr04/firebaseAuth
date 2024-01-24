/*document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        // Si no está autenticado, redirige a index.html
        window.location.href = '../index.html';
    }


});*/

document.getElementById('logoutButton').addEventListener('click', function () {
    // Eliminar el indicador de sesión del almacenamiento local
    localStorage.removeItem('isLoggedIn');
    alert('Cerrar sesion');

    // Redirigir a la página de inicio de sesión (index.html)
    window.location.href = '../index.html';
});