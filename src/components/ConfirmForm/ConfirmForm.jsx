import React from "react";
import { useState, useContext, useEffect } from "react";
import "./ConfirmForm.scss";
import Form from "../Form/Form.jsx";
import Popup from "../Popup/Popup";

function ConfirmForm({ onMatchDelete, onClose, isOpen }) {
  function handleSubmit(e) {
    e.preventDefault();
    onMatchDelete();
  }

  return (
    <Popup isOpen={isOpen} className="confirm">
      <Form
        onSubmit={handleSubmit}
        onClose={onClose}
        isOpen={isOpen}
        title="Удаление игры"
        className="confirm"
        linkClass="hidden"
        submit="Удалить"
        submitClass="confirm"
        buttonLeftValue="Отменить"
        handlerClick={onClose}
      >
        <p className="confirm__question">
          Вы действительно хотите удалить игру?
        </p>
        <p className="confirm__text">
          В случае удаления, игру восстановить будет невозможно. Все данные
          будут потеряны
        </p>
      </Form>
    </Popup>
  );
}

export default ConfirmForm;
