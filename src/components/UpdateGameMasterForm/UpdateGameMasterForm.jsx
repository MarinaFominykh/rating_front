import React from "react";
import { useState, useContext, useEffect } from "react";
import "./UpdateGameMasterForm.css";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";

function UpdateGameMasterForm({
  onUpdateGameMaster,
  onClose,
  isOpen,
  units,
  onClick,
  
}) {
  const [gameMaster, setGameMaster] = useState("");
  function handleInputGameMasterChange(e) {
    e.target.value === "newItem" ? onClick() : setGameMaster(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateGameMaster(gameMaster);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      title="Изменить ведущего"
      button="Сохранить"
    >
      <select value={gameMaster} onChange={handleInputGameMasterChange}>
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

export default UpdateGameMasterForm;
