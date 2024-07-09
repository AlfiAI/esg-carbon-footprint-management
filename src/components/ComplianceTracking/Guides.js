import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Guides = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>Guides</Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="body1">Follow these guides to stay compliant with environmental standards.</Typography>
        {/* Placeholder for guides */}
      </Paper>
    </Container>
  );
};

export default Guides;
