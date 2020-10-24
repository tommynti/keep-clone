import React, { useState } from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [extended , setExtended] = useState(false);

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(pNote => {
      return {
        ...pNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();   // kathe fora poy patas to buttn se mia form kanei refresh to page , me auth th grammh to apotrepoume
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  function extend() {
    setExtended(true);
  }

  return (
    <div>
      <form className="create-note">
      {extended && 
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
      }
        <textarea name="content" onClick={extend} onChange={handleChange} value={note.content} placeholder="Take a note..." rows={extended ? 3 : 1} />
      <Zoom in={extended}>       
        <Fab onClick={submitNote}> {/* Fab = floating action button */}
          <NoteAddIcon />
        </Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
