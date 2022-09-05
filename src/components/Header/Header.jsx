import "./Header.css";
import React, { useState, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav-container">
        <ul className="header__nav-list">
          <NavLink
            exact
            to="/"
            activeClassName="header__link-active"
            className="header__link"
          >
            <li className="header__nav-item">Рейтинг</li>
          </NavLink>
          <NavLink
            exact
            to="/matches"
            activeClassName="header__link-active"
            className="header__link"
          >
            <li className="header__nav-item">Игры</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
