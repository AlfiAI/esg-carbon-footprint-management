import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    // Make an API call to Flask backend for user signup
    axios.post('/api/signup', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error signing up!', error);
      });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Sign Up</Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
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
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
