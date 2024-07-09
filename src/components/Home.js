import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to ESG Management Platform
      </Typography>
      <Typography variant="body1">
        Manage your environmental, social, and governance responsibilities efficiently.
      </Typography>
    </Container>
  );
};

export default Home;
