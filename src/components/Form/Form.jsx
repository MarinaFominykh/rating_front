import "./Form.css";
import InfoTooltip from "../InfoTooltip/InfoTooltip.jsx";
function Form({
  onSubmit,
  onClose,
  isOpen,
  title,
  children,
  button,
  isDisabled,
  className,
  message
}) {
  return (
    <section
      className={`popup popup_type_${className} ${isOpen && "popup_opened"}`}
    >
      <form className="form" onSubmit={onSubmit} noValidate>
        <button type="button" className="form__close" onClick={onClose} />
        <h2 className="form__title">{title}</h2>
        <fieldset className="form__container">{children}</fieldset>
        <InfoTooltip message={message} />
        <button
          type="submit"
          className="form__save"
          value={button}
          disabled={isDisabled}
        >
          {button}
        </button>
      </form>
    </section>
  );
}
export default Form;
