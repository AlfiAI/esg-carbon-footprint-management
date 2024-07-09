import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import axios from 'axios';

const InputForm = () => {
  const [inputData, setInputData] = useState({
    electricityUsage: '',
    transportation: '',
    waste: '',
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to Flask backend for carbon footprint calculation
    axios.post('/api/calculate-carbon-footprint', inputData)
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error calculating the carbon footprint!', error);
      });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Carbon Footprint Analysis</Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="electricityUsage"
            label="Electricity Usage (kWh)"
            value={inputData.electricityUsage}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="transportation"
            label="Transportation (km)"
            value={inputData.transportation}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="waste"
            label="Waste (kg)"
            value={inputData.waste}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
            Calculate
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default InputForm;
