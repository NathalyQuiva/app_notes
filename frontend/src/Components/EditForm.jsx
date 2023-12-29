import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, createNote, updateNote } from "../Redux/actions/actions";


const EditForm = () => {
    const dispatch = useDispatch();
    const editNote = useSelector((state) => state.editNote);
    const [error, setError] = useState('');
    
    const [noteInformation, setNoteInformation] = useState({
        id: editNote,
        tittle: "",
        content: ""
    })

    function handleChange(event) {
        setNoteInformation({
            ...noteInformation,
            [event.target.name]: event.target.value
        });
        setError('');
    }


    function onSubmit(event) {
        event.preventDefault();
        if (!noteInformation.tittle) {
            setError('El campo "Title" no puede estar vacío.');
            return;
          }

        setNoteInformation({
            id: editNote,
            tittle: "",
            content: ""
        })
        dispatch(updateNote(noteInformation));
    }

    const formContainerStyle = {
        width: '400px',
        margin: 'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#fff',
    };

    const formHeaderStyle = {
        textAlign: 'center',
        color: '#333',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const submitButtonStyle = {
        backgroundColor: '#4CAF50',  // Cambiado a verde
        color: '#fff',
        padding: '10px',
        borderRadius: '4px',
        marginTop: '10px',
        cursor: 'pointer',
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={formHeaderStyle}>EDIT NOTE</h2>
            <form style={formStyle} onSubmit={onSubmit}>
                <label htmlFor="tittle">Title:</label>
                <input id="tittle" type="text" name="tittle" value={noteInformation.tittle}
                    onChange={handleChange}/>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <label htmlFor="content">Description:</label>
                <input id="content" type="text" name="content" value={noteInformation.content}
                    onChange={handleChange} required />
                <button onClick={onSubmit}>Edit Note</button>
            </form>
        </div>
    );
}

export default EditForm;