import './App.css';
import Form from './Components/Form'
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import NotesList from './Components/NotesList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import NotesByCategory from './Components/NotesByCategoryList';
import NotesArch from './Components/NotesArch';

function App() {
  const notesCat = useSelector((state) => state.notesOfCategory);
  const noteArc = useSelector((state) => state.notesArcOrUnär);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const mainContentStyle = {
    flex: 1,
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease'
  };

  const centeredButton = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <div className="App" style={appStyle}>
      <Header />
      <div style={mainContentStyle}>
        <SearchBar />
        {noteArc.length > 0 && <NotesArch />}
        {notesCat.length > 0 && <NotesByCategory />}
        <div style={centeredButton}>
          <button style={buttonStyle} onClick={handleToggle}>SEE ALL NOTES</button>
        </div>
        {toggle && <NotesList />}
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
