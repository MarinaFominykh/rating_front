import React from "react";
import "./Match.scss";
import moment from "moment";
import gameMasterIcon from "../../image/icons/gamemaster.svg";
import calendarIcon from "../../image/icons/calendar.svg";
import play from "../../image/icons/fluent_play-settings-20-regular.svg";

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
  const imageClass = () => {
    if (match.result === "Победа города") {
      return "match__image match__red";
    } else if (match.result === "Победа мафии") {
      return "match__image match__black";
    }
    return "match__image match__null";
  };

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
    <article className="match">
      <div className={imageClass()}></div>
      <div className="match__info">
        <h2 className="match__title">{title}</h2>
        <div className="match__container">
          <div className="match__info-container">
            <img
              src={gameMasterIcon}
              className="match__icon"
              alt="Ведущий"
            ></img>
            <div className="match__text-container">
              <p className="match__text match__text-data">{gameMaster}</p>
              <p className="match__text match__text-description">Ведущий</p>
            </div>
          </div>
          <div className="match__info-container">
            <img
              src={calendarIcon}
              className="match__icon"
              alt="Дата игры"
            ></img>
            <div className="match__text-container">
              <p className="match__text match__text-data">
                {moment(match.date).format("DD.MM.YYYY")}
              </p>
              <p className="match__text match__text-description">Дата игры</p>
            </div>
          </div>
        </div>
        <button type="button" className="match__more-btn">
          <img src={play} alt="Подробнее об игре" />
          <p className="match__text-btn">Подробнее об игре</p>
        </button>
      </div>
    </article>
  );
}

export default Match;
// {/* <>
// <table
//   className={
//     match.result === "Победа города"
//       ? "table table_result_red"
//       : "table table_result_black"
//   }
// >
//   <caption>
//     <div className="table__match-title-container">
//       <h2>{title}</h2>
//       <button
//         onClick={handleDeleteMatch}
//         className="table__delete-button tooltip"
//         data-tooltip="Удалить игру"
//       ></button>
//       <button
//         onClick={handleEditMatch}
//         className="table__edit-button tooltip"
//         data-tooltip="Редактировать название"
//       ></button>
//     </div>
//   </caption>
//   <thead>
//     <tr>
//       <td colSpan="4" className="table__cell">
//         Ведущий: {gameMaster}
//         <button
//           onClick={handleEditGameMasterButton}
//           className="table__edit-button tooltip"
//           data-tooltip="Редактировать данные ведущего"
//         ></button>
//       </td>
//     </tr>
//     <tr>
//       <td colSpan="4" className="table__cell">
//         <button
//           className={addUnitsButtonClassName}
//           onClick={handleAddUnits}
//         >
//           Добавить игроков
//         </button>
//       </td>
//     </tr>
//     <tr className="table__row table__row_result">
//       <td colSpan="4" className="table__cell table__cell_result">
//         {match.result}
//         <button
//           onClick={handleEditResultButton}
//           className="table__edit-button tooltip"
//           data-tooltip="Редактировать результат игры"
//         ></button>
//       </td>
//     </tr>
//     <tr>
//       <td colSpan="4" className="table__cell">
//         Дата: {moment(match.date).format("DD.MM.YYYY")}
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
//         <tr className="table__row" key={unit._id}>
//           <td className="table__cell unit__name">
//             {unit.unit.name}
//             <button
//               onClick={() => {
//                 onEditUnit(unit, match);
//               }}
//               className="table__edit-button tooltip"
//               data-tooltip="Редактировать данные игрока"
//             ></button>
//           </td>

//           <td className="table__cell">{unit.role}</td>
//           <td className="table__cell cell-modKill">
//             {unit.modKill ? "X" : ""}
//           </td>
//           <td className="table__cell cell-bestPlayer">
//             {unit.bestPlayer ? "V" : ""}
//           </td>
//         </tr>
//       );
//     })}
//   </tbody>
// </table>
// </> */}
