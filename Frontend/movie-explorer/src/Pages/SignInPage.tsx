import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import API from '../utils/api';
import { Credentials as LoginCredentials } from '../types/auth';

const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      const res = await API.post('/auth/signin', credentials);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', credentials.username);
      navigate('/'); // redirect to homepage or dashboard
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return <LoginForm onLogin={handleLogin} error={error} />;
};

export default LoginPage;
