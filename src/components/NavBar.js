import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ESG Management
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/educational-modules">Educational Modules</Button>
        <Button color="inherit" component={Link} to="/carbon-footprint-analysis">Carbon Footprint Analysis</Button>
        <Button color="inherit" component={Link} to="/compliance-tracking">Compliance Tracking</Button>
        <Button color="inherit" component={Link} to="/user-profile">Profile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
