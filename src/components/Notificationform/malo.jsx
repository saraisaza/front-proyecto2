import React from "react";
import "../Notificationform/notification.css";
import { useState } from "react";

const NotificationForm = ({ selectedName, cambiarEstado }) => {
  console.log(selectedName)
  const [isSaved, setIsSaved] = useState(false);
  // los nuevos hooks que tengo q hacer 
  const [message, setMessage] = useState('');
  const [floor, setFloor] = useState('');
  const [tower, setTower] = useState('');
  const [room, setRoom] = useState('');
  const [bed, setBed] = useState('');
  //OPCIONES QUE MANDA CLINICA CES 
  const towerToFloorOptions = {
    "1": ["3", "4"],
    "2": ["3", "4"],
    "3": ["3", "4", "5"],
  };
  const towerAndFloorToRoomOptions = {
     "1-3": [ "315", "316", "3171", "3172", "318", "319", "320", "321", "322", "323", "324", "325", "3261", "3262", "3271", "3272", "3281", "3282", "3291", "3292", "3301", "3302", "3311", "3312" ],
     "1-4":  [ "418", "419", "420", "421", "4221", "4222", "4231", "4232", "4241", "4242", "4251", "4252", "426", "4271", "4272", "4281", "4282", "4291", "4292", "4301", "4302", "4311", "4312", "4321", "4322", "4331" ],
     "2-3": ["1", "2"],
     "2-4": ["1", "2"],
    "3-3": ["4"],
    "3-4": ["1", "2"],
    "3-5": ["1", "2"],
    
  };
  const handleButtonClick = async () => {
    setIsSaved(true);
    const data = {
      professional,
      message,
      floor,
      tower,
      room,
      bed,
    };
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    const url = 'http://localhost:4000/api/v1/server/notification';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      });
      if (response.status === 200) {
        console.log('Notification sent successfully');
        cambiarEstado(false)
        alert("Noticación enviada satisfactoriamente")
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'professional':
        setProfessional(selectedName);
        break;
      case 'message':
        setMessage(value);
        break;
      case 'floor':
        setFloor(value);
        break;
      case 'tower':
        setTower(value);
        break;
      case 'room':
        setRoom(value);
        break;
      default:
        break;
    }
    setIsSaved(false);
  };
  

  return (
    <div className="container">
      <form onSubmit={handleButtonClick}>
        <div className="kindMessages">
          <h3>¿Qué mensaje desea enviar?</h3>
          <div className="card">
            <input
              type="radio"
              name="messagePriority"
              value="1"
              onChange={handleInputChange}
            />
            <p className="icon1">Prioridad grado 1</p>
            <p>Rango de respuesta entre 5 - 15 minutos</p>
          </div>
          <div className="card">
            <input
              type="radio"
              name="messagePriority"
              value="2"
              onChange={handleInputChange}
            />
            <p className="icon2">Prioridad grado 2</p>
            <p>Rango de respuesta entre 15 - 60 minutos</p>
          </div>
          <div className="card">
            <input
              type="radio"
              name="messagePriority"
              value="3"
              onChange={handleInputChange}
            />
            <p className="icon3">Prioridad grado 3</p>
            <p>Rango de respuesta entre 1 - 2 horas</p>
          </div>
        </div>
        <div className="location">
          <div className="info">
            <label>Mensaje predeterminado</label>
            <select
              name="defaultMessage"
              value={message}
              onChange={handleInputChange}
            >
            
              <option>Seleccionar...</option>
              <option>Corrección de laboratorios y ayudas diagnosticas</option>
              <option>Ordenamientos de laboratorios y ayudas diagnosticas no ordenadas</option>
              <option>Indicaciones al alta (incapacidad, orden medica etc.)</option>
              <option>Realización de interconsultas</option>
              <option>Valoración de pacientes</option>
              <option>Corrección medicamentos mal formulados</option>
              <option>Renovación de medicamentos</option>
              <option>Ingreso de paciente de UCI</option>
              <option>Autorización de hemoderivados</option>
              <option>Traslado de pacientes a UAD</option>
              <option>Revisión de laboratorios de control</option>
              <option>Asistencia en aspirados de medula ósea</option>
              <option>OTRO</option>
            </select>
          </div>
        </div>
        <div className="location">
        <div className="info">
            <label>Torre</label>
            <select
              name="tower"
              value={tower}
              onChange={handleInputChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="info">
          <label>Piso</label>
<select
  name="floor"
  value={floor}
  onChange={handleInputChange}
>
  {(towerToFloorOptions[tower] || ["1", "2", "3"]).map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

          </div>
          <div className="info">
          <label>Habitación</label>
<select
  name="room"
  value={room}
  onChange={handleInputChange}
>
  {(towerAndFloorToRoomOptions[`${tower}-${floor}`] || ["1", "2", "3"]).map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>
          </div>
        </div>
        <button onClick={handleButtonClick}>Enviar notificación</button>
      </form>
    </div>
  );
};

export default NotificationForm;
