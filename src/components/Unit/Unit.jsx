import "./Unit.css";
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
  onUnitDelete,
  onUpdateUnit,
  unit
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [unitName, setUnitName] = useState(name);
  const saveButtonClassName = `${
    isClicked ? "table__save-button_visible" : "table__save-button_hidden"
  }`;

  function handleEditButton() {
    
    setIsClicked(!isClicked);
  }

  // function handleBlurInput() {
  //   setIsClicked(false);
  // }

  function handleInputNameChange(e) {
    setUnitName(e.target.value);
  }

  // function handleSubmit(e) {
  //    e.preventDefault();
  //    onUpdateUnit(name, unitName);
  //    setIsClicked(false);
    
  // }
  function handleUpdateUnith() {
    onUpdateUnit(unit)
  }

  return (
    <tr className="table__row unit">
      <td className="table__cell unit__name">
        <p>  {name}</p>
      
        <button
              onClick={handleUpdateUnith}
              className="table__edit-button tooltip"
              data-tooltip="Редактировать название"
            ></button>
        {/* <form onSubmit={handleSubmit}>
          <input
            value={unitName}
            className="table__input-name"
            disabled={!isClicked ? true : false}
            // onBlur={handleBlurInput}
            onChange={handleInputNameChange}
            required
          ></input>
          <button type="submit" className={saveButtonClassName}>
            Сохранить
          </button>
        </form>

        <div className="table__button-container">
          <button
            onClick={handleUnitDelete}
            className="table__delete-button tooltip"
            data-tooltip="Удалить игрока"
          ></button>
          <button
            onClick={handleEditButton}
            className="table__edit-button tooltip"
            data-tooltip="Изменить ник"
          ></button>
        </div> */}
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
      <td className="table__cell unit__rating">{rating}</td>
    </tr>
  );
}

export default Unit;
