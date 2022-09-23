import React from "react";
import "./Matches.css";
import Match from "../Match/Match.jsx";
import { getUnit } from "../../utils/Api.js";

function Matches({
  allMatches,
  onClickAddMatch,
  onClickAddUnits,
  onMatchDelete,
}) {
  return (
    <main className="main">
      <h1>Игры</h1>
      <button className="button" onClick={onClickAddMatch}>
        Добавить игру
      </button>
      {allMatches.map((match) => {
        return (
          <Match
            key={match._id}
            title={match.title}
            onMatchDelete={onMatchDelete}
            match={match}
            gameMaster={match.gameMaster.name}
            onClickAddUnits={onClickAddUnits}
          ></Match>
          // <table className="table" key={match._id}>
          //   <caption>
          //     <div className="table__match-title-container">
          //       <h2>{match.title}</h2>
          //       <button
          //         onClick={handleMatchDelete}
          //         className="table__delete-button tooltip"
          //         data-tooltip="Удалить игрока"
          //       ></button>
          //     </div>
          //   </caption>
          //   <thead>
          //     <tr>
          //       <td colSpan="4" className="table__cell">
          //         Ведущий: {match.gameMaster.name}
          //       </td>
          //     </tr>
          //     <tr>
          //       <td colSpan="4" className="table__cell">
          //         <button
          //           className="button table__add-button"
          //           onClick={onClickAddUnits}
          //         >
          //           Добавить игроков
          //         </button>
          //       </td>
          //     </tr>
          //     <tr className="table__row table__row_result">
          //       <td className="table__cell table__cell_result">
          //         {match.result}
          //       </td>
          //       <td className="table__cell table__cell_result"></td>
          //       <td className="table__cell table__cell_result"></td>
          //       <td
          //         className={
          //           match.result === "Победа города"
          //             ? "table__cell table__cell_color_red"
          //             : "table__cell table__cell_color_black"
          //         }
          //       ></td>
          //     </tr>
          //     <tr>
          //       <td colSpan="4" className="table__cell">
          //         Дата: {match.date}
          //       </td>
          //     </tr>
          //     <tr>
          //       <td className="table__cell">Ник</td>
          //       <td className="table__cell">Роль</td>
          //       <td className="table__cell">мк</td>
          //       <td className="table__cell">ли</td>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {match.units.map((unit) => {
          //       return (
          //         <tr key={unit._id}>
          //           <td className="table__cell">{unit.unit.name}</td>
          //           {/* <td className="table__cell">{unit.name}</td> */}
          //           <td className="table__cell">{unit.role}</td>
          //           <td className="table__cell">{unit.modKill}</td>
          //           <td className="table__cell">{unit.bestPlayer}</td>
          //         </tr>
          //       );
          //     })}
          //   </tbody>
          // </table>
        );
      })}
    </main>
  );
}

export default Matches;
