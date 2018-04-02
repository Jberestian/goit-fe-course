import React from 'react';

const Stupid = (props) =>{
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.boobiesSize}</p>
            <p>{props.age}</p>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Stupid;
