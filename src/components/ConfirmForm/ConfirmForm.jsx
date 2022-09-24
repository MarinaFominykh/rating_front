import React from "react";
import { useState, useContext, useEffect } from "react";
import "./ConfirmForm.css";
import Form from "../Form/Form.jsx";

function ConfirmForm({ onMatchDelete, match, onClose, isOpen }) {
  function handleSubmit(e) {
    e.preventDefault();
    onMatchDelete(match);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Вы уверены?"
      button="да"
    ></Form>
  );
}

export default ConfirmForm;

// <section className="popup popup_type_confirmation">
//   <form className="form" name="confirmationForm" novalidate>
//     <button type="button" className="form__close"></button>
//     <h2 classNames="form__title form__title_form_confirmation">
//       Вы уверены?
//     </h2>

//     <button type="submit" className="form__save" value="Да">
//       Да
//     </button>
//   </form>
// </section>
