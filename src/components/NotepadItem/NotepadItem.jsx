import React from 'react';
import { Link } from 'react-router-dom';
import './NotepadItem.css';


function NotepadItem(props) {
    return (

        <div className="flex">
            <br></br>
            {props.user._id === props.note.userID && (<div className="note">
                {props.user._id === props.note.userID && (<p>{props.note.textContent}</p>)}

                {props.user._id === props.note.userID && (<button
                    onClick={() => props.handleDeleteNote(props.note._id)}>
                    X
                </button>
                )}
                <br></br>
                {props.user._id === props.note.userID && (<Link

                    to={{ pathname: '/edit', state: { note: props.note } }}>EDIT</Link>
                )}
            </div>)}
        </div>
    );
}


export default NotepadItem;  