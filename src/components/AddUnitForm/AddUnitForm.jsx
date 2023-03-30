import React from "react";
import { useState, useContext, useEffect } from "react";
import "./AddUnitForm.scss";
import Popup from "../Popup/Popup.jsx";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import Error from "../Error/Error.jsx";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

function AddUnitForm({ onAddUnit, onClose, isOpen, currentName, message }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [name, setName] = useState("");
  function handleInputNameChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddUnit(values.addUnitForm);
    e.target.reset();
  }
  return (
    <Popup isOpen={isOpen} className="add-unit">
      <Form
        onSubmit={handleSubmit}
        className="add-unit"
        submitClass="add-unit"
        title="Новый игрок"
        buttonLeftValue="Назад"
        isDisabled={!isValid}
        handlerClick={onClose}
        linkClass="hidden"
        onClose={onClose}
      >
        <label className="form__label add-unit__label" htmlFor="addUnitForm">
          Имя пользователя
        </label>
        <input
          className="form__input"
          name="addUnitForm"
          id="addUnitForm"
        
          value={values.addUnitForm || ""}
          onChange={handleChange}
          placeholder="Введите имя"
          required
        ></input>
        <div className="form__error">
          <Error error={errors.addUnitForm} />
        </div>
        <InfoTooltip message={message}/>
      </Form>
    </Popup>
  );
}

export default AddUnitForm;
