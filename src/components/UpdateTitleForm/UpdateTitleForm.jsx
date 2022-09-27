import React from "react";
import { useState, useContext, useEffect } from "react";
import "./UpdateTitleForm.css";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";

function UpdateTitleForm({
  onUpdateTitle,
  onClose,
  isOpen,
  match
}) {
  const [title, setTitle] = useState("");
  function handleInputTitleChange(e) {
   setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateTitle(match, title);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Редактировать название"
      button="Сохранить"
    >
      
      <input value={title} onChange={handleInputTitleChange}>
 
      </input>
    </Form>
  );
}

export default UpdateTitleForm;
