import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors
    
    // Validate passwords match
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Validate password requirements
    if (!validatePassword(newPassword)) {
      setErrorMessage('Password does not meet all requirements!');
      return;
    }

    // Handle password reset logic here
    console.log('Password reset with:', newPassword);
    
    // Redirect to success page after successful reset
    setTimeout(() => {
      navigate('/password-reset-success');
    }, 500);
  };

  const validatePassword = (password: string) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    return Object.values(requirements).every(Boolean);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const getPasswordRequirements = (password: string) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
  };

  const requirements = getPasswordRequirements(newPassword);

  return (
    <div className="reset-password-container">
      <div className="reset-password-frame">
        {/* Logo */}
        <div className="logo-wrapper">
          <img 
            src="/logo.svg" 
            alt="Nirmal Health Care" 
            className="reset-password-logo"
          />
        </div>

        {/* Title */}
        <h1 className="reset-password-title">Reset Password</h1>

        {/* Description */}
        <p className="reset-password-description">
          Create a new password for your account
        </p>

        {/* Error Message */}
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form className="reset-password-form" onSubmit={handleSubmit}>
          {/* New Password Field */}
          <div className="form-group">
            <label className="form-label">New Password</label>
            <div className="input-with-icon">
              <img 
                src="/password-icon.svg" 
                alt="Password" 
                className="input-icon"
              />
              <input
                type={showNewPassword ? "text" : "password"}
                className="form-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
              />
              <img
                src={showNewPassword ? "/eye-off-icon.svg" : "/eye-icon.svg"}
                alt={showNewPassword ? "Hide password" : "Show password"}
                className="eye-icon"
                onClick={toggleNewPasswordVisibility}
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="input-with-icon">
              <img 
                src="/password-icon.svg" 
                alt="Password" 
                className="input-icon"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
              />
              <img
                src={showConfirmPassword ? "/eye-off-icon.svg" : "/eye-icon.svg"}
                alt={showConfirmPassword ? "Hide password" : "Show password"}
                className="eye-icon"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
          </div>

          {/* Password Requirements */}
          <div className="password-requirements">
            <h3 className="requirements-title">Password requirements</h3>
            <ul className="requirements-list">
              <li className={requirements.length ? 'requirement-met' : 'requirement-not-met'}>
                {requirements.length ? '✓' : '○'} At least 8 characters
              </li>
              <li className={requirements.uppercase ? 'requirement-met' : 'requirement-not-met'}>
                {requirements.uppercase ? '✓' : '○'} Contains uppercase letter
              </li>
              <li className={requirements.lowercase ? 'requirement-met' : 'requirement-not-met'}>
                {requirements.lowercase ? '✓' : '○'} Contains lowercase letter
              </li>
              <li className={requirements.number ? 'requirement-met' : 'requirement-not-met'}>
                {requirements.number ? '✓' : '○'} Contains number
              </li>
              <li className={requirements.special ? 'requirement-met' : 'requirement-not-met'}>
                {requirements.special ? '✓' : '○'} Contains special character
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <button type="submit" className="reset-password-btn">
            Reset Password
          </button>

          {/* Back to Login Link */}
          {/* <Link to="/login" className="back-to-login-link">
            Back To Login
          </Link> */}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;