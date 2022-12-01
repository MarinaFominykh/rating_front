import "./Header.scss";
import React, { useState, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header({ onClickAddMatch }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav-container">
          <p className="header__logo">Mafia Rating</p>
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

        <button className="button" onClick={onClickAddMatch}>
          Новая игра &#43;
        </button>
      </div>
    </header>
  );
}

export default Header;
