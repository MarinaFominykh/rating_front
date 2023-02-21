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

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function onChangeName(newValue) {
    setName(newValue);
  }
  function onChangeRole(newValue) {
    setRole(newValue);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // onEditUnitInMatch(name, role, checkedModKill, checkedBestPlayer);
    onEditUnitInMatch({
      unit: name.value,
      role: role.value,
    });
    // console.log({
    //   unit: name.value,
    //   role: role.value,
    // });
  }

  return (
    <Popup isOpen={isOpen}>
      <Form
        onSubmit={handleSubmit}
        onClose={onClose}
        title="Редактировать данные игрока"
        button="Сохранить"
        className="edit-unit"
        // isDisabled={!isValid}
        linkClass="hidden"
        buttonLeftValue="Назад"
        handlerClick={onClose}
      >
        <label className="form__label">
          Ник игрока
          <Select
            options={optionsUnit(units)}
            placeholder={<div>Выберите из списка</div>}
            isClearable
            value={name}
            onChange={onChangeName}
            className="select-input"
          />
        </label>

        <label className="form__label">
          Роль в игре
          <Select
            options={optionsRole}
            value={role}
            onChange={onChangeRole}
            placeholder={<div>Выберите из списка</div>}
            className="select-input"
            isClearable
          />
        </label>
      </Form>
    </Popup>
  );
}

export default EditUnitInMatchForm;
