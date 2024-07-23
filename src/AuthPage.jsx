// src/AuthPage.js
import React, { useState } from 'react';
import './AuthPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here
      toast.success('Login successful!');
    } else {
      // Handle signup logic here
      if (password !== confirmPassword) {
        toast.error('Passwords do not match!');
        return;
      }
      toast.success('Signup successful!');
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-form">
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            {!isLogin && (
              <input 
                type="password" 
                placeholder="Confirm password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            )}
            <button className="auth-button" type="submit">
              {isLogin ? 'Login' : 'Signup'}
            </button>
          </form>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span className="auth-toggle" onClick={toggleAuth}>
              {isLogin ? 'Signup' : 'Login'}
            </span>
          </p>
          <div className="auth-separator">Or</div>
          <button className="social-button facebook">Login with Facebook</button>
          <button className="social-button google">Login with Google</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AuthPage;
