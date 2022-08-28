import React from "react";
import { useState, useContext, useEffect } from "react";
import "./AddUnitForm.css";
import { getMatches, getUnits } from "../../utils/Api.js";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
function AddUnitForm({isOpen, onClose, onAddUnit}) {
    const [name, setName] = useState("")

    function handleInputNameChange(e) {
        setName(e.target.value);
      }
    function handleSubmit(e) {
        e.preventDefault();
        onAddUnit(name);
        console.log(name)
      }
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <form className="form" onSubmit={handleSubmit}>
        <button
          className="form__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="form__title">Новый игрок</h2>
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

export default AddUnitForm;
