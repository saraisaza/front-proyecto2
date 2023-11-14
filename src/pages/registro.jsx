import React, { useState } from 'react';
import InputForm from '../components/Inputform/inputform';
import EmployeeList2 from '../components/Employeeslist/lista_sola';

const Registro = () => {
    const [formKey, setFormKey] = useState(0);

    const handleSubmit = () => {
    setFormKey((prevKey) => prevKey + 1);
    };

    return (
    <div>
        <h1 style={{ textAlign: "center" }}>Registrar profesional</h1>
        <InputForm onSubmit={handleSubmit} key={formKey} />
        <h2 style={{ textAlign: "center" }}>Profesionales registrados</h2>
        <EmployeeList2 />
    </div>
    );
};

export default Registro;
