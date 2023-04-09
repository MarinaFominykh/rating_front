import React from "react";
import "./UpdateUnitForm.scss";
import Popup from "../Popup/Popup.jsx";
import Form from "../Form/Form.jsx";

import Error from "../Error/Error.jsx";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";

function UpdateUnitForm({ onUpdateUnit, onClose, isOpen, currentName, message }) {
  const { values, handleChange, errors, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUnit(values.updateUnitForm);
    e.target.reset();
  }
  return (
    <Popup isOpen={isOpen} className="update-name">
      <Form
        onSubmit={handleSubmit}
        className="update-name"
        submitClass="update-name"
        title="Настройки"
        buttonLeftValue="Назад"
        isDisabled={!isValid}
        handlerClick={onClose}
        linkClass="hidden"
        onClose={onClose}
      >
        <label className="form__label" htmlFor="updateUnitForm">
          Имя пользователя
        </label>
        <input
          className="form__input"
          name="updateUnitForm"
          id="updateUnitForm"
          defaultValue={currentName}
          // value={values.updateUnitForm || ""}
          onChange={handleChange}
          required
        ></input>
        <div className="form__error">
          <Error error={errors.updateUnitForm} />
        </div>
        <InfoTooltip message={message}/>
      </Form>
    </Popup>
  );
}

export default UpdateUnitForm;
