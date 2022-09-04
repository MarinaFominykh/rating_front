import React from "react";
import { useState, useContext, useEffect } from "react";
import "./UpdateUnitForm.css";

function UpdateUnitForm({isOpen, onClose, onUpdateUnit, unit, currentName, currentUnitId}) {
    const [name, setName] = useState("")
    const[unitId, setUnitId] = useState('')

    function handleInputNameChange(e) {
        setName(e.target.value);
      }
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUnit(name, unit);
        setName("")
      }

      // useEffect(() => {
      //   setName(currentName);
      //   setUnitId(currentUnitId);
      // }, [isOpen]);
  
      return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <form className="form" onSubmit={handleSubmit}>
        <button
          className="form__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="form__title">Редактировать данные игрока</h2>
        <fieldset className="form__unit">
          
            <input
              id="title"
              type="text"
              placeholder="Ник игрока"
              value={name}
              onChange={handleInputNameChange}
              required
            ></input>
         
        </fieldset>

        <button className="form__submit" type="submit" value="Сохранить">
          Сохранить
        </button>
      </form>
    </section>
  );
}

export default UpdateUnitForm;
