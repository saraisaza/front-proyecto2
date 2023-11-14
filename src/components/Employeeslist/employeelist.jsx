import React, { useState, useEffect } from 'react';
import '../Employeeslist/employeelist.css';

function EmployeeList() {
  const [selectedName, setSelectedName] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = new URL("http://localhost:4000/api/v1/server/employeelist");
    url.search = new URLSearchParams().toString();

    try {
      const response = await fetch(url, {
        method: "GET",
      });

      if (response.status === 200) {
        console.log("Notification sent successfully");
        const data = await response.json();
        setNames(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  return (
    <div className="select-container">
  <select value={selectedName} onChange={handleNameChange}>
    <option value="">SELECCIONAR </option>
    {names.sort().map((name, index) => (
      <option key={index} value={name}>{name}</option>
    ))}
  </select>
</div>

  );
}

export default EmployeeList;

