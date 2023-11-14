import { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const UpdateForm = ({ id, onClose, defaultValue }) => {

    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [semester, setSemester] = useState("");

    useEffect(() => {
    if (defaultValue) {
        setName(defaultValue.name);
        setLastName(defaultValue.lastName);
        setSemester(defaultValue.semester);
    }
    }, [defaultValue]);

    const handleNameChange = (e) => {
    setName(e.target.value);
    };

    const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    };

    const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    const studentRef = doc(db, "students", id);

    try {
        await updateDoc(studentRef, {
        name,
        lastName,
        semester,
        });

        onClose();
    } catch (error) {
        console.log(error);
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="semester">Semester:</label>
        <input
            type="text"
            className="form-control"
            id="semester"
            value={semester}
            onChange={handleSemesterChange}
        />
        </div>
        <button type="submit" className="btn btn-primary">
        Save
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
        Cancel
        </button>
    </form>
    );
};

export default UpdateForm;
