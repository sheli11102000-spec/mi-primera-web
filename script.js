document.addEventListener('DOMContentLoaded', () => {
    // 1. Resaltar el menú activo
    const links = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // 2. Alerta de formulario de contacto
    const form = document.getElementById('form-contacto');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito. Nos contactaremos pronto.`);
            form.reset();
        });
    }
});