// components/EditEmployee.js
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../lib/store';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';




const EditEmployee = () => {
  const { id } = useParams();
  const employees = useStore((state) => state.employees);
  const updateEmployee = useStore((state) => state.updateEmployee);
    //  const navigate = useNavigate();
     const router = useRouter(); // Use the useRouter hook

  const [newName, setNewName] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const [newAge, setNewAge] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };


  useEffect(() => {
    const selectedEmployee = employees.find((employee) => employee.id === parseInt(id));
    
    if (selectedEmployee) {
      setNewName(selectedEmployee.name);
      setNewSalary(selectedEmployee.salary.toString());
      setNewAge(selectedEmployee.age.toString());
      
    }
  }, [employees, id]);

  const handleUpdateEmployee = () => {
    const updatedEmployee = { 
      id: parseInt(id),
      name: newName.trim(),
      salary: parseFloat(newSalary),
      age: parseInt(newAge, 10),
      setSelectedImage
    };
    updateEmployee(updatedEmployee);
    router.push('/view');
   // navigate('/view');
  };

  return (
    <div>
       <AppBar position="static" style={{marginBottom: 30}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>    
          <Typography>
          <h2>Edit Employee</h2>
            </Typography>      
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Button><Link href='/'>Home</Link></Button>
      <TextField
        label="Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Salary"
        value={newSalary}
        onChange={(e) => setNewSalary(e.target.value)}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Age"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
        margin="normal"
        variant="outlined"
        fullWidth
      />
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
    
      <Button variant="contained" color="primary" onClick={handleUpdateEmployee}>
        Update Employee
      </Button>
    </div>
  );
};

export default EditEmployee;
