import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorageService from '../services/LocalStorageService';
import './Register.css';
import '../styles/register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiar mensajes cuando el usuario empiece a escribir
    if (error) setError('');
    if (success) setSuccess('');
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) {
      throw new Error('El nombre es obligatorio');
    }
    if (!formData.apellido.trim()) {
      throw new Error('El apellido es obligatorio');
    }
    if (!formData.correo.trim()) {
      throw new Error('El correo electrónico es obligatorio');
    }
    if (!formData.correo.includes('@') || !formData.correo.includes('.')) {
      throw new Error('Por favor, ingresa un correo electrónico válido');
    }
    if (formData.password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres');
    }
    if (formData.password !== formData.confirmPassword) {
      throw new Error('Las contraseñas no coinciden');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validar formulario
      validateForm();

      // Preparar datos del usuario
      const userData = {
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        correo: formData.correo.trim().toLowerCase(),
        password: formData.password
      };

      // Registrar usuario usando localStorage
      const result = LocalStorageService.registerUser(userData);
      
      if (result.success) {
        setSuccess('¡Usuario registrado exitosamente! Redirigiendo al login...');
        
        // Limpiar formulario
        setFormData({
          nombre: '',
          apellido: '',
          correo: '',
          password: '',
          confirmPassword: ''
        });

        // Redirigir al login después de 2 segundos
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      setError(err.message || 'Error al registrar usuario');
    } finally {
      setLoading(false);
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
          minLength="6"
          required
        />
        <br />
        <label htmlFor="confirmPassword">
          <i className="fas fa-lock"></i> Confirmar Contraseña:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          minLength="6"
          required
        />
        <br />
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
      {error && <p id="error-message" style={{color: 'red', marginTop: '10px'}}>{error}</p>}
      {success && <p id="success-message" style={{color: 'green', marginTop: '10px'}}>{success}</p>}
    </div>
  );
};

export default Register;
