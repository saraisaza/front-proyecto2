import React, { useState } from 'react';
import '../Inputform/inputform.css'

const IssueForm = ({ onSubmit }) => {
    const initialStateValues = {
        problema: '',
        descripcion: '',
    };
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(values);
        const url = 'http://localhost:4000/api/v1/server/send-email';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });
            if (response.status === 200) {
                console.log('Email successfully sent!');
                setValues(initialStateValues);
                onSubmit();
            }
        } catch (error) {
            console.error('Failed to send email. Error: ', error);
        }
    };
    

    return (
        <form className='card card-body' onSubmit={handleSubmit}>
            <div className='form-group input-group'>
                <input
                    type='text'
                    className='form-control'
                    name='problema'
                    onChange={handleInputChange}
                    value={values.problema}
                    placeholder='Problema'
                />
            </div>
            <div className='form-group input-group'>
            <input
    className='form-control'
    name='descripcion'
    onChange={handleInputChange}
    value={values.descripcion}
    placeholder='Descripción'
/>

            </div>
            <button className="btn btn-primary" style={{ marginTop: '10px' }}>
                Enviar reporte
            </button>
        </form>
    );
};

export default IssueForm;
