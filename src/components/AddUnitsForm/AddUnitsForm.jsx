import React from "react";
import { useState, useContext, useEffect } from "react";
import "./AddUnitsForm.css";
import { getMatches, getUnits } from "../../utils/Api.js";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import OptionMatch from "../OptionMatch/OptionMatch.jsx";

function AddUnitsForm({ isOpen, onClose, allMatches, onAddUnits, onClick, allUnits }) {
 
  const [matchId, setMatchId] = useState("");
  const [unit1Id, setUnit1Id] = useState("");
  const [unit1Role, setUnit1Role] = useState("");
  const [checkedUnit1ModKill, setCheckedUnit1ModKill] = useState(false);
  const [checkedUnit1BestPlayer, setCheckedUnit1BestPlayer] = useState(false);
  const [unit2Id, setUnit2Id] = useState("");
  const [unit2Role, setUnit2Role] = useState("");
  const [checkedUnit2ModKill, setCheckedUnit2ModKill] = useState(false);
  const [checkedUnit2BestPlayer, setCheckedUnit2BestPlayer] = useState(false);
  const [unit3Id, setUnit3Id] = useState("");
  const [unit3Role, setUnit3Role] = useState("");
  const [checkedUnit3ModKill, setCheckedUnit3ModKill] = useState(false);
  const [checkedUnit3BestPlayer, setCheckedUnit3BestPlayer] = useState(false);
  const [unit4Id, setUnit4Id] = useState("");
  const [unit4Role, setUnit4Role] = useState("");
  const [checkedUnit4ModKill, setCheckedUnit4ModKill] = useState(false);
  const [checkedUnit4BestPlayer, setCheckedUnit4BestPlayer] = useState(false);
  const [unit5Id, setUnit5Id] = useState("");
  const [unit5Role, setUnit5Role] = useState("");
  const [checkedUnit5ModKill, setCheckedUnit5ModKill] = useState(false);
  const [checkedUnit5BestPlayer, setCheckedUnit5BestPlayer] = useState(false);
  const [unit6Id, setUnit6Id] = useState("");
  const [unit6Role, setUnit6Role] = useState("");
  const [checkedUnit6ModKill, setCheckedUnit6ModKill] = useState(false);
  const [checkedUnit6BestPlayer, setCheckedUnit6BestPlayer] = useState(false);
  const [unit7Id, setUnit7Id] = useState("");
  const [unit7Role, setUnit7Role] = useState("");
  const [checkedUnit7ModKill, setCheckedUnit7ModKill] = useState(false);
  const [checkedUnit7BestPlayer, setCheckedUnit7BestPlayer] = useState(false);
  const [unit8Id, setUnit8Id] = useState("");
  const [unit8Role, setUnit8Role] = useState("");
  const [checkedUnit8ModKill, setCheckedUnit8ModKill] = useState(false);
  const [checkedUnit8BestPlayer, setCheckedUnit8BestPlayer] = useState(false);
  const [unit9Id, setUnit9Id] = useState("");
  const [unit9Role, setUnit9Role] = useState("");
  const [checkedUnit9ModKill, setCheckedUnit9ModKill] = useState(false);
  const [checkedUnit9BestPlayer, setCheckedUnit9BestPlayer] = useState(false);
  const [unit10Id, setUnit10Id] = useState("");
  const [unit10Role, setUnit10Role] = useState("");
  const [checkedUnit10ModKill, setCheckedUnit10ModKill] = useState(false);
  const [checkedUnit10BestPlayer, setCheckedUnit10BestPlayer] = useState(false);



  function handleInputMatchIdChange(e) {
    setMatchId(e.target.value);
  }

  //1
  function handleInputUnit1IdChange(e) {
    e.target.value === "newItem"
  ? onClick()
  :  setUnit1Id(e.target.value);
  }

  function handleInputUnit1RoleChange(e) {
    setUnit1Role(e.target.value);
  }

  //2
  function handleInputUnit2IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit2Id(e.target.value);
  }

  function handleInputUnit2RoleChange(e) {
    setUnit2Role(e.target.value);
  }

  //3

  function handleInputUnit3IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit3Id(e.target.value);
  }

  function handleInputUnit3RoleChange(e) {
    setUnit3Role(e.target.value);
  }

  //4

  function handleInputUnit4IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit4Id(e.target.value);
  }

  function handleInputUnit4RoleChange(e) {
    setUnit4Role(e.target.value);
  }

  //5

  function handleInputUnit5IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit5Id(e.target.value);
  }

  function handleInputUnit5RoleChange(e) {
    setUnit5Role(e.target.value);
  }

  //6
  function handleInputUnit6IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit6Id(e.target.value);
  }

  function handleInputUnit6RoleChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit6Role(e.target.value);
  }

  //7
  function handleInputUnit7IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit7Id(e.target.value);
  }

  function handleInputUnit7RoleChange(e) {
    setUnit7Role(e.target.value);
  }

  //8
  function handleInputUnit8IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit8Id(e.target.value);
  }

  function handleInputUnit8RoleChange(e) {
    setUnit8Role(e.target.value);
  }

  //9
  function handleInputUnit9IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit9Id(e.target.value);
  }

  function handleInputUnit9RoleChange(e) {
    setUnit9Role(e.target.value);
  }

  //10
  function handleInputUnit10IdChange(e) {
    e.target.value === "newItem"
    ? onClick()
    :  
    setUnit10Id(e.target.value);
  }

  function handleInputUnit10RoleChange(e) {
    setUnit10Role(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const Array = [
      {
        unit: unit1Id,
        role: unit1Role,
        modKill: checkedUnit1ModKill,
        bestPlayer: checkedUnit1BestPlayer,
      },
      {
        unit: unit2Id,
        role: unit2Role,
        modKill: checkedUnit2ModKill,
        bestPlayer: checkedUnit2BestPlayer,
      },
      {
        unit: unit3Id,
        role: unit3Role,
        modKill: checkedUnit3ModKill,
        bestPlayer: checkedUnit3BestPlayer,
      },
      {
        unit: unit4Id,
        role: unit4Role,
        modKill: checkedUnit4ModKill,
        bestPlayer: checkedUnit4BestPlayer,
      },
      {
        unit: unit5Id,
        role: unit5Role,
        modKill: checkedUnit5ModKill,
        bestPlayer: checkedUnit5BestPlayer,
      },
      {
        unit: unit6Id,
        role: unit6Role,
        modKill: checkedUnit6ModKill,
        bestPlayer: checkedUnit6BestPlayer,
      },
      {
        unit: unit7Id,
        role: unit7Role,
        modKill: checkedUnit7ModKill,
        bestPlayer: checkedUnit7BestPlayer,
      },
      {
        unit: unit8Id,
        role: unit8Role,
        modKill: checkedUnit8ModKill,
        bestPlayer: checkedUnit8BestPlayer,
      },
      {
        unit: unit9Id,
        role: unit9Role,
        modKill: checkedUnit9ModKill,
        bestPlayer: checkedUnit9BestPlayer,
      },
      {
        unit: unit10Id,
        role: unit10Role,
        modKill: checkedUnit10ModKill,
        bestPlayer: checkedUnit10BestPlayer,
      },
    ];
    onAddUnits(matchId, Array);
  }

  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <form className="form" onSubmit={handleSubmit}>
        <button
          className="form__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="form__title">Список игроков</h2>
        <label>
          Название игры
          <select value={matchId} onChange={handleInputMatchIdChange}>
            <option></option>
            {allMatches.map((match) => {
              return (
                <OptionMatch
                  title={match.title}
                  matchId={match._id}
                  key={match._id}
                />
              );
            })}
          
          </select>
        </label>
        <div className="form__columns">
          <div className="form__column">
            <fieldset className="form__units">
              <h3>Игрок 1</h3>
              <label>
                Ник игрока
                <select value={unit1Id} onChange={handleInputUnit1IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit1Role} onChange={handleInputUnit1RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit1ModKill}
                  onChange={() => setCheckedUnit1ModKill(!checkedUnit1ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit1BestPlayer}
                  onChange={() =>
                    setCheckedUnit1BestPlayer(!checkedUnit1BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>

            <fieldset className="form__units">
              <h3>Игрок 2</h3>
              <label>
                Ник игрока
                <select value={unit2Id} onChange={handleInputUnit2IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit2Role} onChange={handleInputUnit2RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit2ModKill}
                  onChange={() => setCheckedUnit2ModKill(!checkedUnit2ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit2BestPlayer}
                  onChange={() =>
                    setCheckedUnit2BestPlayer(!checkedUnit2BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>
            <fieldset className="form__units">
              <h3>Игрок 3</h3>
              <label>
                Ник игрока
                <select value={unit3Id} onChange={handleInputUnit3IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit3Role} onChange={handleInputUnit3RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit3ModKill}
                  onChange={() => setCheckedUnit3ModKill(!checkedUnit3ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit3BestPlayer}
                  onChange={() =>
                    setCheckedUnit3BestPlayer(!checkedUnit3BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>
            <fieldset className="form__units">
              <h3>Игрок 4</h3>
              <label>
                Ник игрока
                <select value={unit4Id} onChange={handleInputUnit4IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit4Role} onChange={handleInputUnit4RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit4ModKill}
                  onChange={() => setCheckedUnit4ModKill(!checkedUnit4ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit4BestPlayer}
                  onChange={() =>
                    setCheckedUnit4BestPlayer(!checkedUnit4BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>
            <fieldset className="form__units">
              <h3>Игрок 5</h3>
              <label>
                Ник игрока
                <select value={unit5Id} onChange={handleInputUnit5IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit5Role} onChange={handleInputUnit5RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit5ModKill}
                  onChange={() => setCheckedUnit5ModKill(!checkedUnit5ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit5BestPlayer}
                  onChange={() =>
                    setCheckedUnit5BestPlayer(!checkedUnit5BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>
          </div>
          <div className="form__column">
            <fieldset className="form__units">
              <h3>Игрок 6</h3>
              <label>
                Ник игрока
                <select value={unit6Id} onChange={handleInputUnit6IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit6Role} onChange={handleInputUnit6RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit6ModKill}
                  onChange={() => setCheckedUnit6ModKill(!checkedUnit6ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit6BestPlayer}
                  onChange={() =>
                    setCheckedUnit6BestPlayer(!checkedUnit6BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>
            <fieldset className="form__units">
              <h3>Игрок 7</h3>
              <label>
                Ник игрока
                <select value={unit7Id} onChange={handleInputUnit7IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit7Role} onChange={handleInputUnit7RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit7ModKill}
                  onChange={() => setCheckedUnit7ModKill(!checkedUnit7ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit7BestPlayer}
                  onChange={() =>
                    setCheckedUnit7BestPlayer(!checkedUnit7BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>
            <fieldset className="form__units">
              <h3>Игрок 8</h3>
              <label>
                Ник игрока
                <select value={unit8Id} onChange={handleInputUnit8IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit8Role} onChange={handleInputUnit8RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit8ModKill}
                  onChange={() => setCheckedUnit3ModKill(!checkedUnit8ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit8BestPlayer}
                  onChange={() =>
                    setCheckedUnit8BestPlayer(!checkedUnit8BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>
            <fieldset className="form__units">
              <h3>Игрок 9</h3>
              <label>
                Ник игрока
                <select value={unit9Id} onChange={handleInputUnit9IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select value={unit9Role} onChange={handleInputUnit9RoleChange}>
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit9ModKill}
                  onChange={() => setCheckedUnit9ModKill(!checkedUnit9ModKill)}
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit9BestPlayer}
                  onChange={() =>
                    setCheckedUnit9BestPlayer(!checkedUnit9BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>

            <fieldset className="form__units">
              <h3>Игрок 10</h3>
              <label>
                Ник игрока
                <select value={unit10Id} onChange={handleInputUnit10IdChange}>
                  <option></option>
                  {allUnits.map((unit) => {
                    return (
                      <OptionUnit
                        name={unit.name}
                        key={unit._id}
                        unitId={unit._id}
                      />
                    );
                  })}
                  <option value="newItem">...добавить игрока</option>
                </select>
              </label>
              <label>
                Роль в игре
                <select
                  value={unit10Role}
                  onChange={handleInputUnit10RoleChange}
                >
                  <option></option>
                  <option value="мирный">мирный</option>
                  <option value="мафия">мафия</option>
                  <option value="дон">дон</option>
                  <option value="шериф">шериф</option>
                </select>
              </label>

              <label>
                Модкилл в игре
                <input
                  type="checkbox"
                  checked={checkedUnit10ModKill}
                  onChange={() =>
                    setCheckedUnit10ModKill(!checkedUnit10ModKill)
                  }
                ></input>
              </label>

              <label>
                Лучший игрок
                <input
                  type="checkbox"
                  checked={checkedUnit10BestPlayer}
                  onChange={() =>
                    setCheckedUnit10BestPlayer(!checkedUnit10BestPlayer)
                  }
                ></input>
              </label>
            </fieldset>
          </div>
        </div>

        <button className="form__submit" type="submit" value="Сохранить">
          Сохранить
        </button>
      </form>
    </section>
  );
}

export default AddUnitsForm;
