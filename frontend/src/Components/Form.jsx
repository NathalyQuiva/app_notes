import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, createNote } from "../Redux/actions/actions";


const Form = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const [noteInformation, setNoteInformation] = useState({
    tittle: "",
    content: "",
    categoryId: ""
  })

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch]);

  function handleChange(event) {
    setNoteInformation({
      ...noteInformation,
      [event.target.name]: event.target.value
    })
  }

  function handleSelect(event){
    handleChange(event);
    setNoteInformation(
      {
       ...noteInformation,
       categoryId:event.target.value
      }
    )
  }

  function onSubmit(event) {
    event.preventDefault();
    dispatch(createNote(noteInformation));
    setNoteInformation({
      tittle: "",
      content: "",
      categoryId: ""
    })
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
      <h2 style={formHeaderStyle}>CREATE NOTE</h2>
      <form style={formStyle} onSubmit={onSubmit}>
        <label htmlFor="tittle">Tittle:</label>
        <input id="tittle" type="text" name="tittle" value={noteInformation.tittle}
          onChange={handleChange} required/>

        <label htmlFor="content">Description:</label>
        <input id="content" type="text" name="content" value={noteInformation.content}
          onChange={handleChange} required/>

        <label> 
        Select the category:
          <select onChange={handleSelect}>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
              ))
            }
          </select>
        </label>

        <button onClick={onSubmit}>Create Note</button>
      </form>
    </div>
  );
}

export default Form;