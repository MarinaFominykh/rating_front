import React from "react";
import { useState, useContext, useEffect } from "react";
import "./AddMatchesForm.css";
import { getMatches, getUnits } from "../../utils/Api.js";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";

function AddMatchesForm({ isOpen, onAddMatch, onClose }) {
  const [units, setUnits] = useState([]);
  const [title, setTitle] = useState("");
  const [gameMaster, setGameMaster] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");

  function getInitialUnits() {
    getUnits().then((dataUnits) => {
      setUnits(dataUnits);
    });
  }

  function handleInputTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleInputGameMasterChange(e) {
    setGameMaster(e.target.value);
  }

  function handleInputDateChange(e) {
    setDate(e.target.value);
  }

  function handleInputResultChange(e) {
    setResult(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddMatch(title, gameMaster, date, result);
  }

  useEffect(() => {
    getInitialUnits();
  }, []);
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <form className="form" onSubmit={handleSubmit}>
        <button
          className="form__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="form__title">Новая игра</h2>
        <fieldset className="form__match">
          <label>
            Название игры
            <input
              id="title"
              type="text"
              placeholder="Название игры"
              value={title}
              onChange={handleInputTitleChange}
              required
            ></input>
          </label>
          <label>
            Ведущий
            <select value={gameMaster} onChange={handleInputGameMasterChange}>
              {units.map((unit) => {
                return (
                  <OptionUnit
                    name={unit.name}
                    key={unit._id}
                    unitId={unit._id}
                  />
                );
              })}
            </select>
          </label>
          <label>
            Дата окончания игры
            <input
              id="title"
              type="date"
              placeholder="Дата окончания игры"
              value={date}
              onChange={handleInputDateChange}
              required
            ></input>
          </label>
          <div className="form__result">
            <h3 className="form__result-title">Результат игры</h3>
            <label htmlFor="red">Победа города</label>
            <input
              type="radio"
              name="result"
              id="Победа города"
              value="Победа города"
              onChange={handleInputResultChange}
              checked={result === "Победа города" ? true : false}
            ></input>
            <label htmlFor="black">Победа мафии</label>
            <input
              type="radio"
              name="result"
              id="black"
              value="Победа мафии"
              onChange={handleInputResultChange}
              checked={result === "Победа мафии" ? true : false}
            ></input>
            <label htmlFor="draw">Ничья</label>
            <input
              type="radio"
              name="result"
              id="draw"
              value="Ничья"
              onChange={handleInputResultChange}
              checked={result === "Ничья" ? true : false}
            ></input>
          </div>
        </fieldset>

        <button className="form__submit" type="submit" value="Сохранить">
          Сохранить
        </button>
      </form>
    </section>
  );
}

export default AddMatchesForm;
