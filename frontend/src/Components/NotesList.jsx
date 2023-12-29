import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes, deleteNote, emptyNotes, editNote, changeStatus } from "../Redux/actions/actions";
import { useState } from 'react';
import EditForm from './EditForm';


const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const [showCompo, setshowCompo] = useState(true);
  const [editNoteId, setEditNoteId] = useState(null);

  function editHandle(event) {
    const id = event.target.value;
    setEditNoteId(id);
    dispatch(editNote(id));
  };

  function onSubmitDelete(event) {
    event.preventDefault();
    const id = event.target.value
    dispatch(deleteNote(id))
  };

  useEffect(() => {
    dispatch(getAllNotes());
    return () => { };
  }, [dispatch]);

  const handleCerrarClick = () => {
    setshowCompo(false);
  };

  if (!showCompo) {
    return null;
  }

  function statusHandle(event) {
    const string = event.target.value;
    const spacePlace = string.indexOf(' ');
    const id = parseInt(string.slice(0, spacePlace));
    const activeBoolean = string.slice(spacePlace + 1)
    dispatch(changeStatus(id, activeBoolean));
  }

  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
  };

  const noteBoxStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  };

  const buttonStyle = {
    marginLeft: '10px',
    padding: '8px 12px',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  };

  const closeButtonStyle = {
    marginTop: '20px',
    padding: '8px 12px',
    borderRadius: '4px',
    backgroundColor: '#ff0000',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {notes.map(note => (
        <div key={note.id} style={noteBoxStyle}>
          <h3>{note.tittle}</h3>
          <p>{note.content}</p>
          {note.active == true && <p>Status: Unarchive</p>}
          <div style={buttonContainerStyle}>
            {!editNoteId && <button name={note.id} value={`${note.id} ${note.active}`} style={buttonStyle} onClick={statusHandle}>CHANGE STATUS</button>}
            {!editNoteId && <button name={note.tittle} value={note.id} style={buttonStyle} onClick={editHandle}>EDIT</button>}
            {editNoteId == note.id && <EditForm />}
            {!editNoteId && <button style={buttonStyle} onClick={onSubmitDelete} name={note.id} value={note.id} >DELETE</button>}
          </div>
        </div>
      ))}
      <button style={closeButtonStyle} onClick={handleCerrarClick}
      >CLOSE NOTE LIST</button>
    </div>
  );
};

export default Notes;
