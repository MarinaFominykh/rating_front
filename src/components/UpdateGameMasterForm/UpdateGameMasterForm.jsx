import React from "react";
import { useState, useContext, useEffect } from "react";
import "./UpdateGameMasterForm.css";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

function UpdateGameMasterForm({
  onUpdateGameMaster,
  onClose,
  isOpen,
  units,
  onClick,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleInputGameMasterChange(e) {
    e.target.value === "newItem" ? onClick() : handleChange(e);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateGameMaster(values.nameUpdateGameMasterForm);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Изменить ведущего"
      button="Сохранить"
      isDisabled={!isValid}
    >
      <label>
        Изменить ведущего
        <select
          name="nameUpdateGameMasterForm"
          value={values.nameUpdateGameMasterForm}
          onChange={handleInputGameMasterChange}
          required
        >
          <option></option>
          {units.map((unit) => {
            return (
              <OptionUnit name={unit.name} key={unit._id} unitId={unit._id} />
            );
          })}
          <option value="newItem">...добавить игрока</option>
        </select>
        <Error error={errors.nameUpdateGameMasterForm} />
      </label>
    </Form>
  );
}

export default UpdateGameMasterForm;
