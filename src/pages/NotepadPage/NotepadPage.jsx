import React from "react";
import "./NotepadPage.css";
import NotepadItem from "../../components/NotepadItem/NotepadItem";

function NotepadPage(props) {
    return (
        <>
            <div className="NotepadPage-grid">
                {props.notes.map(note => (
                    <NotepadItem user={props.user} note={note} key={note._id} handleDeleteNote={props.handleDeleteNote} />
                ))}
            </div>
        </>
    );
}
export default NotepadPage;