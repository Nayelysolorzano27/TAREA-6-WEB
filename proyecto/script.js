document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validar los campos (aquí podrías agregar tus propias validaciones)

    // Mostrar un mensaje de éxito
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '<p>Registro exitoso para ' + nombre + ' ' + apellido + '. ¡Bienvenido!</p>';
});
