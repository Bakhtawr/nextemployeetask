// components/EmployeeList.js
import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import { useStore } from '../lib/store';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import profile from './Untitled.png';

const EmployeeList = () => {
  const employees = useStore((state) => state.employees);
  const deleteEmployee = useStore((state) => state.deleteEmployee);
  const router = useRouter(); // Use the useRouter hook


  const handleEdit = (employeeId) => {
   
    router.push(`/edit/${employeeId}`);
  };

  const handleDelete = (id) => {
    deleteEmployee(id);
  };

  return (
    <div>
   <AppBar position="static" style={{marginBottom: 30}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>    
          <Typography>
          <h2>Employee List</h2>
            </Typography>      
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Button><Link href='/'>Home</Link></Button>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Profile</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>  <Image src={profile} width={60} height={60} alt="Picture of the employee"/></TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.salary}</TableCell>
              <TableCell>{employee.age}</TableCell>
              <TableCell>
                <Button onClick={() => handleDelete(employee.id)}>Delete</Button>
                <Button onClick={() => handleEdit(employee.id)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeeList;
