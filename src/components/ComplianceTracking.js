import React from 'react';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import RegulatoryUpdates from './ComplianceTracking/RegulatoryUpdates';
import Checklists from './ComplianceTracking/Checklists';
import Guides from './ComplianceTracking/Guides';

const ComplianceTracking = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Compliance Tracking</Typography>
      <Tabs value={value} onChange={handleChange} aria-label="compliance tracking tabs">
        <Tab label="Regulatory Updates" />
        <Tab label="Checklists" />
        <Tab label="Guides" />
      </Tabs>
      <Box mt={2}>
        {value === 0 && <RegulatoryUpdates />}
        {value === 1 && <Checklists />}
        {value === 2 && <Guides />}
      </Box>
    </Container>
  );
};

export default ComplianceTracking;
