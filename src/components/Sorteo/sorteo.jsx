import { collection, deleteDoc, doc,  getDocs,updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import React from "react";

const Sorteo = async () => {
    const usersRef = collection(db, "students");
    const snapshot = await getDocs(usersRef);
    const participantes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    const randomPosicion = Math.floor(Math.random() * participantes.length);

//para cambiar el value de false a true 
    const ganadorId = doc(db, "students", participantes[randomPosicion].id);
    await updateDoc(ganadorId, { winner: true });

    return participantes[randomPosicion];
    };

export default Sorteo;