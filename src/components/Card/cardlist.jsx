import { collection, deleteDoc, doc,  getDocs, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import React from "react";
import styled from 'styled-components';
import UpdateForm from "../Updateform/updateform";
import Modal from '../Modal/modal.jsx'
import "../Card/cardStyles.css"

const CardList = () => {
    const [lista, setLista] = useState([]);
    const [subId, setSubId] = useState('');
    const [userInfo, setUserInfo] = useState({})
    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    useEffect(() => {
    const getLista = async() => {
        try {
        const docs = [];
        const querySnapshot = await getDocs(collection(db, 'students'));
        querySnapshot.docs.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id });
        });
        setLista(docs);
        } catch (error) {
        console.log(error);
        }
    };
    getLista();
    }, [lista]);

    const deleteUser = async(id) => {
    await deleteDoc(doc(db, "students", id))
    }

    const getOne = async(id) => {
        try {
            const docRef = doc(db, 'usuarios', id);
            const docSnap = await getDoc(docRef);
            setUsuario(docSnap.data())
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if(subId !== ''){
            getOne(subId)
        }
    }, [subId])

    return (
    <div className="container">
        <div className="row">
        {
            lista.map(list => (
            <div key={list.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{list.name} {list.lastName}</h5>
                    <p className="card-text">Telefono: {list.semester}</p>
                    <p className="card-text">Ganador: {list.winner.toString()}</p>
                    <button className="btn btn-primary mr-2" onClick={() => {setSubId(list.id);setUserInfo(list); cambiarEstadoModal1(!estadoModal1);}}>Actualizar</button>
                    <button className="btn btn-danger" onClick= {()=> deleteUser(list.id)}>Eliminar</button>
                </div>
                </div>
            </div>
            ))
        }
        </div>
        <div>
        <Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Actualizar"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido >
            <UpdateForm id = {subId} defaultValue={userInfo}/>
				</Contenido>
			</Modal>
            </div>
    </div>
    
    );
};

export default CardList;




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