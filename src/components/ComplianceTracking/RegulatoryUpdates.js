import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import axios from 'axios';

const RegulatoryUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios.get('/api/regulatory-updates')
      .then(response => {
        setUpdates(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the regulatory updates!', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Regulatory Updates</Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        {updates.map((update, index) => (
          <Typography key={index} variant="body1">{update}</Typography>
        ))}
      </Paper>
    </Container>
  );
};

export default RegulatoryUpdates;
