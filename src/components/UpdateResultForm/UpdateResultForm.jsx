import React from "react";
import { useState } from "react";
import "./UpdateResultForm.css";
import Form from "../Form/Form.jsx";

function UpdateResultForm({ onUpdateResult, onClose, isOpen }) {
  const [result, setResult] = useState("");
  function handleInputResultChange(e) {
    setResult(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateResult(result);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Редактировать результат игры"
      button="Сохранить"
    >
      <label>
        <select value={result} onChange={handleInputResultChange}>
          <option></option>
          <option value="Победа города">победа города</option>
          <option value="Победа мафии">победа мафии</option>
          <option value="Ничья">ничья</option>
        </select>
      </label>
    </Form>
  );
}

export default UpdateResultForm;
