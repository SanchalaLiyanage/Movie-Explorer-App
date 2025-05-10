import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper } from '@mui/material';
import type { Credentials } from '../types/auth';

interface LoginFormProps {
  onLogin: (credentials: Credentials) => void;
  error?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, error }) => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: 'auto', mt: 10 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Movie Explorer Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Box mt={2}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default LoginForm;
