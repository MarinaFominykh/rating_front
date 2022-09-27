import React from "react";
import "./Matches.css";
import Match from "../Match/Match.jsx";
import { getUnit } from "../../utils/Api.js";

function Matches({
  allMatches,
  onClickAddMatch,
  onClickAddUnits,
  onMatchDelete,
  onClose,
  isOpenConfirmForm,
  onClickDeleteButton,
  onUpdateGameMaster,
  units,
  onClickEditGameMasterButton,
  addUnit,
  onClickUpdateGameMasterButton,
  isOpenUpdateGameMasterForm,
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
            onClose={onClose}
            isOpenConfirmForm={isOpenConfirmForm}
            onClickDeleteButton={onClickDeleteButton}
            onUpdateGameMaster={onUpdateGameMaster}
            units={units}
            onClickEditGameMasterButton={onClickEditGameMasterButton}
            addUnit={addUnit}
            onClickUpdateGameMasterButton={onClickUpdateGameMasterButton}
            isOpenUpdateGameMasterForm={isOpenUpdateGameMasterForm}
          ></Match>
        );
      })}
    </main>
  );
}

export default Matches;
