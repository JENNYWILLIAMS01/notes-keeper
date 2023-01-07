import './App.css';
import { useState } from 'react';
import Footer from './keeper/Footer';
import Header from './keeper/Header';
import Note from './keeper/Note';
import NoteTaker from './keeper/NoteTaker';

function App() {
  const [myNotes, setMyNotes] = useState([])

  const putNotes = (note) => {
    setMyNotes(prevNoteList => {
      return [...prevNoteList, note]
    })
  }
  const removeNote = (noteId) =>{
    setMyNotes(prevNoteList => {
      return (
        prevNoteList.filter((note, index) => {
          return index !== noteId
        })
      )
    })
  }
  return (
    <div>
      <Header />
      <NoteTaker addNotes={putNotes}/>
      <div className='notes-display'>
      {myNotes.map((note, index) => {
        return <Note id={index} title={note.title} content={note.content} removeNote={removeNote} />
      })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
