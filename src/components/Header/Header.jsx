import "./Header.scss";
import React, { useState, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import { checkbox } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Header({ onClickAddMatch, onClickBurger, loggedIn, handleSignOut}) {
  const dispatch = useDispatch();
  const checked = useSelector((state) => {
    const { checkboxReducer } = state;
    return checkboxReducer.value;
  });
  function changeCheckbox() {
    dispatch(checkbox(!checked));
  }
  const className = checked ? "header__burger-input" : "";
  return (
    <header className="header">
      <div className="header__container">
        {/* <Menu /> */}
        {/* <button
          type="button"
          className="header__burger"
          onClick={onClickBurger}
        ></button> */}

        <div className="header__nav-container">
          <div className="header__logo-container">
            <label className="header__burger">
              <input
                type="checkbox"
                className={className}
                value={checked}
                onChange={changeCheckbox}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
            <p className="header__logo">Mafia&nbsp;Rating</p>
          </div>

          <nav className="header__nav-wrapper">
            <ul className="header__nav-list">
              <NavLink
                exact
                to="/"
                activeClassName="header__link-active"
                className="header__link"
              >
                <li className="header__nav-item">
                  <p className="header__nav-text">Рейтинг</p>
                  <div className="header__nav-icon header__nav-icon_raiting"></div>
                </li>
              </NavLink>
              <NavLink
                exact
                to="/matches"
                activeClassName="header__link-active"
                className="header__link"
              >
                <li className="header__nav-item">
                  <p className="header__nav-text ">Игры</p>
                  <div className="header__nav-icon header__nav-icon_matches"></div>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="header_button-container">
          {loggedIn && <p onClick={handleSignOut} className="header__logout">Выйти</p>}
          <button className="button header__button" onClick={onClickAddMatch}>
            Новая игра &#43;
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
