import React from "react";
import MonsterCard from "../Cards/MonsterCard";
import "./Style.css";

const MonsterList = (props) => {
  const monsters = props.monsters.map((monster) => {
      
    return (
      <div key={monster.id}>
        <MonsterCard id ={monster.id} className="Monster" name={monster.name} />
      </div>
    );
  });
  return (
      <div className="Monster">
          {monsters}
      </div>
  ) ;
};

export default MonsterList;
