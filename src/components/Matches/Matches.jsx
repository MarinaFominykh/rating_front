import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Matches.css";
import Match from "../Match/Match.jsx";
import UserCurrentWidth from "../../hooks/useCurrentWidth.js";
import { getLoadStep, getInitialCount } from "../../utils/getLoadStep.js";

function Matches({
  allMatches,
  onClickAddMatch,
  onClickAddUnits,
  onMatchDelete,
  // onClose,
  units,
  // addUnit,
  // onUpdateTitle,
  // isOpenUpdateTitle,
  // onClickEditTitleButton,
  // onReplaceUnit,
  // isOpenReplaceUnit,
  // onClickReplaceUnitButton,
  onEditTitle,
  onEditGameMatch,
  onEditUnit,
  onEditResult,
  // stationSubmit,
}) {
  const width = UserCurrentWidth();
  const [count, setCount] = useState(getInitialCount(width));

  function handleLoadMore() {
    setCount((prevCount) => prevCount + getLoadStep(width));
  }
  return (
    <main className="matches">
      <nav className="matches__nav-container">
        <ul className="matches__nav-list">
          <NavLink
            exact
            to="/matches"
            activeClassName="matches__link-active"
            className="matches__link"
          >
            <li className="matches__nav-item">Total</li>
          </NavLink>
          <NavLink
            exact
            to="/matches/2020"
            activeClassName="matches__link-active"
            className="matches__link"
          >
            <li className="matches__nav-item">2020</li>
          </NavLink>
          <NavLink
            exact
            to="/matches/2021"
            activeClassName="matches__link-active"
            className="matches__link"
          >
            <li className="matches__nav-item">2021</li>
          </NavLink>
          <NavLink
            exact
            to="/matches/2022"
            activeClassName="matches__link-active"
            className="matches__link"
          >
            <li className="matches__nav-item">2022</li>
          </NavLink>
        </ul>
      </nav>
      <h1>Игры</h1>
      <button className="button" onClick={onClickAddMatch}>
        Добавить игру
      </button>
      <section className="match">
        {allMatches
          .slice(0, count)
          .map((match) => {
            return (
              <Match
                key={match._id}
                title={match.title}
                onMatchDelete={onMatchDelete}
                match={match}
                gameMaster={match.gameMaster.name}
                onClickAddUnits={onClickAddUnits}
                // onClose={onClose}
                units={units}
                // addUnit={addUnit}
                // onUpdateTitle={onUpdateTitle}
                // isOpenUpdateTitle={isOpenUpdateTitle}
                // onClickEditTitleButton={onClickEditTitleButton}
                // onReplaceUnit={onReplaceUnit}
                // isOpenReplaceUnit={isOpenReplaceUnit}
                // onClickReplaceUnitButton={onClickReplaceUnitButton}
                onEditTitle={onEditTitle}
                onEditGameMatch={onEditGameMatch}
                onEditUnit={onEditUnit}
                onEditResult={onEditResult}
                // stationSubmit={stationSubmit}
              ></Match>
            );
          })
          .reverse()}
      </section>
      {allMatches.length > count && (
        <button className="button button__load-more" onClick={handleLoadMore}>
          Загрузить ещё
        </button>
      )}
    </main>
  );
}

export default Matches;
