const form = document.getElementById('register-form');
const errorMessage = document.getElementById('error-message');


form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    
    const data = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        correo: document.getElementById('correo').value,
        password: document.getElementById('password').value,
    };

    try {
        
        const res = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data)
        });

        const text = await res.text();

        if (!res.ok) {
            errorMessage.textContent = text; 
        } else {
            alert(text); 
            window.location.href = 'login.html'; 
        }
    } catch (err) {
        errorMessage.textContent = 'Error en la solicitud';
        console.error(err);
    }
});
