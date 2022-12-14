import React from "react";
import { useState, useContext, useEffect } from "react";
import "./UpdateUnitForm.scss";
import Popup from "../Popup/Popup.jsx";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

function UpdateUnitForm({ onUpdateUnit, onClose, isOpen, currentName }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [name, setName] = useState("");
  function handleInputNameChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUnit(values.updateUnitForm);
    e.target.reset();
  }
  return (
    <Popup isOpen={isOpen} className="update-name">
      <Form
        onSubmit={handleSubmit}
        className="update-name"
        title="Настройки"
        buttonLeftValue="Назад"
        isDisabled={!isValid}
        handlerClick={onClose}
        linkClass="hidden"
      >
        <label className="form__label" htmlFor="updateUnitForm">
          Имя пользователя
        </label>
        <input
          className="form__input"
          name="updateUnitForm"
          id="updateUnitForm"
          defaultValue={currentName}
          // value={values.updateUnitForm || ""}
          onChange={handleChange}
          required
        ></input>
        <div className="form__error">
          <Error error={errors.updateUnitForm} />
        </div>
      </Form>
    </Popup>
  );
}

export default UpdateUnitForm;
