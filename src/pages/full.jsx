import { useEffect, useState } from "react";
import '../styles/full.css'
import { DeleteFb } from "../delete/delete";
import { UpdateFb } from "../delete/update";
import Modal2 from '../components/Modal2/modal'
import Upload from '../components/Upload/upload';
import styled from 'styled-components';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/server/notifications");
        const data = await response.json();
        setNotifications(data.notifications);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
    <div className="notifications-container">
      <h1 className="notifications-title">Lista de notificaciones enviadas</h1>
      {notifications.length === 0 ? (
        <p className="no-notifications">Espere a que carguen las notificaciones</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-card">
              <div className="notification-header">
                <h2 className="notification-message">Mensaje:</h2>
                <p className="notification-priority">Prioridad: {notification.messagePriority}</p>
              </div>
              <p className="notification-content">{notification.message}</p>
              <div className="notification-details">
                <p className="notification-professional">Profesional: {notification.professional}</p>
                <p className="notification-room">Habitación: {notification.room}</p>
              </div>
              <div className="button-container">
        <DeleteFb idDelete2={notification.id} className="delete-button" />
        <UpdateFb idDelete2={notification.id} />
        <button1 className="btn btn-primary mr-2" onClick={() => { cambiarEstadoModal1(!estadoModal1); }}>Detalles </button1>
        
        <div>
                <Modal2
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo="Notificacion"
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'center'}
                padding={'20px'}
                >
                <Contenido>
                    <Upload selectedName={notification.professional}/>
                </Contenido>
                </Modal2>
            </div>
      </div>
      
            </li>
          ))}
        </ul>
      )}
      
    </div>
</div>
  );
};

export default Notifications;


const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        vertical-align: top;
        border-radius: 3px;
    }
`;
