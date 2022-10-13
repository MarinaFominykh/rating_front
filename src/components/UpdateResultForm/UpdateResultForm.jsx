import React from "react";
import { useState, useEffect } from "react";
import "./UpdateResultForm.css";
import Form from "../Form/Form.jsx";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

function UpdateResultForm({ onUpdateResult, onClose, isOpen }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateResult(values.resultUdateForm);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Редактировать результат игры"
      button="Сохранить"
      isDisabled={!isValid}
    >
      <label>
        <select
          name="resultUdateForm"
          value={values.resultUdateForm || ""}
          onChange={handleChange}
          required
        >
          <option></option>
          <option value="Победа города">победа города</option>
          <option value="Победа мафии">победа мафии</option>
          <option value="Ничья">ничья</option>
        </select>
        <Error error={errors.resultUdateForm} />
      </label>
    </Form>
  );
}

export default UpdateResultForm;
