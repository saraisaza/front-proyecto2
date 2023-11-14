import Sorteo from "../Sorteo/sorteo";
import styled from 'styled-components';
import React, { useState } from "react";

function Boton() {
  const [winner, setWinner] = useState(null);

  const handleButtonClick = async () => {
    const result = await Sorteo();
    setWinner(result);
    console.log("El ganador es:", result.name);
    alert(`El ganador es: ${result.name}`);
  };

  return (
    <Container>
      <CuteButton onClick={handleButtonClick}>Sortear ganador</CuteButton>
      <SpacedComponent></SpacedComponent>
      {winner && <p>El ganador es: {winner.name}</p>}
    </Container>
  );
}

export default Boton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CuteButton = styled.button`
  background-color: rgba(1, 3, 3, 0.7);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1.2rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  }
`;

const SpacedComponent = styled.div`
  margin: 20px 0;
`;
