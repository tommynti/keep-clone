import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(note);
    setNotes(pNotes => {
     return [...pNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((pNotes) => {
     return pNotes.filter((note, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {notes.map((note , index) => {
        return <Note
        key={index}  // the same as id because 'key' is required
        id={index}
        title={note.title} 
        content={note.content} 
        onDelete={deleteNote}  />
      })}
      <Footer />
    </div>
  );
}

export default App;
