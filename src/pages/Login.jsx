import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { login, error, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Si l'utilisateur est déjà connecté, rediriger vers la page d'accueil
  if (user) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData.email, formData.password);
    if (success) {
      // Rediriger vers la page précédente ou l'accueil
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Se connecter</button>
        <p className="login-info">
          Pour tester : <br />
          Email : test@example.com<br />
          Mot de passe : password123
        </p>
      </form>
    </div>
  );
}

export default Login;