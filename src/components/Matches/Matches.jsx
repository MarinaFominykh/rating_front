import React, { useState } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import './Matches.scss';
import Match from '../Match/Match.jsx';
import UserCurrentWidth from '../../hooks/useCurrentWidth.js';
import { getLoadStep, getInitialCount } from '../../utils/getLoadStep.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectValueMatches } from '../../redux/actions';
import noGames from '../../image/no_games.png';

function Matches({
  matches,
  matches2020,
  matches2021,
  matches2022,
  matches2023,
  matches2024,
  matches2025,
  onClickAddMatch,
  onClickAddUnits,
  onMatchDelete,
  // onClose,
  units,
  onEditTitle,
  onEditGameMatch,
  onEditUnit,
  onEditResult,
  showMatch,
  preloader,
}) {
  const dispatch = useDispatch();
  const period = useSelector((state) => {
    const { selectPeriodMatchesReducer } = state;
    return selectPeriodMatchesReducer.value;
  });
  
  const width = UserCurrentWidth();
  const [count, setCount] = useState(getInitialCount(width));

  function handleLoadMore() {
    setCount((prevCount) => prevCount + getLoadStep(width));
  }
  function handleSelectChange(e) {
    dispatch(selectValueMatches(e.target.value));
  }

  const matchesArray = () => {
    if (period === '2020') {
      return matches2020;
    } else if (period === '2021') {
      return matches2021;
    } else if (period === '2022') {
      return matches2022;
    } else if (period === '2023') {
      return matches2023;
    } else if (period === '2024') {
      return matches2024;
    } else if (period === '2025') {
      return matches2025;
    }
    return matches;
  };

  return (
    <main className='main'>
      {/* <nav className="matches__nav-container">
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
      </nav> */}
      <div className='matches__head'>
        <h1 className='matches__title'>Игры</h1>
        <form className='matches__form-select'>
          <select
            className='select matches__select'
            name='period'
            value={period}
            onChange={handleSelectChange}
          >
            <option className='select__option' value='allTime'>
              За все время
            </option>
            <option className='select__option' value='2020'>
              2020
            </option>
            <option className='select__option' value='2021'>
              2021
            </option>
            <option className='select__option' value='2022'>
              2022
            </option>
            <option className='select__option' value='2023'>
              2023
            </option>
            <option className='select__option' value='2024'>
              2024
            </option>
            <option className='select__option' value='2025'>
              2025
            </option>
          </select>
        </form>
      </div>

      {/* <button className="button" onClick={onClickAddMatch}>
        Добавить игру
      </button> */}
      {preloader ? (
        <article className='loader'>
          {' '}
          <PacmanLoader color='#118dff' size={50} />
        </article>
      ) : (
        <>
          <section className='matches'>
            {matchesArray()
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
                    onClickDetail={showMatch}
                    // stationSubmit={stationSubmit}
                  ></Match>
                );
              })
              .sort((a, b) => {
                return a.props.match.date < b.props.match.date ? 1 : -1;
              })
              // .reverse()
              .slice(0, count)}
          </section>
          {matchesArray().length > count && (
            <button
              className='button button__load-more'
              onClick={handleLoadMore}
            >
              Загрузить ещё
            </button>
          )}
          {matchesArray().length === 0 && (
            <article className='no-games'>
              <div className='no-games__image-wrapper'>
                <img
                  src={noGames}
                  alt='Игры не найдены'
                  className='no-games__image'
                />
              </div>

              <p className='no-games__title'>
                Мы не смогли найти игры за выбранный период
              </p>
              <p className='no-games__text'>
                Создайте новую игру или подождите пока другой пользователь
                сделает это
              </p>
              <button
                onClick={onClickAddMatch}
                type='button'
                className='button no-games__button'
              >
                Создать игру &#43;
              </button>
            </article>
          )}
        </>
      )}
    </main>
  );
}

export default Matches;
