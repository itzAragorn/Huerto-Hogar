import React, { useState } from 'react';
import './Register.css';
import '../styles/register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
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
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
      });
      const text = await response.text();
      if (!response.ok) {
        setError(text);
      } else {
        alert(text);
        window.location.href = '/login';
      }
    } catch (err) {
      setError('Error en la solicitud');
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form id="register-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          <i className="fas fa-user"></i> Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="apellido">
          <i className="fas fa-user"></i> Apellido:
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <br />
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
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
        <button type="submit">Registrarse</button>
      </form>
      <p id="error-message">{error}</p>
    </div>
  );
};

export default Register;
