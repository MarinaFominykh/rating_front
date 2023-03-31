import "./Login.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form.jsx";
import { useFormWithValidation } from "../../hooks/UseFormValidation.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.jsx";
function Login({ onLogin, message }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }
  return (
    <section className="login">
       <form className="login__form" onSubmit={handleSubmit } noValidate>
      <h2 className="form__title">Авторизация</h2>
      <fieldset className="form__inputs">
      <input
          name="login"
          className="form__input"
          placeholder="Логин"
          value={values.login || ""}
          onChange={handleChange}
          required
        />
        <InfoTooltip message={errors.login || ""}></InfoTooltip>
        <input
          name="password"
          type="password"
          className="form__input"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <InfoTooltip message={errors.password || ""}></InfoTooltip>
      </fieldset>
      <InfoTooltip message={message} />
      <button
        type="submit"
        className="login__button"
        value="Войти"
        // disabled={isDisabled}
      >
        Войти
      </button>
     
    </form>
   
    </section>
  );
}

export default Login;
