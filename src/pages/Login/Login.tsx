import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


const Login: React.FC = () => {
  const [email, setEmail] = useState('admin@clinic.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Simulate login success and redirect
    setTimeout(() => {
      navigate('/dashboard'); // Redirect to dashboard after login
    }, 500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-frame">
        
        {/* Logo Section */}
        <div className="logo-wrapper">
          <img 
            src="./Logo.svg" 
            alt="Nirmal Health Care" 
            className="login-logo"
          />
        </div>

        {/* Title Section */}
        <h1 className="login-title">Sign in</h1>
        
        {/* Subtitle */}
        <p className="login-subtitle">
          Sign in to manage your clinic
        </p>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          
          {/* Email Input */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-with-icon">
              <img 
                src="/email-icon.svg" 
                alt="Email" 
                className="input-icon"
              />
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@clinic.com"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-with-icon">
              <img 
                src="/password-icon.svg" 
                alt="Password" 
                className="input-icon"
              />
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <img
                src={showPassword ? "/eye-off-icon.svg" : "/eye-icon.svg"}
                alt={showPassword ? "Hide password" : "Show password"}
                className="eye-icon"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="signin-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;