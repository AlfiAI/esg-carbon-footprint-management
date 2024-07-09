import React, { useState } from 'react';
import { Container } from '@mui/material';
import InputForm from './CarbonFootprintAnalysis/InputForm';
import Results from './CarbonFootprintAnalysis/Results';

const CarbonFootprintAnalysis = () => {
  const [resultData, setResultData] = useState(null);

  const handleResultData = (data) => {
    setResultData(data);
  };

  return (
    <Container>
      <InputForm onResult={handleResultData} />
      {resultData && <Results data={resultData} />}
    </Container>
  );
};

export default CarbonFootprintAnalysis;
