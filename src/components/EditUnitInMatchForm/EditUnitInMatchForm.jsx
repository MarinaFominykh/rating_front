import React from "react";
import { useState, useContext, useEffect } from "react";
import Select from "react-select";
import "./EditUnitInMatchForm.scss";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import Popup from "../Popup/Popup";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";
import { optionsResult, optionsRole } from "../../utils/constans.js";
import { optionsUnit } from "../../utils/functions.js";
function EditUnitInMatchForm({
  onEditUnitInMatch,
  onClose,
  isOpen,
  units,
  onClick,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [checkedModKill, setCheckedModKill] = useState(false);
  const [checkedBestPlayer, setCheckedBestPlayer] = useState(false);

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleInputEditUnitChange(e) {
    e.target.value === "newItem" ? onClick() : handleChange(e);
  }
  function onChangeName(newValue) {
    setName(newValue);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // onEditUnitInMatch(name, role, checkedModKill, checkedBestPlayer);
    onEditUnitInMatch({
      unit: values.nameEditUnitInMatchForm,
      role: values.roleEditUnitInMatch,
      modKill: checkedModKill,
      bestPlayer: checkedBestPlayer,
    });
  }

  function handleInputUnitRoleChange(e) {
    setRole(e.target.value);
  }
  return (
    <Popup isOpen={isOpen}>
      <Form
        onSubmit={handleSubmit}
        onClose={onClose}
        title="Редактировать данные игрока"
        button="Сохранить"
        className="edit-unit"
        isDisabled={!isValid}
        linkClass="hidden"
        buttonLeftValue="Назад"
        handlerClick={onClose}
      >
        <label className="form__label">Выберите ведущего</label>
        {/* <select
            name="gameMasterEditMatchForm"
            defaultValue={match.gameMaster?.name}
            onChange={handleChange}
            className="form__input"
          >
            <option></option>
            {units.map((unit) => {
              return (
                <OptionUnit name={unit.name} key={unit._id} unitId={unit._id} />
              );
            })}
            <option value="newItem">...добавить игрока</option>
          </select> */}
        <Select
          options={optionsUnit(units)}
          placeholder={<div>Выберите из списка</div>}
          isClearable
          value={name}
          onChange={onChangeName}
          className="select-input"
        />

        <label className="form__label">Роль в игре</label>
        <Select
          options={optionsRole}
          placeholder={<div>Выберите из списка</div>}
          className="select-input"
          isClearable
        />
        <label>
          Модкилл в игре
          <input
            name="modKillEditUnitInMatch"
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
            onChange={() => setCheckedBestPlayer(!checkedBestPlayer)}
          ></input>
        </label>
      </Form>
    </Popup>
  );
}

export default EditUnitInMatchForm;
