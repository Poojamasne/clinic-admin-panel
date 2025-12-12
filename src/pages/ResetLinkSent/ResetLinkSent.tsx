import React from 'react';
import { Link } from 'react-router-dom';
import './ResetLinkSent.css';

const ResetLinkSent: React.FC = () => {
  const email = "kshitij.sornwanshi2001@gmail.com";

  return (
    <div className="reset-container">
      <div className="reset-frame">
        
        <div className="logo-wrapper">
          <img 
            src="/logo.svg" 
            alt="Nirmal Health Care" 
            className="reset-logo"
          />
        </div>

        
        <h1 className="reset-title">Forgot Password?</h1>

        
        <p className="reset-description">
          We've send you reset link on your email address<br />
          link to reset your password
        </p>

        
        <div className="email-icon-container">
          <img 
            src="/email-sent-icon.svg"
            alt="Email Sent" 
            className="email-icon"
          />
        </div>

        
        <h2 className="check-email-title">Check Your Email</h2>


        <div className="confirmation-message">
          <h3 className="confirmation-title">We've sent a password reset link</h3>
          <p className="confirmation-email">to {email}</p>
        </div>

      </div>
    </div>
  );
};

export default ResetLinkSent;