import React from "react";
import "./NotepadPage.css";
import NotepadItem from "../../components/NotepadItem/NotepadItem";

function NotepadPage(props) {
    return (
        <>
            <div className="NotepadPage-grid">
                {props.foods.map(food => (
                    <NotepadItem user={props.user} food={food} key={food._id} handleDeleteFood={props.handleDeleteFood} />
                ))}
            </div>
        </>
    );
}
export default NotepadPage;