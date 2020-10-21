import React from 'react';


const Input = (props) => {
    return(
        <div className="form-item">
            <div className="input">{props.content}</div>
            <button className="delete-button" onClick={() => { props.onDelete(props.id)}}>X</button>
        </div>
    )
}

export default Input;