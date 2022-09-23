import React from "react";
import "./Match.css";

function Match({ title, onMatchDelete, match, gameMaster, onClickAddUnits }) {
  function handleMatchDelete() {
    onMatchDelete(match);
  }
  return (
    <table className="table">
      <caption>
        <div className="table__match-title-container">
          <h2>{title}</h2>
          <button
            onClick={handleMatchDelete}
            className="table__delete-button tooltip"
            data-tooltip="Удалить игрока"
          ></button>
        </div>
      </caption>
      <thead>
        <tr>
          <td colSpan="4" className="table__cell">
            Ведущий: {gameMaster}
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
            <tr key={unit._id}>
              <td className="table__cell">{unit.unit.name}</td>
              {/* <td className="table__cell">{unit.name}</td> */}
              <td className="table__cell">{unit.role}</td>
              <td className="table__cell">{unit.modKill}</td>
              <td className="table__cell">{unit.bestPlayer}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Match;
