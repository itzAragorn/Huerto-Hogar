const loginForm = document.getElementById('login-form');
const errorMessageLogin = document.getElementById('error-message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        correo: document.getElementById('correo').value,
        password: document.getElementById('password').value,
    };

    try {
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data)
        });

        const result = await res.json();

        if (!result.success) {
            errorMessageLogin.textContent = result.message;
        } else {
            window.location.href = '/';
        }
    } catch (err) {
        errorMessageLogin.textContent = 'Error en la solicitud';
    }
});