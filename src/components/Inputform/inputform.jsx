import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import '../Inputform/inputform.css'

const InputForm = ({ onSubmit }) => {
    const initialStateValues = {
    name: '',
    function: '',
    specialized: '',
    watch_id: false, 
    };
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value, watch_id: false});
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(db, 'proffesionals'), {...values, watch_id: false });
        console.log('Document written with ID: ', docRef.id);
        console.log('Guardado');
        setValues(initialStateValues);
        onSubmit();
    } catch (error) {
        console.error('Error adding document: ', error);
    }
    };

    return (
    <form className='card card-body' onSubmit={handleSubmit}>
        <div className='form-group input-group'>
        <input
            type='text'
            className='form-control'
            name='name'
            onChange={handleInputChange}
            value={values.name}
            placeholder='Nombre completo'
        />
        </div>
        <div className='form-group input-group'>
        <input
            type='text'
            name='function'
            onChange={handleInputChange}
            value={values.function}
            placeholder='Servicio'
        />
        </div>
        <div className='form-group input-group'>
        <input
            type='text'
            name='specialized'
            onChange={handleInputChange}
            value={values.specialized}
            placeholder='Especialidad'
        />
        </div>
        <button style={{ marginTop: '10px' }}>
    Guardar
</button>

    </form>
    );
};

export default InputForm;
