import React from 'react';

const PokeCard = (props) => {
    return (
        <div>
            <b>{props.name}</b>
            <img src={props.image}></img>
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
        </div >
    );
}

export default PokeCard;