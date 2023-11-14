import EmployeeList from '../components/Employeeslist/employeelist';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import NotificationForm from "../../src/components/Notificationform/notificationform"


const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
`;

function NotificationList() {
  const [selectedName, setSelectedName] = useState('');
  const [selectedId, setSelectedId] = useState('');

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
    const info = names.find((doc)=>doc.name == event.target.value)
    setSelectedName(info.name);
    setSelectedId(info.id)
  };

   
      
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Enviar notificación</h1>
        <Title>Elegir profesional</Title>
      </div>
      <div className="select-container">
        <select value={selectedName} onChange={handleNameChange}>
          <option value="">SELECCIONAR</option>
          {names.map((value, index) => (
            <option key={index} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
      {selectedName && (
        <NotificationForm selectedName={selectedName} selectedId = {selectedId} />
      )}
    </div>
  );
}

export default NotificationList;

