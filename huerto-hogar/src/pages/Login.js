import React, { useState } from 'react';
import './Login.css';
import '../styles/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    correo: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
      });
      const result = await response.json();
      if (!result.success) {
        setError(result.message);
      } else {
        window.location.href = '/';
      }
    } catch (err) {
      setError('Error en la solicitud');
    }
  };

  return (
    <div className="box">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <label htmlFor="correo">
            <i className="fas fa-envelope"></i> Correo:
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">
            <i className="fas fa-lock"></i> Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>
        <p id="error-message">{error}</p>
      </div>
      <div className="register-container">
        <h2>¿Eres nuevo en Huerto Hogar?</h2>
        <p>Al registrarte, podrás agilizar tu proceso de compra. Edita tus datos, añade varias direcciones, revisa y realiza un seguimiento de tus pedidos, y mucho más.</p>
        <a href="/register" style={{ backgroundColor: '#2E8B57', padding: '8px 15px', borderRadius: '20px', color: 'white' }}>Registrarse</a>
      </div>
    </div>
  );
};

export default Login;
