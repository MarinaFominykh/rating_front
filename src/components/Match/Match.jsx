import React from "react";
import "./Match.css";

function Match({
  title,
  onMatchDelete,
  match,
  gameMaster,
  onClickAddUnits,
  units,
  onEditTitle,
  onEditGameMatch,
  onEditUnit,
  onEditResult,
  isSubmited,
}) {
  const addUnitsButtonClassName = `button ${
    isSubmited ? "table__add-button_hidden" : "table__add-button"
  }`;

  function handleDeleteMatch() {
    onMatchDelete(match);
  }

  function handleEditMatch() {
    onEditTitle(match);
  }

  function handleEditGameMasterButton() {
    onEditGameMatch(match);
  }

  function handleEditResultButton() {
    onEditResult(match);
  }

  function handleAddUnits() {
    onClickAddUnits(match);
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
                data-tooltip="Редактировать данные ведущего"
              ></button>
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="table__cell">
              <button
                className={addUnitsButtonClassName}
                onClick={handleAddUnits}
              >
                Добавить игроков
              </button>
            </td>
          </tr>
          <tr className="table__row table__row_result">
            <td className="table__cell table__cell_result">
              {match.result}
              <button
                onClick={handleEditResultButton}
                className="table__edit-button tooltip"
                data-tooltip="Редактировать результат игры"
              ></button>
            </td>
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
                    onClick={() => {
                      onEditUnit(unit, match);
                    }}
                    className="table__edit-button tooltip"
                    data-tooltip="Редактировать данные игрока"
                  ></button>
                </td>

                <td className="table__cell">{unit.role}</td>
                <td className="table__cell cell-modKill">
                  {unit.modKill ? "X" : ""}
                </td>
                <td className="table__cell cell-bestPlayer">
                  {unit.bestPlayer ? "V" : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Match;
