import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './notes.scss'
import { Await } from "react-router-dom";
import { resolveTo } from "@remix-run/router";


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



    async function fetchNotes() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        //console.log(response);
        const json = await response.json();

        return json;
    }

    async function printFetched() {

        fetchNotes().then((r) => { console.log(r) })

    }

    //add a random note with useEffect
    useEffect(

        () => printFetched, []
    )

    //note component
    function NoteComponent(props) {


        return (

            <div className="note">
                <h2>{props.note.title}</h2>
                <p>{props.note.body}</p>
            </div>
        )
    }

    function TodoComponent(props) {
        return (
            <div className="todo">
                //create a checkbox
                <input type="checkbox" />
                //create a label
                <label>{props.todo.title}</label>
                //create a delete button
                <button>Delete</button>
                //create a edit button
                <button>Edit</button>
                //create a save button
                <button>Save</button>

                <h2>{props.todo.title}</h2>
                <p>{props.todo.body}</p>
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