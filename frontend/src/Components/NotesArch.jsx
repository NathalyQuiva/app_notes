import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const NotesArch = () => {
  const dispatch = useDispatch();
  const [showCompo, setshowCompo] = useState(true);
  const note = useSelector((state) => state.notesArcOrUnär);
  
  const booleanStatus = (note[0].active)

  useEffect(() => {
    return () => { };
  }, [dispatch]);

  const handleCerrarClick = () => {
    setshowCompo(false);
  };

  if (!showCompo) {
    return null;
  }

  const containerStyle = {
    width: '400px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const tagStyle = {
    fontFamily: 'Georgia, serif',
    color: '#333',
    fontSize: '27px',
    fontWeight: 'bold',
    textAlign: 'center', 
  };

  const noteBoxStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
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
      {booleanStatus === true && <h1 style={noteBoxStyle} >Active Notes</h1>}
      {booleanStatus === false && <h1 style={noteBoxStyle}>Archived Notes</h1>}
      {note.map(note => (
        <div key={note.id} name= {note.id} style={noteBoxStyle}>
          <h3>{note.tittle}</h3>
          <p>{note.content}</p>
        </div>
      ))}
      {/* <button style={closeButtonStyle} onClick={handleCerrarClick}>CLOSE LIST</button> */}
    </div>
  );
}

export default NotesArch;