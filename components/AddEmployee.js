// components/AddEmployee.js
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStore } from '../lib/store';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Link from 'next/link';

const AddEmployee = () => {
  const addEmployee = useStore((state) => state.addEmployee);
  const router = useRouter(); // Use the useRouter hook

  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');

  const handleAddEmployee = () => {
    const newEmployee = {
      id: Date.now(),
      name: name.trim(),
      salary: parseFloat(salary),
      age: parseInt(age, 10),
    };

    if (newEmployee.name && !isNaN(newEmployee.salary) && !isNaN(newEmployee.age)) {
      addEmployee(newEmployee);
      // Clear form fields after adding an employee
      setName('');
      setSalary('');
      setAge('');
    } else {
      alert('Please enter valid employee details.');
    }



   // navigate('/view');
   router.push('/view');
  };

  return (
    <div>
           

      <h2>Add Employee</h2>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
      <Button variant="contained" color="primary" onClick={handleAddEmployee}>
        Add Employee
      </Button>
    </div>
  );
};

export default AddEmployee;
