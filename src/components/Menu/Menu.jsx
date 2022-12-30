import "./Menu.scss";
import { NavLink, useLocation } from "react-router-dom";
function Menu({ onClickAddMatch, isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen && "menu_opened"}`}>
      <div className="menu__wrapper">
        <div className="menu__head">
          <div className="menu__close" onClick={onClose}></div>
          <p className="menu__title">Mafia&nbsp;Rating</p>
        </div>
        <nav className="menu__nav">
          <ul className="menu__nav-list">
            <NavLink
              exact
              to="/"
              activeClassName="menu__link-active"
              className="menu__link"
            >
              <li className="menu__nav-item" onClick={onClose}>
                <div className="header__nav-icon header__nav-icon_raiting"></div>
                <p className="header__nav-text">Рейтинг</p>
              </li>
            </NavLink>
            <NavLink
              exact
              to="/matches"
              activeClassName="menu__link-active"
              className="menu__link"
            >
              <li className="menu__nav-item" onClick={onClose}>
                <div className="header__nav-icon header__nav-icon_matches"></div>
                <p className="header__nav-text ">Игры</p>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>

      <button className="button menu__button" onClick={onClickAddMatch}>
        Новая игра &#43;
      </button>
    </div>
  );
}
export default Menu;
