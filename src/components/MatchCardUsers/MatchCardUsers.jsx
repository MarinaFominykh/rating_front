import "./MatchCardUsers.scss";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Popup from "../Popup/Popup.jsx";
import avatar from "../../image/icons/avatar.svg";
import amountIcon from "../../image/icons/profile_amount.svg";
import blackIcon from "../../image/icons/profile_black.svg";
import redIcon from "../../image/icons/profile_red.svg";
import sheriffIcon from "../../image/icons/profile_sheriff.svg";
import doneIcon from "../../image/icons/profile_done.svg";
import settingIcon from "../../image/icons/fluent_settings-16-filled.svg";
import gameMasterIcon from "../../image/icons/gamemaster.svg";
import calendarIcon from "../../image/icons/calendar.svg";
import peopleIcon from "../../image/icons/fluent_people-20-regular.svg";

function MatchCardUsers({
  isOpen,
  match,
  listClass,
  iconClass,
  onClick,
  wrapperClass,
}) {
  function getTooltip(unit, best, mk) {
    if (best.some((item) => item === unit._id)) {
      return "Лучший игрок";
    } else if (mk.some((item) => item === unit._id)) {
      return "ModKill";
    } else return "";
  }
  function getIcon(unit, best, mk) {
    if (best.some((item) => item === unit._id)) {
      return "tooltip match-card__up match-card__up_best";
    } else if (mk.some((item) => item === unit._id)) {
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
              <div
                onClick={onClick}
                className={`match-card__action match-card__action_${iconClass}`}
              ></div>
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
              <div
                className={`match-card__action match-card__action_${iconClass}`}
              ></div>
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
                <div
                  className={`match-card__action match-card__action_${iconClass}`}
                ></div>
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
                <div
                  className={`match-card__action match-card__action_${iconClass}`}
                ></div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MatchCardUsers;
