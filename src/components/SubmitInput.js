import React from 'react';


class SubmitInput extends React.Component {
    state = {
        text: ''
    };

    submitItem = (e) => {
        e.preventDefault();
        if(this.state.text === '') return;
        this.props.onFormSubmit(this.state.text);
        this.setState( {text: ''} );
      }

    render() {
        return(
            <form className="submit-form-item" onSubmit={this.submitItem}>
            <div>
                <input
                    className="submit-button-input-container input-box"
                    type="text"
                    placeholder="Enter Item"
                    value={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}
                />
            </div>
            <button className="submit-button submit-button-input-container "> Submit </button>
            </form>
        );
    }
}

export default SubmitInput;

