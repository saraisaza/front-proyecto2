import React, { useState, useEffect } from 'react';
import '../Employeeslist/lista_sola.css';

function EmployeeList2() {
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
        setNames(data); // Update the names state with the fetched list
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="employee-list">
      {names.map((name, index) => (
        <div key={index} className="employee-item1">
          <div className="employee-card">
            {name}
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default EmployeeList2;
