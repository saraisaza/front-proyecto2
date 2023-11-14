import React, { useEffect, useState } from "react";
import { DeleteFb } from "../../delete/delete";
import { UpdateFb } from "../../delete/update";

import "../Upload/upload.css"; // Import the CSS file

const Upload = ({ selectedName }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [notification, setNotification] = useState(null);
  const [id2, setId2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsSaved(true);
      const url = new URL("http://localhost:4000/api/v1/server/lastnotification");
      url.search = new URLSearchParams({ professional: selectedName }).toString();

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          console.log("Notification sent successfully");
          const data = await response.json();
          setNotification(data.notification);
          setId2(data.notification.id);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedName]);

  return (
    <div className="upload-container">
      <h2>Detalles:</h2>
      {notification ? (
        <ul>
          <li key={notification.id}>
            <h3>Mensaje:</h3>
            <p>{notification.message}</p>
            <p>Profesional: {notification.professional}</p>
            <p>Prioridad: {notification.messagePriority}</p>
            <p>Habitación: {notification.room}</p>
            <p>Pieza: {notification.room}</p>
            <p>Piso: {notification.floor}</p>
            <p>Completado: {notification.completedDesktop}</p>
          </li>
        </ul>
      ) : (
        <p>...Cargando...</p>
      )}
      
      <div className="button-container">
        <DeleteFb idDelete2={id2} className="delete-button" />
        <UpdateFb idDelete2={id2} />
      </div>
    </div>
  );
};

export default Upload;
