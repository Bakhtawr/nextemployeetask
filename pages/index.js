// pages/index.js
import React from 'react';
import Link from 'next/link';
import AddEmployee from '../components/AddEmployee';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import emp from './employee.jpg';

const Home = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <h1 style={{textAlign: 'center', color : '#1976d2'}}>Employee Management System</h1>
      <AppBar position="static" style={{marginBottom: 30}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>    
          <Typography>
          <Link href="/add" style={{color: 'white', textDecoration : 'none', paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}> Add Employee </Link> 
            </Typography>      
            <Typography>
            <Link href="/edit/id" style={{color: 'white', textDecoration : 'none', paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}> Edit Employee </Link> 
            </Typography>
            <Typography>
            <Link href="/view" style={{color: 'white', textDecoration : 'none', paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}> View Employees</Link>
          </Typography>         
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Container>


    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
        <AddEmployee />
        </Grid>
        <Grid xs={12} md={4} style={{marginTop: 70, textAlign: 'center'}}>
        <Image
      src={emp}     
      alt="Picture of the employee"/>
        </Grid>
      </Grid>
    </Box>
      </Container>
   
  
 
    </div>
  );
};

export default Home;
