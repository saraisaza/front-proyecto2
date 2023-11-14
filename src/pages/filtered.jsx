import EmployeeList from '../components/Employeeslist/employeelist';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import Modal2 from '../components/Modal2/modal'
import Upload from '../components/Upload/upload';



//SE QUITO ESTA PAGINA
function Filtered() {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [selectedName, setSelectedName] = useState('');
    return (
        <div>
            <div>
                <button className="btn btn-primary mr-2" onClick={() => { cambiarEstadoModal1(!estadoModal1); }}>Última notificación enviada </button>
                <h1>Lista del personal médico</h1>
                <EmployeeList setSelectedName={setSelectedName} />
            </div>
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
                    <Upload selectedName={selectedName} />
                </Contenido>
                </Modal2>
            </div>
        </div>
    );
}

export default Filtered;

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
