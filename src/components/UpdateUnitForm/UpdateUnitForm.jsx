import React from "react";
import { useState, useContext, useEffect } from "react";
import "./UpdateUnitForm.css";
import Form from "../Form/Form.jsx";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";

function UpdateUnitForm({ onUpdateUnit,
  onClose,
  isOpen,

  onClick,}) {
    const [name, setName] = useState("");
    function handleInputNameChange(e) {
     setName(e.target.value);
    }
    function handleSubmit(e) {
      e.preventDefault();
      onUpdateUnit(name);
    }
    return (
      <Form
        onSubmit={handleSubmit}
        onClose={onClose}
        isOpen={isOpen}
        title="Редактировать ник игрока"
        button="Сохранить"
      >
         <input value={name} onChange={handleInputNameChange}>
 
 </input>
        {/* <select value={gameMaster} onChange={handleInputGameMasterChange}>
          <option></option>
          {units.map((unit) => {
            return (
              <OptionUnit name={unit.name} key={unit._id} unitId={unit._id} />
            );
          })}
          <option value="newItem">...добавить игрока</option>
        </select> */}
      </Form>
    );

}

export default UpdateUnitForm;
