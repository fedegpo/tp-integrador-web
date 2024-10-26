let images = ["images/file (1).png", "images/bike-2.webp", "images/file (2).png","images/bike-3.png","images/file (3).png", "images/file (4).png", "images/file (5).png", "images/file (6).png", "images/file (7).png", "images/file (8).png", "images/file (9).png", "images/file (10).png", "images/bici-1.png"];
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

//Validaciones
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    const errorList = document.getElementById('errorList');
    const resultado = document.getElementById('resultado');
    errorList.innerHTML = '';
    resultado.style.display = 'none';

    const nombre = document.getElementById('nombre').value;
    if (!nombre || !/^[a-zA-Z\s]{1,20}$/.test(nombre)) {
        const li = document.createElement('li');
        li.textContent = '*Debe contener menos de 20 caracteres.';
        errorList.appendChild(li);
        document.getElementById('nombre').classList.add('error');
        valid = false;
    } else {
        document.getElementById('nombre').classList.remove('error');
    }

    const telefono = document.getElementById('telefono').value;
    if (!telefono || !/^\+549[0-9]{10}$/.test(telefono)) {
        const li = document.createElement('li');
        li.textContent = '*Ingrese un número telefónico válido.';
        errorList.appendChild(li);
        document.getElementById('telefono').classList.add('error');
        valid = false;
    } else {
        document.getElementById('telefono').classList.remove('error');
    }

    const email = document.getElementById('email').value;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        const li = document.createElement('li');
        li.textContent = '*Ingrese un correo electrónico válido.';
        errorList.appendChild(li);
        document.getElementById('email').classList.add('error');
        valid = false;
    } else {
        document.getElementById('email').classList.remove('error');
    }

    const mensaje = document.getElementById('mensaje').value;
    /*if (!mensaje) {
        const li = document.createElement('li');
        li.textContent = '*Debe agregar un mensaje.';
        errorList.appendChild(li);
        document.getElementById('mensaje').classList.add('error');
        valid = false;
    } else {
        document.getElementById('nombre').classList.remove('error');
    }*/


    if (!valid) {
        return;
    }

    resultado.innerHTML = `
        <h3>Datos ingresados:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Correo Electronico:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        `;

    resultado.style.display = 'block';
    document.getElementById('contactForm').reset();
});