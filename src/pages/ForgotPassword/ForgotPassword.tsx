
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('admin@clinic.com');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
    
    setTimeout(() => {
      navigate('/reset-link-sent');
    }, 500);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-frame">
       
        <div className="logo-wrapper">
          <img 
            src="/logo.svg" 
            alt="Nirmal Health Care" 
            className="forgot-logo"
          />
        </div>

        
        <h1 className="forgot-title">Forgot Password?</h1>

        
        <p className="forgot-description">
          Enter your email address and we'll send you a<br />
          link to reset your password
        </p>

        
        <div className="forgot-inner-frame">
          <form className="forgot-form" onSubmit={handleSubmit}>
            
            <div className="forgot-form-group">
              <label className="forgot-form-label">Email Address</label>
              <div className="forgot-input-with-icon">
                <img 
                  src="/email-icon.svg" 
                  alt="Email" 
                  className="input-icon"
                />
                <input
                  type="email"
                  className="forgot-form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@clinic.com"
                  required
                />
              </div>
            </div>

            <button type="submit" className="send-reset-btn">
              Send Reset Link
            </button>

            
            <Link to="/login" className="back-to-login-link">
              Back To Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
