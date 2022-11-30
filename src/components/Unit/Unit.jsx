import "./Unit.scss";
import React from "react";
import { useState, useContext, useEffect } from "react";

function Unit({
  name,
  matches,
  rating,
  black,
  red,
  sheriff,
  don,
  blackVictory,
  redVictory,
  sheriffVictory,
  donVictory,
  modKill,
  bestPlayer,
  onUpdateUnit,
  unit,
}) {
  function handleUpdateUnith() {
    onUpdateUnit(unit);
  }
  // style={{height: 62 * 10 +1, overflow: "auto"}}
  return (
   
      <tr style={{ height: 62 }} className="table__row unit">
        <td className="table__cell unit__name">
          <p> {name}</p>

          <button
            onClick={handleUpdateUnith}
            className="table__edit-button tooltip"
            data-tooltip="Редактировать ник"
          ></button>
        </td>
        <td className="table__cell unit__rating">{matches}</td>
        <td className="table__cell unit__black">{black}</td>
        <td className="table__cell unit__black-victory">{blackVictory}</td>
        <td className="table__cell unit__red">{red}</td>
        <td className="table__cell unit__red-victory">{redVictory}</td>
        <td className="table__cell unit__sheriff">{sheriff}</td>
        <td className="table__cell unit__sheriff-victory">{sheriffVictory}</td>
        <td className="table__cell unit__don">{don}</td>
        <td className="table__cell unit__don-victory">{donVictory}</td>
        <td className="table__cell unit__rating">{modKill}</td>
        <td className="table__cell unit__rating">{bestPlayer}</td>
        <td className="table__cell unit__rating">{rating}</td>
      </tr>
 
  );
}

export default Unit;
