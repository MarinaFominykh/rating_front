import React from "react";
import { useState, useContext, useEffect } from "react";
import "./EditUnitInMatchForm.css";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";

function EditUnitInMatchForm({
  onEditUnitInMatch,
  onClose,
  isOpen,
  units,
  onClick,
  
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [checkedModKill, setCheckedModKill] = useState(false);
  const [checkedBestPlayer, setCheckedBestPlayer] = useState(false);
  function handleInputEditUnitChange(e) {
    e.target.value === "newItem" ? onClick() : setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onEditUnitInMatch(name, role, checkedModKill, checkedBestPlayer);
  }
 

  function handleInputUnitRoleChange(e) {
    setRole(e.target.value);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Редактировать данные игрока"
      button="Сохранить"
    >
        <label>
            Ник игрока
            <select value={name} onChange={handleInputEditUnitChange}>
        <option></option>
        {units.map((unit) => {
          return (
            <OptionUnit name={unit.name} key={unit._id} unitId={unit._id} />
          );
        })}
        <option value="newItem">...добавить игрока</option>
      </select>
        </label>
    
      <label>
              Роль в игре
              <select value={role} onChange={handleInputUnitRoleChange}>
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
                checked={checkedModKill}
                onChange={() => setCheckedModKill(!checkedModKill)}
              ></input>
            </label>

            <label>
              Лучший игрок
              <input
                type="checkbox"
                checked={checkedBestPlayer}
                onChange={() =>
                  setCheckedBestPlayer(!checkedBestPlayer)
                }
              ></input>
            </label>
    </Form>
  );
}

export default EditUnitInMatchForm;
