import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Results = ({ data }) => {
  const chartData = {
    labels: ['Electricity Usage', 'Transportation', 'Waste'],
    datasets: [
      {
        label: 'Carbon Footprint (kg CO2)',
        data: [data.electricityUsage, data.transportation, data.waste],
        backgroundColor: ['#3f51b5', '#ff5722', '#4caf50'],
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Results</Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Bar data={chartData} />
      </Paper>
    </Container>
  );
};

export default Results;
