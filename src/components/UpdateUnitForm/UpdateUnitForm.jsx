import React from "react";
import { useState, useContext, useEffect } from "react";
import "./UpdateUnitForm.css";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

function UpdateUnitForm({ onUpdateUnit, onClose, isOpen }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [name, setName] = useState("");
  function handleInputNameChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUnit(values.updateUnitForm);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Редактировать ник игрока"
      button="Сохранить"
      isDisabled={!isValid}
    >
      <label>
        Редактировать ник игрока
        <input
          name="updateUnitForm"
          value={values.updateUnitForm || ""}
          onChange={handleChange}
          required
        ></input>
        <Error error={errors.updateUnitForm} />
      </label>
    </Form>
  );
}

export default UpdateUnitForm;
