import React from "react";
import { useState } from "react";
import "./ReplaceUnitForm.css";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";

function ReplaceUnitForm({ onReplaceUnit, onClose, isOpen, match, units }) {
  const [unit, setUnit] = useState("");
  function handleInputUnitChange(e) {
    setUnit(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onReplaceUnit(match, unit);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Редактировать игрока"
      button="Сохранить"
    >
      <select value={unit} onChange={handleInputUnitChange}>
        <option></option>
        {units.map((unit) => {
          return (
            <OptionUnit name={unit.name} key={unit._id} unitId={unit._id} />
          );
        })}
        <option value="newItem">...добавить игрока</option>
      </select>
    </Form>
  );
}

export default ReplaceUnitForm;
