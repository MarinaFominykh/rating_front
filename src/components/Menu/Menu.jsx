import "./Menu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Menu({ onClickAddMatch, onClickAddUnit, onClose }) {
  const checked = useSelector((state) => {
    const { checkboxReducer } = state;
    return checkboxReducer.value;
  });
  return (
    <div className={`menu ${checked && "menu_opened"}`}>
      <div className="menu__wrapper">
        <div>
          {/* <div className="menu__head">
            <div className="menu__close" onClick={onClose}></div>
            <p className="menu__title">Mafia&nbsp;Rating</p>
          </div> */}
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
        <div className="menu__buttons">
          <button className="button menu__button" onClick={onClickAddMatch}>
            Новая игра &#43;
          </button>
          <button className="button menu__button" onClick={onClickAddUnit}>
            Новый игрок &#43;
          </button>
        </div>
      </div>
    </div>
  );
}
export default Menu;
