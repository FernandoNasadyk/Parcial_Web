function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !asunto || !mensaje) {
        alert('Por favor completá todos los campos.');
        return false;
    }

    const respuesta = document.getElementById('respuesta');
    respuesta.innerText = `Gracias ${nombre} por contactarte por ${asunto}. Te responderemos pronto.`;

    return true;
}

function calcularDescuento() {
    const porcentaje = document.getElementById('descuento').value;
    const precioOriginal = 4000;
    const precioFinal = precioOriginal - (precioOriginal * (porcentaje / 100));
    document.getElementById('precio-final').innerText = `Precio con descuento: $${precioFinal.toFixed(2)}`;
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
