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
      title="Удалить игру?"
      button="Да"
    ></Form>
  );
}

export default ConfirmForm;
