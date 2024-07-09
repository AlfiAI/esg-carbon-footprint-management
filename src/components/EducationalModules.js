import React from 'react';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import Quizzes from './EducationalModules/Quizzes';
import Videos from './EducationalModules/Videos';
import Articles from './EducationalModules/Articles';
import Infographics from './EducationalModules/Infographics';

const EducationalModules = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Educational Modules</Typography>
      <Tabs value={value} onChange={handleChange} aria-label="educational modules tabs">
        <Tab label="Quizzes" />
        <Tab label="Videos" />
        <Tab label="Articles" />
        <Tab label="Infographics" />
      </Tabs>
      <Box mt={2}>
        {value === 0 && <Quizzes />}
        {value === 1 && <Videos />}
        {value === 2 && <Articles />}
        {value === 3 && <Infographics />}
      </Box>
    </Container>
  );
};

export default EducationalModules;
