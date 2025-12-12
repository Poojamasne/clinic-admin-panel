import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetLinkSent from './pages/ResetLinkSent/ResetLinkSent';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import PasswordResetSuccess from './pages/PasswordResetSuccess/PasswordResetSuccess';
import Dashboard from './pages/Dashboard/Dashboard'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-link-sent" element={<ResetLinkSent />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;