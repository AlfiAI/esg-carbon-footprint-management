import React from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';

const Quizzes = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>Quizzes</Typography>
      {/* Placeholder for quizzes */}
      <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="body1">Question: What is the most effective way to reduce carbon footprint?</Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '8px' }}>Submit Answer</Button>
      </Paper>
    </Container>
  );
};

export default Quizzes;
