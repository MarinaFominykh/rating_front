import "./Form.scss";
import InfoTooltip from "../InfoTooltip/InfoTooltip.jsx";
function Form({
  onSubmit,
  onClose,
  title,
  children,
  isDisabled,
  className,
  message,
  buttonLeftValue,
  handlerClick,
  link,
  linkClass,
  submitClass,
  handlerLink,
  linkText,
  linkBack,
}) {
  return (
    <form className={`form form_${className}`} onSubmit={onSubmit} noValidate>
      <button type="button" className="form__close" onClick={onClose} />
      <h2 className="form__title">{title}</h2>
      <fieldset className="form__container">{children}</fieldset>
      <InfoTooltip message={message} />
      <div className="form__buttons-container">
        <button
          className="form__button form__button-back"
          type="button"
          value={buttonLeftValue}
          onClick={handlerClick}
        >
          <a href={linkBack} className="form__link-back">
            {buttonLeftValue}
          </a>
        </button>
        <button
          className={`form__button form__button-submit form__button-submit_${submitClass}`}
          type="submit"
          value="Сохранить"
          disabled={isDisabled}
        >
          Сохранить
        </button>

        <a href={link} className={`form__link form__link_${linkClass}`}>
          Далее
        </a>
      </div>
    </form>
  );
}
export default Form;
