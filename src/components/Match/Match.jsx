import React from "react";
import { useState, useContext, useEffect } from "react";
import "./Match.css";
import ConfirmForm from "../ConfirmForm/ConfirmForm.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import UpdateGameMasterForm from "../UpdateGameMasterForm/UpdateGameMasterForm.jsx";
import UpdateTitleForm from "../UpdateTitleForm/UpdateTitleForm.jsx";

function Match({
  title,
  onMatchDelete,
  match,
  gameMaster,
  onClickAddUnits,
  // onClose,
  // units,
  // addUnit,
  onEditTitle,
  // onReplaceUnit,
  // isOpenReplaceUnit,
  onEditGameMatch,
  onEditUnit,
}) {
  const is = "&#10004;";
  const isNot = "";
  function handleDeleteMatch() {
    onMatchDelete(match);
  }

  function handleEditMatch() {
    onEditTitle(match);
  }

  function handleEditGameMasterButton() {
    onEditGameMatch(match);
  }

  function handleEditUnitButton() {
    onEditUnit(match);
  }
  return (
    <>
      <table className="table">
        <caption>
          <div className="table__match-title-container">
            <h2>{title}</h2>
            <button
              onClick={handleDeleteMatch}
              className="table__delete-button tooltip"
              data-tooltip="Удалить игру"
            ></button>
            <button
              onClick={handleEditMatch}
              className="table__edit-button tooltip"
              data-tooltip="Редактировать название"
            ></button>
          </div>
        </caption>
        <thead>
          <tr>
            <td colSpan="4" className="table__cell">
              Ведущий: {gameMaster}
              <button
                onClick={handleEditGameMasterButton}
                className="table__edit-button tooltip"
                data-tooltip="Изменить ведущего"
              ></button>
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="table__cell">
              <button
                className="button table__add-button"
                onClick={onClickAddUnits}
              >
                Добавить игроков
              </button>
            </td>
          </tr>
          <tr className="table__row table__row_result">
            <td className="table__cell table__cell_result">{match.result}</td>
            <td className="table__cell table__cell_result"></td>
            <td className="table__cell table__cell_result"></td>
            <td
              className={
                match.result === "Победа города"
                  ? "table__cell table__cell_color_red"
                  : "table__cell table__cell_color_black"
              }
            ></td>
          </tr>
          <tr>
            <td colSpan="4" className="table__cell">
              Дата: {match.date}
            </td>
          </tr>
          <tr>
            <td className="table__cell">Ник</td>
            <td className="table__cell">Роль</td>
            <td className="table__cell">мк</td>
            <td className="table__cell">ли</td>
          </tr>
        </thead>
        <tbody>
          {match.units.map((unit) => {
            return (
              <tr className="table__row" key={unit._id}>
                <td className="table__cell unit__name">
                  {unit.unit.name}
                  <button
                    onClick={handleEditUnitButton}
                    className="table__edit-button tooltip"
                    data-tooltip="Редактировать данные игрока"
                  ></button>
                </td>

                <td className="table__cell">{unit.role}</td>
                <td className="table__cell cell-boolean">{unit.modKill}</td>
                <td className="table__cell cell-boolean">
                  {unit.bestPlayer ? "V" : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ConfirmForm
        onMatchDelete={onMatchDelete}
        onClose={onClose}
        isOpen={isOpenConfirmForm}
      ></ConfirmForm> */}
      {/* <UpdateGameMasterForm
        onUpdateGameMaster={onUpdateGameMaster}
        onClose={onClose}
        isOpen={isOpenUpdateGameMasterForm}
        match={match}
        units={units}
        onClick={addUnit}
      ></UpdateGameMasterForm> */}
      {/* <UpdateTitleForm
        onUpdateTitle={onUpdateTitle}
        onClose={onClose}
        isOpen={isOpenUpdateTitle}
        match={match}
      ></UpdateTitleForm> */}
    </>
  );
}

export default Match;
