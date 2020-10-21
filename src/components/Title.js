import React from 'react';
import '../App.css';

function Title({title, color = "darkcyan"}) {
        
        return (
            <div className="sticky">
                <header className='title-style' style={{backgroundColor: color}}>
                    <h1>{title}</h1>
                </header>
            </div>
        )
}

export default Title;
