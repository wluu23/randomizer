import React from 'react';

const Header = (props) => {
    return(
        <div className='card-header'>
            <h2 className='header'>
                You have {props.numInputs} Items
            </h2>
        </div>
    )
}

export default Header;