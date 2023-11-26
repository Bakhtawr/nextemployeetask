// api/api.js
export const fetchEmployees = async () => {
    try {
      const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  };
  