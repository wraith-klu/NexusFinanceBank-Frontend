import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // persist username for dashboard greeting
    try {
      localStorage.setItem('bank_username', formData.username || '');
    } catch (err) {
      /* ignore storage errors */
    }
    // TODO: replace with real auth logic
    // on successful login redirect to user home
    navigate('/user', { replace: true });
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <div>Internet Banking</div>
        <div>❓ FAQs</div>
        <div>Language</div>
      </header>

      <main className="auth-main">
        <div className="auth-box">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <a href="#" className="forgot-link">Forgot your username?</a>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <a href="#" className="forgot-link">Forgot your password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="register-prompt">
            <p>Not registered yet? Make the most of your day by banking online with ABC Bank Internet Banking</p>
            <Link to="/register" className="register-btn">Register Now</Link>
          </div>
        </div>
      </main>

      <footer className="auth-footer">
        <div>🔒 Safe</div>
        <div>🌐 Anywhere, Anytime</div>
        <div>⏳ No More Waiting</div>
      </footer>
    </div>
  );
}

export default Login;