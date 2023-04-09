import "./MatchCardUsers.scss";
import React from "react";

function MatchCardUsers({
  isOpen,
  match,
  listClass,
  iconClass,
  onClick,
  wrapperClass,
  tooltipClass,
}) {
  function getTooltip(unit, best, mk) {
    if (best.some((item) => item._id === unit._id)) {
      return "Лучший игрок";
    } else if (mk.some((item) => item._id === unit._id)) {
      return "ModKill";
    } else return "";
  }
  function getIcon(unit, best, mk) {
    if (best.some((item) => item._id === unit._id)) {
      return "tooltip match-card__up match-card__up_best";
    } else if (mk.some((item) => item._id === unit._id)) {
      return "tooltip match-card__up match-card__up_mk";
    } else return "match-card__up";
  }

  return (
    <div className={`match-card__users-wrapper users_${wrapperClass}`}>
      <ul className={`match-card__users match-card__users_${listClass}`}>
        {isOpen && (
          <>
            <li className={`match-card__user match-card__user_${listClass}`}>
              <div className="match-card__item">
                <div className="match-card__name-container">
                  <p className="match-card__name"> {match.sheriff.name}</p>
                  <div
                    data-tooltip={getTooltip(
                      match.sheriff,
                      match.bestPlayer,
                      match.modKill
                    )}
                    className={getIcon(
                      match.sheriff,
                      match.bestPlayer,
                      match.modKill
                    )}
                  ></div>
                </div>
                <p className="match-card__role">Шериф</p>
              </div>
           
            </li>
            <li className="match-card__user">
              <div className="match-card__item">
                <div className="match-card__name-container">
                  <p className="match-card__name"> {match.done.name}</p>
                  <div
                    data-tooltip={getTooltip(
                      match.done,
                      match.bestPlayer,
                      match.modKill
                    )}
                    className={getIcon(
                      match.done,
                      match.bestPlayer,
                      match.modKill
                    )}
                  ></div>
                </div>
                <p className="match-card__role">Дон мафии</p>
              </div>
             
            </li>
          </>
        )}

        {isOpen &&
          match.black.map((unit) => {
            return (
              <li key={unit._id} className="match-card__user">
                <div className="match-card__item">
                  <div className="match-card__name-container">
                    <p className="match-card__name"> {unit.name}</p>
                    <div
                      data-tooltip={getTooltip(
                        unit,
                        match.bestPlayer,
                        match.modKill
                      )}
                      className={getIcon(unit, match.bestPlayer, match.modKill)}
                    ></div>
                  </div>
                  <p className="match-card__role">Мафия</p>
                </div>
               
              </li>
            );
          })}
        {isOpen &&
          match.red.map((unit) => {
            return (
              <li key={unit._id} className="match-card__user">
                <div className="match-card__item">
                  <div className="match-card__name-container">
                    <p className="match-card__name"> {unit.name}</p>
                    <div
                      data-tooltip={getTooltip(
                        unit,
                        match.bestPlayer,
                        match.modKill
                      )}
                      className={getIcon(unit, match.bestPlayer, match.modKill)}
                    ></div>
                  </div>
                  <p className="match-card__role">Мирный</p>
                </div>
                
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MatchCardUsers;
