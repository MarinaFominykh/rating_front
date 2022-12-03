import React from "react";
import { useState, useContext, useEffect } from "react";
import "./AddMatchesForm.css";
import { getMatches, getUnits } from "../../utils/Api.js";
import OptionUnit from "../OptionUnit/OptionUnit.jsx";
import Popup from "../Popup/Popup.jsx";
import Form from "../Form/Form.jsx";
import Error from "../Error/Error.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

function AddMatchesForm({ isOpen, onAddMatch, onClose, onClick, units }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);
  function handleInputGameMasterChange(e) {
    e.target.value === "newItem" ? onClick() : handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddMatch({
      title: values.titleAddMatchForm,
      gameMaster: values.gameMasterAddMatchForm,
      date: values.dateMasterAddMatchForm,
      result: values.resultAddMatchForm,
    });
  }

  return (
    <Popup isOpen={isOpen} className="add-mathes">
      <Form
        onSubmit={handleSubmit}
        onClose={onClose}
        title="Новая игра"
        button="Сохранить"
        isDisabled={!isValid}
      >
        <label>
          Название игры
          <input
            name="titleAddMatchForm"
            type="text"
            placeholder="Название игры"
            // value={title}
            value={values.titleAddMatchForm || ""}
            onChange={handleChange}
            required
          ></input>
          <Error error={errors.titleAddMatchForm} />
        </label>
        <label>
          Ведущий
          <select
            name="gameMasterAddMatchForm"
            value={values.gameMasterAddMatchForm}
            onChange={handleInputGameMasterChange}
            required
          >
            <option></option>
            {units.map((unit) => {
              return (
                <OptionUnit name={unit.name} key={unit._id} unitId={unit._id} />
              );
            })}
            <option value="newItem">...добавить игрока</option>
          </select>
          <Error error={errors.gameMasterAddMatchForm} />
        </label>
        <label>
          Дата окончания игры
          <input
            name="dateMasterAddMatchForm"
            type="date"
            placeholder="Дата окончания игры"
            value={values.dateMasterAddMatchForm || ""}
            onChange={handleChange}
            required
          ></input>
          <Error error={errors.dateMasterAddMatchForm} />
        </label>
        <div className="form__result">
          <label>
            Результат игры
            <select
              name="resultAddMatchForm"
              value={values.resultAddMatchForm || ""}
              onChange={handleChange}
              required
            >
              <option></option>
              <option value="Победа города">победа города</option>
              <option value="Победа мафии">победа мафии</option>
              <option value="Ничья">ничья</option>
            </select>
            <Error error={errors.resultAddMatchForm} />
          </label>
        </div>
      </Form>
    </Popup>
  );
}

export default AddMatchesForm;
