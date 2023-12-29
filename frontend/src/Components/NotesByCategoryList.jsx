import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const NotesByCategory = () => {
  const dispatch = useDispatch();
  const [showCompo, setshowCompo] = useState(true);
  const notesOfCategory = useSelector((state) => state.notesOfCategory);

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
      {notesOfCategory.map(note => (
        <div key={note.id} style={noteBoxStyle}>
          <h3>{note.tittle}</h3>
          <p>{note.content}</p>
        </div>
      ))}
      <button style={closeButtonStyle} onClick={handleCerrarClick}>CLOSE LIST</button>
    </div>
  );
}

export default NotesByCategory;