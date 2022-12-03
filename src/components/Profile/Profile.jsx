import "./Profile.scss";
import Popup from "../Popup/Popup.jsx";
import avatar from "../../image/icons/avatar.svg";
import amountIcon from "../../image/icons/profile_amount.svg";
import blackIcon from "../../image/icons/profile_black.svg";
import redIcon from "../../image/icons/profile_red.svg";
import sheriffIcon from "../../image/icons/profile_sheriff.svg";
import doneIcon from "../../image/icons/profile_done.svg";
import settingIcon from "../../image/icons/fluent_settings-16-filled.svg";

function Profile({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen} className="profile">
      <article className="profile">
        <div className="profile__head">
          <h2 className="profile__title">Профиль пользователя</h2>
          <button
            type="button"
            className="profile__close"
            onClick={onClose}
          ></button>
        </div>
        <div className="profile__name-container">
          <img src={avatar} alt="Аватар игрока" className="profile__avatar" />
          <div className="profile__name-text-container">
            <p className="profile__raiting">Рейтинг</p>
            <p className="profile__name">констанин</p>
          </div>
        </div>
        <ul className="profile__data">
          <li className="profile__item">
            <div className="profile__text-container">
              <p className="profile__description">Количество игр</p>
              <p className="profile__number">12</p>
            </div>
            <img src={amountIcon} alt="Количество игры" />
          </li>
          <li className="profile__item">
            <div className="profile__text-container">
              <p className="profile__description">Мафия (сыграно/побед)</p>
              <p className="profile__number">12</p>
            </div>
            <img src={blackIcon} alt="Мафия" />
          </li>
          <li className="profile__item">
            <div className="profile__text-container">
              <p className="profile__description">Мирный (сыграно/побед)</p>
              <p className="profile__number">12</p>
            </div>
            <img src={redIcon} alt="Мирный" />
          </li>
          <li className="profile__item">
            <div className="profile__text-container">
              <p className="profile__description">Шериф (сыграно/побед)</p>
              <p className="profile__number">12</p>
            </div>
            <img src={sheriffIcon} alt="Шериф" />
          </li>
          <li className="profile__item">
            <div className="profile__text-container">
              <p className="profile__description">Дон (сыграно/побед)</p>
              <p className="profile__number">12</p>
            </div>
            <img src={doneIcon} alt="Дон мафии" />
          </li>
          <li className="profile__progress">
            <div className="profile__text-container profile__progress-item">
              <p className="profile__description">ModKill</p>
              <p className="profile__number">12</p>
            </div>
            <div className="profile__text-container profile__progress-item">
              <p className="profile__description">Лучший игрок</p>
              <p className="profile__number">12</p>
            </div>
          </li>
        </ul>
        <button type="button" className="profile__setting">
          <p className="profile__setting-text">Настройки пользователя</p>
          <img
            src={settingIcon}
            alt="Настройки пользователя"
            className="profile__setting-text"
          />
        </button>
        <button type="button" className="profile__close-btn" onClick={onClose}>
          Закрыть
        </button>
      </article>
    </Popup>
  );
}

export default Profile;
