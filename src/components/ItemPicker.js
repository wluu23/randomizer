import React from 'react';

const ItemPicker = (props) => {
    return (
        <div className="center">
           <button className="choose-btn-styl" onClick={props.randomizeItem}>
            <span> Choose Item </span>
            </button> 
            {
                props.error && <div className="error-style">
                    {props.error}
                </div>
            }

        </div>
    )
}

export default ItemPicker;