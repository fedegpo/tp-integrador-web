let images = ["images/file (1).png", "images/bike-2.webp", "images/file (2).png","images/bike-3.png","images/file (3).png", "images/file (7).png"];
let currentIndex = 0;

function showImage(index) {
    document.getElementById('carousel-image').src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    if (validarEmail(email) && validarTelefono(telefono) && validarNombre(nombre)) {
        let result = `¡Gracias por su mensaje! Recibimos los siguientes datos: Nombre y Apellido: ${nombre}, Correo: ${email}, Teléfono: ${telefono}, Mensaje: ${mensaje}`;
        document.getElementById('form-result').textContent = result;
        document.getElementById('form-result').style.color = 'green';
    } else {
       /* document.getElementById('nombreError').style.display = 'block';
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('telefonoError').style.display = 'block';
        /*Limpiar formulario
        nombre.value="";
        email.value="";
        telefono.value="";
        mensaje.value="";*/
        
        document.getElementById('form-result').textContent = 'Error en los datos ingresados.';
        document.getElementById('form-result').style.color = 'red';
    }
    

});

function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarTelefono(telefono) {
    let regex = /^[0-9]{10}$/;
    return regex.test(telefono);
}

function validarNombre(nombre) {
    let regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,50}$/;
    return regex.test(nombre);
}