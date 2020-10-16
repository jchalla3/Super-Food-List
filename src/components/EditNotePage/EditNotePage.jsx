import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditNotePage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.note
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateNote(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <div className="flex">
                <h1>Edit Food</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea
                            className="form-control"
                            name="textContent"
                            rows="20"
                            value={this.state.formData.textContent}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <label>Done?</label>
                    <input
                        type="checkbox"
                        name="complete"
                        value={this.state.formData.complete}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <button
                        type="submit"
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        SAVE FOOD
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
                </form>
            </div>
        );
    }
}
export default EditNotePage;