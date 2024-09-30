let images = ["images/bike.png", "images/bike-2.webp", "images/bike-3.png"];
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

    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    if (validarEmail(email) && validarTelefono(telefono)) {
        let result = `Correo: ${email}, Teléfono: ${telefono}, Mensaje: ${mensaje}`;
        document.getElementById('form-result').textContent = result;
        document.getElementById('form-result').style.color = 'green';
    } else {
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
