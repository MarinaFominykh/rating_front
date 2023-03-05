import "./MatchCard.scss";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Popup from "../Popup/Popup.jsx";
import MatchCardUsers from "../MatchCardUsers/MatchCardUsers";
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

function MatchCard({
  isOpen,
  onClose,
  onUpdateUnit,
  unit,
  title,
  result,
  gameMaster,
  date,
  match,
  onEdit,
  onMatchDelete,
}) {
  function handleUpdateName() {
    onUpdateUnit(unit);
  }
  function handlerEdit() {
    onEdit(match);
  }

  return (
    <Popup isOpen={isOpen} className="match-card">
      <article className="match-card">
        <div className="match-card__head">
          <h2 className="match-card__title">{title}</h2>
          <button
            type="button"
            className="match-card__close"
            onClick={onClose}
          ></button>
        </div>
        <div className="match-card__result">{result}</div>
        <div className="match-card__result-container">
          <div className="match-card__result-item">
            {/* <div className="match-card__gm-container"> */}
            <img
              src={gameMasterIcon}
              alt="Ведущий"
              className="match-card__gm-image"
            />
            <div className="match-card__text-container">
              <p className="match-card__gm-text match-card__gm-name">
                {gameMaster}
              </p>
              <p className="match-card__gm-text match-card__description">
                Ведущий
              </p>
            </div>
            {/* </div> */}
          </div>
          <div className="match-card__result-item">
            {/* <div className="match-card__gm-container"> */}
            <img
              src={calendarIcon}
              alt="Дата игры"
              className="match-card__gm-image"
            />
            <div className="match-card__text-container">
              <time
                className="match-card__gm-text match-card__gm-name"
                dateTime={date}
              >
                {moment(date).format("DD.MM.YYYY")}
              </time>
              <p className="match-card__gm-text match-card__description">
                Дата игры
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="match-card__user-title user-title">
          <img
            src={peopleIcon}
            alt="Участники"
            className="match-card__user-img user-title__img"
          />
          <p className="match-card__user-text user-title__text">Участники</p>
        </div>
        <MatchCardUsers
          isOpen={isOpen}
          match={match}
          iconClass="menu"
          wrapperClass="card"
        />

        <div className="match-card__buttons">
          <button
            type="button"
            className="match-card__close-btn"
            onClick={onClose}
          >
            Закрыть
          </button>
          <button
            type="button"
            className="match-card__edit-btn"
            onClick={handlerEdit}
          >
            Редактировать
          </button>
        </div>
      </article>
    </Popup>
  );
}

export default MatchCard;
