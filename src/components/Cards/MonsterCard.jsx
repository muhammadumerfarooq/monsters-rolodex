import React from 'react';
import './Style.css'

const MonsterCard = (props) =>{
    
    return(
        <div className="monstercard">
            <img src={`https://robohash.org/${props.id}?set=set2`} />
            <h1 className="text">{props.name}</h1>
        </div>
    );
}

export default MonsterCard;