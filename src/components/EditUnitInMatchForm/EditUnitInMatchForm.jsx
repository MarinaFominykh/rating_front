import React from "react";
import { useState, useContext, useEffect } from "react";
import "./EditUnitInMatchForm.css";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import Popup from "../Popup/Popup";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

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
      >
        <label>
          Ник игрока
          <input
            name="nameEditUnitInMatchForm"
            list="nameEditUnitInMatchForm"
            // value={name}
            onChange={handleInputEditUnitChange}
            value={values.nameEditUnitInMatchForm || ""}
            // onChange={handleChange}
            required
          />
          <datalist id="nameEditUnitInMatchForm">
            {/* <option value={null}></option> */}
            {units.map((unit) => {
              return (
                <OptionUnit name={unit.name} key={unit._id} unitId={unit._id} />
              );
            })}
            {/* <option value="newItem">...добавить игрока</option> */}
          </datalist>
          {/* Спан с ошибкой появляется только после повторного выбора пустого поля. Нужен рефакторинг */}
          <Error error={errors.nameEditUnitInMatchForm} />
        </label>

        <label>
          Роль в игре
          <select
            name="roleEditUnitInMatch"
            // value={role}
            // onChange={handleInputUnitRoleChange}
            value={values.roleEditUnitInMatch || ""}
            onChange={handleChange}
            required
          >
            <option></option>
            <option value="мирный">мирный</option>
            <option value="мафия">мафия</option>
            <option value="дон">дон</option>
            <option value="шериф">шериф</option>
          </select>
          <Error error={errors.roleEditUnitInMatch} />
        </label>
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
