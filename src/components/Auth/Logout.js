import React from 'react';
import { Container, Button, Typography } from '@mui/material';

const Logout = () => {
  const handleLogout = () => {
    // Remove the JWT token
    localStorage.removeItem('token');
    console.log('Logged out successfully');
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Logout</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Logout;
