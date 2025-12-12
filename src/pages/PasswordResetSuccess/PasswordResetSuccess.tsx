import React from 'react';
import { Link } from 'react-router-dom';
import './PasswordResetSuccess.css';

const PasswordResetSuccess: React.FC = () => {
  return (
    <div className="confirm-container">
      <div className="confirm-frame">
        
        {/* Logo Section */}
        <div className="logo-wrapper">
          <img 
            src="/logo.svg" 
            alt="Nirmal Health Care" 
            className="confirm-logo"
          />
        </div>

        {/* Title Section */}
        <h1 className="confirm-title">Password Reset Successfully!</h1>

        {/* Success Content */}
        <div className="success-content">
          
          {/* Success Icon with Checkmark */}
          <div className="success-icon">
            <svg className="checkmark" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>

          {/* Success Message */}
          <div className="success-message">
            <p className="success-text">
              Your password has been reset successfully.<br />
              You can now log in with your new password.
            </p>
          </div>

          {/* Back to Login Button */}
          <Link to="/login" className="login-button">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;