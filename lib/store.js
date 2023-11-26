// lib/store.js
import create from 'zustand';

const useStore = create((set) => ({
  employees: [],
  addEmployee: (employee) => set((state) => ({ employees: [...state.employees, employee] })),
  updateEmployee: (updatedEmployee) => set((state) => ({
    employees: state.employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    ),
  })),
  deleteEmployee: (id) => set((state) => ({
    employees: state.employees.filter((employee) => employee.id !== id),
  })),
}));

export { useStore };
