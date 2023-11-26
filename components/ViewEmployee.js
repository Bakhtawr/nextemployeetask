// components/ViewEmployee.js
import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useStore } from '../lib/store';

const ViewEmployee = () => {
  const employees = useStore((state) => state.employees);
  const deleteEmployee = useStore((state) => state.deleteEmployee);

  const handleDelete = (id) => {
    deleteEmployee(id);
  };

  return (
    <div>
        
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.salary}</TableCell>
              <TableCell>{employee.age}</TableCell>
              <TableCell> <img src={employee.profileImage} alt="Profile" style={{ maxWidth: '50px', maxHeight: '50px' }} /></TableCell>
              <TableCell>
                <Button onClick={() => handleDelete(employee.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewEmployee;
