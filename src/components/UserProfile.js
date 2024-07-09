import React from 'react';
import { Container, Typography } from '@mui/material';

const UserProfile = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>User Profile</Typography>
      <Typography variant="body1">Manage your user profile and view your activities.</Typography>
    </Container>
  );
};

export default UserProfile;
