import React from "react";
import { useState, useContext, useEffect } from "react";
import "./AddUnitForm.css";
import Form from "../Form/Form.jsx";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";
function AddUnitForm({ isOpen, onClose, onAddUnit }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onAddUnit(values.nameAddUnit);
  }
  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Новый игрок"
      button="Сохранить"
      isDisabled={!isValid}
      className="add-unit"
    >
      <label>
        <input
          name="nameAddUnit"
          type="text"
          placeholder="Ник игрока"
          value={values.nameAddUnit || ""}
          onChange={handleChange}
          required
        ></input>
        <Error error={errors.nameAddUnit} />
      </label>
    </Form>
  );
}

export default AddUnitForm;
