import React from "react";
import { useState, useContext, useEffect } from "react";
import "./AddUnitForm.css";
import Form from "../Form/Form.jsx";
import Error from "../Error/Error.jsx";
import {
  useFormWithValidation,
  useForm,
} from "../../hooks/UseFormValidation.js";
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
        {/* <span>{errors.nameAddUnit || ""}</span> */}
      </label>
    </Form>
  );
}

export default AddUnitForm;

// <section className={`popup ${isOpen && "popup_opened"}`}>
//   <form className="form" onSubmit={handleSubmit}>
//     <button
//       className="form__close"
//       type="button"
//       onClick={onClose}
//     ></button>
//     <h2 className="form__title">Новый игрок</h2>
//     <fieldset className="form__unit">

//         <input
//           id="title"
//           type="text"
//           placeholder="Ник игрока"
//           value={name}
//           onChange={handleInputNameChange}
//           required
//         ></input>

//     </fieldset>

//     <button className="form__submit" type="submit" value="Сохранить">
//       Сохранить
//     </button>
//   </form>
// </section>
