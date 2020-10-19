import React, { Component } from 'react';

class AddNotePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            textContent: ''
        }
    };
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddNote(this.state.formData);
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
                <h1>Add Food</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">

                        <textarea
                            className="form-control rounded-0"
                            name="textContent"
                            rows="20"
                            value={this.state.formData.textContent}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}>
                        ADD FOOD HERE </button>
                </form>
            </div>
        );
    }
}
export default AddNotePage;