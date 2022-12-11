import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './notes.scss'
function Notes() {

    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();


    //text input controllers
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');


    function addNote() {

        //creating a new note object
        const payload = {
            id: (notes.notes.length + 1),
            title: titleInput,
            body: bodyInput
        }

        //resetting the input fields
        setTitleInput('');
        setBodyInput('');

        //dispatching the action
        return dispatch({ type: 'ADD_NOTE', payload: payload });

    }

    //note component
    function NoteComponent(props) {


        return (

            <div className="note">
                <h2>{props.note.title}</h2>
                <p>{props.note.body}</p>
            </div>
        )
    }


    //returning the notes route body
    return (
        <div className="content">
            <input type="text" placeholder="title" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
            <input type="text" placeholder="body" value={bodyInput} onChange={(e) => setBodyInput(e.target.value)} />
            <button onClick={addNote}>Add Note</button>
            <h1> Preview</h1>
            <div className="notePreview">
                <h2>{titleInput}</h2>
                <p>{bodyInput}</p>
            </div>
            <h1>Notes</h1>

            {

                notes.notes.map(note => <NoteComponent note={note} key={note.id} />)

            }


        </div>
    )
}

export default Notes;