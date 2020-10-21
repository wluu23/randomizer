import React from 'react';
import InputItem from './InputItem';

const InputList = (props) => {
    const inputItems = props.items
    return (
        <div className='list-wrapper'>
            {
                inputItems.map((value, index, arr) => {
                    return <InputItem content={value} key={index} id={index} onDelete={props.onDelete} />
                })
            }
        </div>
    )
    
}


export default InputList;