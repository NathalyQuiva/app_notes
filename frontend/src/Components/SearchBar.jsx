import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, searchByCategory, notesActives, renderNotes } from "../Redux/actions/actions";


const SearchBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const toggleNew = useSelector((state) => state.toggleNew);

  const handleToggle = () => {
    const toggle = !toggleNew;
    dispatch(renderNotes(toggle));
  };

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch]);

  function handleSelect(event) {
    const catId = event.target.value;
    dispatch(searchByCategory(catId))
  }

  function handleArchive(event) {
    const boolean = event.target.value
    dispatch(notesActives(boolean))
  }

  const searchBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#fff',
  };

  const labelStyle = {
    marginRight: '10px',
    fontWeight: 'bold',
  };

  const selectStyle = {
    padding: '8px',
    borderRadius: '4px',
    marginRight: '10px',
  };

  const buttonStyle2 = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease'
  };

  return (
    <div style={searchBarStyle}>
      <div>
        {toggleNew === false && <button style={buttonStyle2} onClick={handleToggle}>SEE ALL NOTES</button>}
        {toggleNew === true && <button style={buttonStyle2} onClick={handleToggle}>CLOSE LIST</button>}
      </div>
      <label style={labelStyle}>A
      rchive/Unarchive Notes:</label>
      <select onChange={handleArchive} style={selectStyle}>
        <option value="false" >Archived Notes</option>
        <option value="true">Actives Notes</option>
      </select>

      <label style={labelStyle}>Filter Notes by Category:</label>
      <select onChange={handleSelect} style={selectStyle}>
        {categories.map(category => (
          <option key={category.id} name={category.name} value={category.id}>
            {category.name}
          </option>
        ))
        }
      </select>
    </div>
  );
};

export default SearchBar;
