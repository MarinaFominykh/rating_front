import React from "react";
import { useState, useContext, useEffect } from "react";
import "./UpdateTitleForm.css";
import Form from "../Form/Form.jsx";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

function UpdateTitleForm({ onUpdateTitle, onClose, isOpen }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleInputTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateTitle(values.updateTitleForm);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Редактировать название"
      button="Сохранить"
      isDisabled={!isValid}
    >
      <label>
        Редактировать название
        <input
          name="updateTitleForm"
          value={values.updateTitleForm || ""}
          onChange={handleChange}
          required
        ></input>
        <Error error={errors.updateTitleForm} />
      </label>
    </Form>
  );
}

export default UpdateTitleForm;
