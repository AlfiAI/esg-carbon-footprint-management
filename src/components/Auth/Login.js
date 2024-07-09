import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to Flask backend for user login
    axios.post('/api/login', formData)
      .then(response => {
        console.log(response.data);
        // Save the JWT token
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
      });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
